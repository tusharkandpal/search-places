import axios from 'axios';

const instance = axios.create({
  // .. where we make our configurations
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': process.env.API_KEY // get key from https://rapidapi.com/wirefreethought/api/geodb-cities/
      }
});
  
export default instance;
