import React from 'react'
import './cardBeer.css'

export default props => (
  <div className="col-sm-4">
    <div className="card bg-white">
      <div className="img-center">
        <img src={props.image_url} className="card-img-top icon-beer"/>
      </div>
      <div className="card-body bg-orange">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.tagline}</p>
        <a href="#" className="btn btn-beer">Ver detalhes</a>
      </div>
    </div>
  </div>
)