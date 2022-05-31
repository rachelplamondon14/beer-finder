import React from 'react'

//Components
import BeerStyleBox from '../../components/BeerStyleBox'

//Styles
import './style.css'

const BeersList = () => (
  <div id="beers-list">
    <div className="container">
      <BeerStyleBox beerStyle="ale" />
      <BeerStyleBox beerStyle="red-ale" />
      <BeerStyleBox beerStyle="stout" />
    </div>
  </div>
)

export default BeersList