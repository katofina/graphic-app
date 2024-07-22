import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
            <p className="pLabel">GraphApp</p>

            <div>
                <button className='buttonSign'><Link className='link'>Sign In</Link></button>
                <button className='buttonSign'><Link className='link'>Sign Up</Link></button>
                <button className='buttonSign'><Link className='link' to="/save">Save Image</Link></button>
            </div>
        </>
    )
}

export default Header;