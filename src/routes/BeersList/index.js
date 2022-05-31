import React from 'react'

//Components
import BeerCategoryBox from '../../components/BeerCategoryBox'

//Styles
import './style.css'

const BeersList = () => (
  <div id="beers-list">
    <div className="container">
      <BeerCategoryBox style="ale" />
      <BeerCategoryBox style="red-ale" />
      <BeerCategoryBox style="stout" />
    </div>
  </div>
)

export default BeersList