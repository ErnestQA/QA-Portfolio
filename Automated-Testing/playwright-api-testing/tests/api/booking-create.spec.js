import { test, expect } from '@playwright/test';

test('should create a new booking', async ({ request }) => {

const response = await request.post('https://restful-booker.herokuapp.com/booking', {
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

expect(response.status()).toBe(200);

const responseBody = await response.json();

expect(responseBody).toHaveProperty('bookingid');

expect(responseBody.bookingid).toEqual(expect.any(Number));

expect(responseBody.booking.firstname).toBe('Ernest');

expect(responseBody.booking.lastname).toBe('QA');

expect(responseBody.booking.totalprice).toBe(150);

expect(responseBody.booking.depositpaid).toBe(true);

expect(responseBody.booking.bookingdates.checkin).toBe('2026-11-10');

expect(responseBody.booking.bookingdates.checkout).toBe('2026-11-15');

});