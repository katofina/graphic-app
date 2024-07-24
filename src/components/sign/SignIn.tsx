import './Sign.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {signInUser} from "../../firebase.ts";
import {startSession} from "../../storage/session.ts";
import { useState } from 'react';
import React from 'react';

const validate = (values: { password: string, email: string }) => {
    const errors: { password?: string, email?: string } = {};
    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(values.password)) {
        errors.password = 'Should contain 1 special character, 1 digit, 1 letter';
    };

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    };

    return errors;
};

const SignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async(values) => {
            try {
                let loginResponse = await signInUser(values.email, values.password);
                let accessToken = await loginResponse.user.getIdToken();
                console.log(loginResponse.user, accessToken);
                startSession(loginResponse.user.email, accessToken);
                navigate("/draw");
            } catch (error) {
                console.error(error.message);
                setError(error.message);
            }
        },
    });
    return (
        <div className='divForm'>
            <form onSubmit={formik.handleSubmit} className='form'>
                <p className='pSign'>Sign In</p> 
                {error && <p>Error: {error}</p>}
                <div className='divSign'>
                    <div className="divInput">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="input"
                        />
                        {formik.errors.email ? <div className="divError">{formik.errors.email}</div> : null}
                    </div>

                    <div className="divInput">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="input"
                        />
                        {formik.errors.password ? <div className="divError">{formik.errors.password}</div> : null}
                    </div>
                </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default SignIn;