const getApiData = require('../utils/getApiData');
const axios = require('axios');

jest.mock('axios');

describe('fetch data from api', () => {
  test(`getApiData('users') returns array of objects`, async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    });
    const res = await getApiData('users');
    expect(Array.isArray(res.data)).toBe(true);
    expect(typeof res.data[0]).toBe('object');
  });

  test(`getApiData(users?name=name) returns a user Object`, async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'Leanne Graham',
      },
    });
    const res = await getApiData('users?name=Leanne%20Graham');
    expect(typeof res.data).toBe('object');
    expect(res.data.name).toBe('Leanne Graham');
  });

  test('getApiData has error handling', async () => {
    axios.get.mockReturnValue(Promise.reject({ message: 'problem' }));
    await expect(() => getApiData('error')).rejects.toThrow('problem');
  });
});
