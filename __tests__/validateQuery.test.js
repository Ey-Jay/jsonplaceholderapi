const validateQuery = require('../utils/validateQuery');

describe('Validate query', () => {
  test('query as object', () => {
    expect(validateQuery({ username: 'Bret' })).toBe('?username=Bret');
  });

  test('query as number', () => {
    expect(validateQuery(1)).toBe('/1');
  });

  test('query as anything that is not a object or number throws error', () => {
    expect(() => {
      validateQuery('bret');
    }).toThrow(
      Error('Invalid query. Leave empty, pass an integer, or pass an object.')
    );
  });
});
