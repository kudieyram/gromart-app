import React from 'react';
import 'bootstrap/dist/css/bootstrap.css' 
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PagePic from './PagePic';


function HomePage() {
    return (
        <div>
            <NavBar/>
          
            <PagePic/> 
            
            <div className="container mt-4">
                <div className="card card-width">
                    <img className="card-img-top" src="https://en.wikipedia.org/wiki/File:Tomato_je.jpg" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Tomato</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary">
                        Click to add
                    </Link>
            </div>
        </div>
            </div>
        </div>
    )
}

export default HomePage;
