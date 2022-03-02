import React from 'react'
import BeerCategoryBox from '../BeerCategoryBox'

//Styles
import './style.css'

const BeersList = () => (
  <div id="beers-list">
    <BeerCategoryBox type="ale" />
    <BeerCategoryBox type="red-ale" />
    <BeerCategoryBox type="stout" />
  </div>
)

export default BeersList