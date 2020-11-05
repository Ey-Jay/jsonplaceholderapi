const getApiData = require('../utils/getApiData');
const validateQuery = require('../utils/validateQuery');

const getData = async (url, qry = {}) => {
  const query = validateQuery(qry);

  if (!url)
    return { documentation: 'https://jsonplaceholder.typicode.com/guides' };

  try {
    const response = await getApiData(`${url}${query}`);
    return response.data;
  } catch (error) {
    return {
      status: error.statusCode,
      error: error.data.error,
    };
  }
};

exports.getApiGuide = () => getData();
exports.getUser = (query = {}) => getData('users', query);
exports.getPost = (query = {}) => getData('posts', query);
exports.getComment = (query = {}) => getData('comments', query);
exports.getPhoto = (query = {}) => getData('photos', query);
exports.getTodo = (query = {}) => getData('todos', query);
exports.getAlbum = (query = {}) => getData('albums', query);
// test push
