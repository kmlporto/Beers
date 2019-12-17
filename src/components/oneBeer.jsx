import React from 'react'
import DetailBeer from './detailsBeer'

export default props => {
  const renderBeer = () =>{
    const beer = props.beer || []
    return beer.map(b => (
      <DetailBeer 
        name={b.name} 
        tagline={b.tagline} 
        image_url={b.image_url}
        description={b.description}
      />
    ))
  }

  return (
    renderBeer()
  )
}