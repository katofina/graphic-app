import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import {endSession, isLoggedIn} from "../../storage/session";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import canvas from '../../store/canvasSlice';

function Header() {
    const [isLogged, setIsLogged] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isLoggedIn()) {setIsLogged(false)}
        else {setIsLogged(true)}
    }, [navigate])

    function logOut() {
        dispatch(canvas.actions.clearSave());
        endSession();
        setIsLogged(!isLogged);
    };

    return (
        <>
            <p className="pLabel"><Link className='link' to="/">GraphApp</Link></p>

            <div>
                {isLogged ? (
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