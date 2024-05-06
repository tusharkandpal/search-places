import axios from 'axios';

export async function fetchPlaces (searchValue, page = 5) {

    const options = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: {countryIds: 'IN', namePrefix: `${searchValue}`, limit: `${page}`},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    
    try {
      const res = await axios.request(options);
      return res.data;
    } catch (error) {
      console.error("Error recieved >> " + error);
    }

}