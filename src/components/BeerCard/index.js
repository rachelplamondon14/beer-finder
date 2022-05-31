import React from 'react'

//Components
import Rating from './Rating'

//Styles
import './style.css'

const BeerCard = ({name, image, rating}) => {
	return (
		<div className="beer-card">
      <figure>
        <img src={image} alt={`View ${name}`} />
        <figcaption>
					<h3>{name}</h3>
					<Rating average={rating.average} reviews={rating.reviews} />
				</figcaption>
      </figure>
    </div>
	)
}

export default BeerCard