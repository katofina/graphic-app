import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <p>This website for online graphic drawing.</p>
            <p>You can use it without registration, but you can't save it.</p>
            <p>For saving you should have your account.</p>
            <div>
                <button><Link className="link">Use now</Link></button>
                <button><Link className="link">Sign Up</Link></button>
                <button><Link className="link">Sign In</Link></button>
            </div>
        </>
    )
}

export default Main;