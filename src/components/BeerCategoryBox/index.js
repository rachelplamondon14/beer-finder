import React from 'react'

//Hooks
import useGetBeer from "../../hooks/useGetBeer";

//Styles
import './style.css'

const BeerCategoryBox = ({type}) => {
  const beer = useGetBeer(type)

  return (
    <div className="beer-category-box">
      <figure>
        <img src={beer.image} alt={`View ${beer.title}`} />
        <figcaption>{beer.title}</figcaption>
      </figure>
    </div>
  )
}

export default BeerCategoryBox