import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import sign from '../../store/signSlice';
import canvas from '../../store/canvasSlice';

function Header() {
    const auth = useSelector(store => store.sign.auth);
    const dispatch = useDispatch();

    function logOut() {
        dispatch(sign.actions.setAuth({auth: false, name: '', email: ''}));
        dispatch(canvas.actions.clearSave());
    };

    return (
        <>
            <p className="pLabel"><Link className='link' to="/">GraphApp</Link></p>

            <div>
                {auth ? (
                    <>
                        <button className='buttonSign'><Link className='link' to="/save">Save Image</Link></button>
                        <button className='buttonSign' onClick={logOut}>Log Out</button>
                    </>
                ) : (
                    <>
                        <button className='buttonSign'><Link className='link' to="/signin">Sign In</Link></button>
                        <button className='buttonSign'><Link className='link' to="/signup">Sign Up</Link></button>
                    </>
                )}
            </div>
        </>
    )
}

export default Header;