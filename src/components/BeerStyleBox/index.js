import React from 'react'
import { Link } from 'react-router-dom'

//Hooks
import useGetBeer from '../../hooks/useGetBeer'

//Styles
import './style.css'

const BeerStyleBox = ({beerStyle}) => {
  const beer = useGetBeer(beerStyle)

  return (
    <div className="beer-style-box">
      <figure>
       <Link to={`${beer.link}`}>
          <img src={beer.image} alt={`View ${beer.title}`} />
          <figcaption>{beer.title}</figcaption>
        </Link>
      </figure>
    </div>
  )
}

export default BeerStyleBox