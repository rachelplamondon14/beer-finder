import { React, useState, useEffect, } from 'react'

//Beer Category Data
import data from '../data/beer-categories.json'

export default function useGetBeer(style) {
	const [beer, setBeer] = useState({
		image: null,
		title: null,
		link: null,
	})

  const getBeer = (style) => {
		const thisBeer = data[style]

		//Get image from assets directory
		import(`../assets/${thisBeer.image}`)
			.then(image => {
				setBeer({
					image: image.default,
					title: thisBeer.title,
					link: thisBeer.link
				})
			})

  }

	useEffect(() => {
    getBeer(style)
  }, []);

	return beer;
}

