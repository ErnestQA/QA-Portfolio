import { test, expect } from '@playwright/test';

test('should update an existing booking', async ({ request }) => {

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

  // 3. Update booking (PUT)
  const updateResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    },
    data: {
      firstname: 'Ernest Updated',
      lastname: 'QA Updated',
      totalprice: 250,
      depositpaid: false,
      bookingdates: {
        checkin: '2026-12-01',
        checkout: '2026-12-05'
      },
      additionalneeds: 'Lunch'
    }
  });

  expect(updateResponse.status()).toBe(200);

  const updateBody = await updateResponse.json();

  // 4. Validate updated booking
  expect(updateBody.firstname).toBe('Ernest Updated');
  expect(updateBody.lastname).toBe('QA Updated');
  expect(updateBody.totalprice).toBe(250);
  expect(updateBody.depositpaid).toBe(false);
  expect(updateBody.bookingdates.checkin).toBe('2026-12-01');
  expect(updateBody.bookingdates.checkout).toBe('2026-12-05');
  expect(updateBody.additionalneeds).toBe('Lunch');

  // 5. Verify changes with GET
  const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

  expect(getBody.firstname).toBe('Ernest Updated');
  expect(getBody.lastname).toBe('QA Updated');
  expect(getBody.totalprice).toBe(250);
});