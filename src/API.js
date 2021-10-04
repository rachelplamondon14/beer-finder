import {
  BASE_API_URL
} from './config'

const apiFunctions = {
	fetchAles: async() => {
		//Get all ales from API
		console.log(`${BASE_API_URL}/ales`)
	}
}

export default apiFunctions