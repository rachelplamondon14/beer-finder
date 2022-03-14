import {
  BASE_API_URL
} from './config'

export default {
	fetchBeers: async(beerStyle) => {
		//Get all beers from API endpoint
		const endpoint = `${BASE_API_URL}/${beerStyle}`
    return await (await fetch(endpoint)).json();
	}
}