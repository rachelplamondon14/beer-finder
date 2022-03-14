import {
  BASE_API_URL
} from './config'

export default {
	fetchBeers: async(style) => {
		//Get all beers from API endpoint
		const endpoint = `${BASE_API_URL}/${style}`
    return await (await fetch(endpoint)).json();
	}
}