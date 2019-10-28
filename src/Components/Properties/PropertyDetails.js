import React from 'react'

function PropertyDetails(props) {
    const id =props.match.params.id;
    return (
       <div className="container section project-details">
         <div className="card z-depth-0">
          <div className="card-content">
              <span className="card title">Property Name -{id}</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis ducimus asperiores nobis neque at a aperiam error esse sapiente, impedit dolores quod laboriosam est soluta corrupti earum perferendis sequi?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by John Doe</div>
            <div>2nd September,2am</div>
          </div>   
        </div>  
       </div>
    )
}

export default PropertyDetails
