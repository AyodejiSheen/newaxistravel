import React from 'react';
import {Link} from 'react-router-dom';



export const Errorpage = () => {




    return(
        <>

            <div className="container mt-5 pt-5">
            <br></br>
            <br></br>
            <br></br>
            <p className="text-center">Sorry you are in a wrong page </p>
            
        <div className="text-center">

           <Link to="/"><button className="button btn"> Go to Homepage</button></Link> 
        </div>
            </div>




        </>
    )
}