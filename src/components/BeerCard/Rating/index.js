import React from 'react'

//Styles
import './style.css'

//Images
import { ReactComponent as Star } from './star.svg';

const Rating = ({average, reviews}) => {
	const starsCount = Math.round(average)
	let stars = []
	for (let i = 0; i < starsCount; i++) {
		stars.push(<li className="star"><Star /></li>)
	}

	return (
		<div className="rating"><ul>{stars}</ul> <span className="reviews">({reviews})</span></div>
	)
}

export default Rating