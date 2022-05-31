import React from 'react'
import { useParams } from 'react-router-dom'

//Hooks
import { useBeersFetch } from '../hooks/useBeersFetch'

//Components
import BeerCard from '../components/BeerCard'

const BeerBrowser = () => {
	const { style } = useParams()

	const {
    state
  } = useBeersFetch(style);

	return (
		<div id="beers-list">
			<div className="container">
				{state ? (state.map(beer => (
					<BeerCard
						key={beer.id}
						name={beer.name}
						image={beer.image}
						rating={beer.rating}
					/>
				)))
				: <div>Loading...</div>}
			</div>
		</div>
	)
}

export default BeerBrowser