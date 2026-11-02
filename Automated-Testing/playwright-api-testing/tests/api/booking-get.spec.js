import { test, expect } from '@playwright/test';

test('should get an existing booking', async ({ request }) => {

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

const createBody = await createResponse.json();

const bookingId = createBody.bookingid;

const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

const getBody = await getResponse.json();

expect(getResponse.status()).toBe(200);

expect(getBody.firstname).toBe('Ernest');

expect(getBody.lastname).toBe('QA');

expect(getBody.totalprice).toBe(150);

});

