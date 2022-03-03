import React from 'react'
import BeerCategoryBox from '../BeerCategoryBox'

//Styles
import './style.css'

const BeersList = () => (
  <div id="beers-list">
    <div className="container">
      <BeerCategoryBox type="ale" />
      <BeerCategoryBox type="red-ale" />
      <BeerCategoryBox type="stout" />
    </div>
  </div>
)

export default BeersList