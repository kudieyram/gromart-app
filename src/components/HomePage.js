import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import PagePic from './PagePic';
import Beetroot from '../images/beetroot.jfif'; 
import Tomato from '../images/tomatoe.jfif'; 
import Pepper from '../images/pepper.jpg'; 
import carrot from '../images/carrot.jfif';
import cabbage from '../images/cabbage.jpg'; 
import Lettuce from '../images/lettuce.jfif'; 
import springOnion from '../images/springOnion.jfif'; 
import Cucumber from '../images/cucumber.jfif'; 
import Cauliflower from '../images/cauliflower.jfif'; 
import { useHistory } from "react-router-dom";

function HomePage() {

    let history = useHistory();

  function handleClick() {
    history.push("/productdetails");
  }

    return (
        <div>
            <NavBar/>
          
            <PagePic/> 
            
            <div className="container mt-4">
               <div className="row">
               <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Tomato} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Tomato</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Pepper} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Pepper</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>


            <div className="card card-width col-md-3">
                    <img className="card-img-top"  src={carrot} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Carrot</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 20.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>
            <div className="card card-width col-md-3">
                    <img className="card-img-top" src= {cabbage} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Cabbage</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Beetroot} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Beetroot</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 15.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Lettuce} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Lettuce</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 30.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={springOnion} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Spring Onion</h5>
                    <p 
                        className="card-text">
                        Price per kg - GHC 5.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Cucumber} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Cucumber</h5>
                    <p 
                        className="card-text">
                        Price per bottle - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>

            <div className="card card-width col-md-3">
                    <img className="card-img-top" src={Cauliflower} alt="Card image cap"/>

                    <div className="card-body">
                    <h5 className="card-title">Cauliflower</h5>
                    <p 
                        className="card-text">
                        Price per bottle - GHC 10.00
                    </p>
                    <Link 
                        className="btn btn-primary"
                        onClick={handleClick}>
                        Click to add
                    </Link>
                </div>
            </div>
               </div>

            </div>

            
           
            
        </div>
    )
}

export default HomePage;
