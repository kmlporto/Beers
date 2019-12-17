import React from 'react'
import CardBeer from './cardBeer'

export default props => {
  const renderRows = () =>{
    const beers = props.beers || []
    return beers.map(beer => (
      <CardBeer name={beer.name} tagline={beer.tagline} image_url={beer.image_url} id={beer.id}/>
    ))
  }

  return (
    <div className="beers">
      <div className="row bg-dark-orange">
        {renderRows()}
      </div>
    </div>
  )
}