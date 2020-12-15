import React from 'react';
import 'bootstrap/dist/css/bootstrap.css' 
import {
    Link,
    useHistory,
} from 'react-router-dom'

function SignUp (){


    return(
        <div className='login-wrapper'>
            <div className="login-form">
            <form>
            <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        required="required" 
                        name="email" />
                </div>

            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required="required" 
                    name="password" />
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary btn-block" >Log in</button>
            </div>
    </form>
    <p className="text-center">Not Registered?<Link to ='/signup'>Create an Account</Link></p>

</div>
        </div>
    )
}

export default SignUp;