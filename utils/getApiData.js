const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/';

const getApiData = async (url) => {
  try {
    const data = await axios.get(`${API_URL}${url}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getApiData;
