import React from 'react'
import { useParams } from 'react-router-dom'

//Hooks
import { useBeersFetch } from '../hooks/useBeersFetch'

//Components
import SingleBeerBox from '../components/SingleBeerBox'

const BeerBrowser = () => {
	const { style } = useParams()

	const {
    state
  } = useBeersFetch(style);

	console.log('state:', state.results)

	return (
		<div id="beers-list">
			<div className="container">
				{state.results ? (state.results.map(beer => (
					<SingleBeerBox
						key={beer.id}
						image={beer.image}
						beerId={beer.id}
					/>
				)))
				: <div>Loading...</div>}
			</div>
		</div>
	)
}

export default BeerBrowser