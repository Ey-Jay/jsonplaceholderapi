const { getUser } = require('../src/index');

describe('GET user endpoint', () => {
  test('GET all 10 users', async () => {
    const res = await getUser();
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(10);
    res.forEach((obj) => {
      expect(typeof obj).toBe('object');
    });
  });

  test('GET single user by id', async () => {
    const res = await getUser(1);
    expect(res).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      username: expect.any(String),
      address: expect.any(Object),
      phone: expect.any(String),
      website: expect.any(String),
      company: expect.any(Object),
    });
  });
});
