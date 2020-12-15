import React from 'react'
import 'bootstrap/dist/css/bootstrap.css' 
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
          
          <div className="container">
               <div className="col-md-2">
               <Link className="navbar-brand" to="/">
               <span 
                class="d-inline-block align-top brand-image" 
                alt=""/>
               Gromart
            </Link>
               </div>
               <div className="col-md-8">
               <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"/>
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit">
                        Search
                    </button>
                </form>
               </div>
               <div className="col-md-1">
                    <Link class="nav-item" to="/login">
                        <span class="nav-link">Login</span>
                    </Link>
               </div>
               <div className="col-md-1">
                    <Link class="nav-item" to="/signup">
                        <span class="nav-link">Signup</span>
                    </Link>
               </div>
          </div>
        </nav>
    )
}

export default NavBar;