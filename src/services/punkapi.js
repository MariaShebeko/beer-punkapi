import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2/';

function getBeers(page) {
  return axios
    .get(`${BASE_URL}beers?page=${page}&per_page=15`)
    .then(response => {
      if (response.status === 200 && response.data !== 0) {
        console.log('__response api all', response);
        return response.data;
      } else {
        return Promise.reject(
          new Error('There is nothing to show for you at the moment')
        );
      }
    });
}

function getBeerById(id) {
  return axios.get(`${BASE_URL}beers/${id}`).then(response => {
    if (response.status === 200) {
      console.log('__response api id', response);
      return response.data[0];
    } else {
      return Promise.reject(
        new Error('There is no information about this beer')
      );
    }
  });
}

const api = {
  getBeers,
  getBeerById,
};

export default api;
