import React from 'react'
import { useParams } from 'react-router-dom'

//Hooks
import useGetBeer from '../../hooks/useGetBeer'

const BeerBrowser = () => {
	const { beerStyle } = useParams()

	return (
		<div></div>
	)
}

export default BeerBrowser