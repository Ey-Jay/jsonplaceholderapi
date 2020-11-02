const { getApiGuide } = require('../src/index');
const getApiData = require('../utils/getApiData');

jest.mock('../utils/getApiData');

describe('getData function', () => {
  test('getApiGuide returns object with information', async () => {
    getApiData.mockResolvedValue({
      documentation: 'https://jsonplaceholder.typicode.com/guides',
    });
    const response = await getApiGuide();
    expect(response).toMatchObject({
      documentation: 'https://jsonplaceholder.typicode.com/guides',
    });
  });
});
