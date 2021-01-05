import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import Rating from './Rating'
import { products } from './Products';
import { 
    Link, 
    useHistory } from 'react-router-dom';
import PagePic from './PagePic';


// defining my Homepage function

function HomePage() {


// Defining useHistory for routing
let history = useHistory();

// this function is called whenever an enduser clicks on the click to add button

  function handleClick() {
    history.push("/productdetails");
  }

    return (
        <div>
            <NavBar/>
          
            <PagePic/>

            <div className="container mt-4">
            {products !==[] ? (
                <div className="row">
                    {products.map((product)=>(
                        <div key={product.id}  className="card card-width col-md-3">
                            <img className="card-img-top" src={product.image} alt={product.name}/>
                            <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p 
                                className="card-text">
                                {product.price}
                            </p>
                             <Rating 
                            rating={product.rating} 
                            numReviews={product.numReviews}
                            ></Rating>
                            <Link 
                                className="btn btn-primary"
                                onClick={() => handleClick(product.id)}>
                                Click to buy
                            </Link>
                           
                            </div>
                        </div>
                    ))}
                </div>
            ): null}
            </div>  
        </div>
    )
}

export default HomePage;
