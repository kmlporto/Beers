import React from 'react'

import './detailsBeer.css'

export default props => {
  return(
    <div className="container vh-100 bg-dark-orange">
      <div className="card mb-3" >
        <h2 className="font-weight-bold text-center">{props.name}</h2>
        <hr></hr>
        <div class="row no-gutters">
          <div class="col-md-4 img-center">
            <img src={props.image_url} className="card-img-top icon-beer" alt={""}/>
          </div>
          <div class="col-md-8">
            <div className="card-body">
              <p className="card-text">{props.description}</p>
              <p className="card-text">{props.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
