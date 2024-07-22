import './Sign.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sign from '../../store/signSlice';
import canvas from '../../store/canvasSlice';

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^(?=.*\d)(?=(.*\W))(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(values.password)) {
        errors.password = 'Should contain 1 special character, 1 digit, 1 letter';
    } else if (JSON.parse(localStorage.getItem(`${values.email}_graph`)).password !== values.password) {
        errors.password = 'Incorrect passwrod';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } else if (!localStorage.getItem(`${values.email}_graph`)) {
        errors.email = 'User with this email are not registered'
    }

    return errors;
};

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            const userInfo = JSON.parse(localStorage.getItem(`${values.email}_graph`));
            console.log(userInfo);
            dispatch(sign.actions.setAuth({auth: true, name: userInfo.firstName, email: values.email}));
            const save = userInfo.save;
            if (save.length) dispatch(canvas.actions.concatSave(save));
            navigate(-1);
        },
    });
    return (
        <div className='divForm'>
            <form onSubmit={formik.handleSubmit} className='form'>
                <p className='pSign'>Sign In</p> 
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