import React from 'react'


const PortfolioDetail =() => {
  return (
    <div className="portfolio-detail">
        <h2>Portfo0lioDetail for {props.match.params.slug}</h2>
    </div>
  )
}

export default PortfolioDetail