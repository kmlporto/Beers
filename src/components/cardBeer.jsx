import React from 'react';
import {Link} from 'react-router-dom';

import './cardBeer.css'

export default props => (
  <div className="col-sm-4">
    <div className="card bg-white">
      <div className="img-center">
        <img src={props.image_url} className="card-img-top icon-beer" alt={""}/>
      </div>
      <div className="card-body bg-orange">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.tagline}</p>
          <Link to={`/beer/${props.id}`}>
            <div type="button" className="btn btn-beer">Detalhes</div>
          </Link>
      </div>
    </div>
  </div>
)