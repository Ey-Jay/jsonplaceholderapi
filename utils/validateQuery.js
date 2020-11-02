const validateQuery = (query) => {
  if (typeof query === 'number' && Number.isInteger(query)) {
    return `/${query}`;
  }

  if (typeof query === 'object') {
    return `?${Object.keys(query)
      .map((key) => `${encodeURI(key)}=${encodeURI(query[key])}`)
      .join('&')}`;
  }

  throw new Error(
    'Invalid query. Leave empty, pass an integer, or pass an object.'
  );
};

module.exports = validateQuery;
