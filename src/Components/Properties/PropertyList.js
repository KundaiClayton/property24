import React from 'react'
import PropertySummary from './PropertySummary'

const PropertyList=({property})=>{
    return(
        <div className="project-list section">
           {property && property.map(property=>{
               return(
                   <PropertySummary property={property} key={property.id}/>
               )
           })}
        </div>    
    )
}
export default PropertyList