import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="mainDiv">
            <p>This website for online graphic drawing.</p>
            <p>You can use it without registration, but you can't save it.</p>
            <p>For saving you should have your account.</p>
            <div>
                <button><Link className="link" to='/draw'>Use now</Link></button>
                <button><Link className="link" to="/signup">Sign Up</Link></button>
                <button><Link className="link" to="/signin">Sign In</Link></button>
            </div>
        </div>
    )
}

export default Main;