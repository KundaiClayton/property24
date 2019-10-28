import React from 'react'
import img1 from '../assets/property1.jpeg'
import umg2 from '../assets/property2.jpeg'

const projectSummary=({property})=>{
    return(
        
         <div className="card text-center">
    <div className="overflow" >
     <img src={img1} alt="image 1"/>
    </div>
    <div className="card-body text-dark">
        <h4 className="card-title">{property.title}</h4>
        <p className="card-text text-secondary">Posted by :</p>
        <a href="/PropertyDetails"className="btn btn-outline-success">Details</a>
    </div>
  </div> 
  
    )

}
export default projectSummary