import React, { useState } from 'react';
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.css' 
import {
    Link,
    useHistory,
} from 'react-router-dom'


function SignUp (){

    const routeHistory = useHistory()

    // Defining Variable that will be called to action
    const [fullname, setFullName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")

    // Defining functions that will be called when called to action.
    function handleFullNameChange (e){
        setFullName(e.target.value)
    };

    function handleEmailChange (e){
        setEmail(e.target.value)
    };

    function handlePasswordChange (e){
        setPassword(e.target.value)
    };

    function handleConfirmPasswordChange (e){
        setConfirmPassword(e.target.value)
    }

    // this function is always called whenever a signup action is called
    function handleSignUp (e){
        e.preventDefault();
        if (fullname === "" || email === "" || password === "" || confirmPassword === ""){
            alert("Sign Up Unsuccessful")
            return
        };

        if ( password !== confirmPassword){
            alert("Passwords doesn't match")
            return
        };

        routeHistory.push('/dashboard')
    }


    return(
        <div className="login-wrapper">
            <NavBar/>
            <div className="login-form">
                <form>
                <h2 className="text-center">Sign up</h2>       
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Full Name" 
                            required="required"
                            value={fullname}
                            onChange={handleFullNameChange}/>
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            required="required" 
                            value={email}
                            onChange={handleEmailChange} />
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            required="required" 
                            value={password} 
                            onChange={handlePasswordChange}/>
                    </div>

                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Confirm Password" 
                            required="required" 
                            value={confirmPassword} 
                            onChange={handleConfirmPasswordChange} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-primary btn-block" 
                            onClick={handleSignUp}>
                                Sign Up
                        </button>

                    </div>    
            </form>
    
                    <p className="text-center">Already have a Gromart Account?<Link to='/login'>Log In</Link></p>

        </div>
        </div>
    )
}

export default SignUp;