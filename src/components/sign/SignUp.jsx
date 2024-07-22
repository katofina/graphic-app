import './Sign.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sign from '../../store/signSlice';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(values.password)) {
        errors.password = 'Should contain 1 special character, 1 digit, 1 letter';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } else if (localStorage.getItem(`${values.email}_graph`)) {
        errors.email = 'This email already exist';
    }

    return errors;
};

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            localStorage.setItem(`${values.email}_graph`, JSON.stringify({password: values.password, firstName: values.firstName}));
            dispatch(sign.actions.setAuth({auth: true, name: values.firstName}));
            navigate(-1);
        },
    });
    return (
        <div className='divForm'>
            <form onSubmit={formik.handleSubmit} className='form'>
                <p className='pSign'>Sign Up</p> 
                <div className='divSign'>
                    <div className="divInput">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            className="input"
                        />
                        {formik.errors.firstName ? <div className="divError">{formik.errors.firstName}</div> : null}
                    </div>

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