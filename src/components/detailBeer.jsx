import React from 'react'


export default props => {
  return(
    <div className="card mb-3">
      <img src={props.image_url} className="card-img-top icon-beer" alt={""}/>
      
      <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.tagline}</p>
      </div>
    </div>
  )
}