import React from 'react';
import NavBar from './NavBar';


function ProductDetails (){
     console.log(this.props.match.params.id)

    return( 
        <div>
            <NavBar/>

            <div className="row">
                <div className="col-md-8">


                </div>

                <div className="col-md-4">

                </div>
            
            
            </div>
        </div>
    )
}

export default ProductDetails;