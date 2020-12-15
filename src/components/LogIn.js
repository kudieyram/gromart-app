import React, { useState } from 'react';
import { 
    Link,
    useHistory
} from 'react-router-dom';

function LogIn (){

    const routeHistory = useHistory()

    // Defining variables that will called to action

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

   function handleEmailChange (e){
       setEmail(e.target.value)
   };

   function handlePasswordChange (e){
       setPassword(e.target.value)
   };

   function handleLogIn (e){
       e.preventDefault();
    if (email === "" || password === ""){
        alert("Provide valid Email and Password. Try Again")
        return
    }
    routeHistory.push('/dashboard')
   }

        

    return(
        <div className="login-wrapper container">
            <div className="login-form">
            <form>
            <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        required="required" 
                        name="email"
                        value={email}
                        onChange={handleEmailChange} />
                </div>

            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required="required" 
                    name="password" 
                    value={password}
                    onChange={handlePasswordChange}/>
            </div>
            
            <div className="form-group">
                <button 
                    className="btn btn-primary btn-block" 
                    onClick={handleLogIn}>Log in</button>
            </div>
    </form>
    <p className="text-center">New to Gromart?<Link to ='/signup'>Create an Account</Link></p>

</div>
        </div>
    )
}

export default LogIn;