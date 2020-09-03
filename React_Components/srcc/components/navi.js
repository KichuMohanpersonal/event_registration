import React from 'react';

import { Link } from 'react-router-dom';

function nav(){
    return(
        <div className="navbr">
            <ul>
                <Link to="/login"> <li>Login</li></Link>
               
               <Link to="/register"> <li>Register</li></Link>
            </ul>



        </div>

    );
}

export default nav;