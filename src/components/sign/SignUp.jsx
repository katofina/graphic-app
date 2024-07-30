import './Sign.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createUser} from "../../firebase";
import {startSession} from "../../storage/session";
import { useState } from 'react';

const validate = values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(values.password)) {
        errors.password = 'Should contain 1 special character, 1 digit, 1 letter';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const SignUp = () => {
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
                let registerResponse = await createUser(values.email, values.password);
                startSession(registerResponse.user);
                navigate('/draw');
            } catch (error) {
                console.error(error.message);
                setError(error.message);
            }
        },
    });
    return (
        <div className='divForm'>
            <form onSubmit={formik.handleSubmit} className='form'>
                <p className='pSign'>Sign Up</p> 
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

export default SignUp;