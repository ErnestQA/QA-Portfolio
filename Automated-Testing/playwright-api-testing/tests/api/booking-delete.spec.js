import { test, expect } from '@playwright/test';

test('should delete an existing booking', async ({ request }) => {

  // 1. Create booking (precondition)
  const createResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Ernest',
      lastname: 'QA',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-11-10',
        checkout: '2026-11-15'
      },
      additionalneeds: 'Breakfast'
    }
  });

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  expect(bookingId).toEqual(expect.any(Number));

  // 2. Get authentication token
  const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(authResponse.status()).toBe(200);

  const authBody = await authResponse.json();
  const token = authBody.token;

  expect(token).toEqual(expect.any(String));
  expect(token).not.toBe('');

  // 3. Delete booking
  const deleteResponse = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );

  expect(deleteResponse.status()).toBe(201);

  // 4. Verify that booking no longer exists
  const getResponse = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );

  expect(getResponse.status()).toBe(404);
});