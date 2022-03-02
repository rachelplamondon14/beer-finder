import { React, useState, useEffect, } from 'react'

//Beer Category Data
import data from '../data/beer-categories.json'

export default function useGetBeer(type) {
	const [beer, setBeer] = useState({
		image: null,
		title: null,
	})

  const getBeer = (type) => {
		const thisBeer = data[type]

		setBeer({
			image: thisBeer.image,
			title: thisBeer.title,
		})
  }

	useEffect(() => {
    getBeer(type)
  }, []);

	return beer;
}

