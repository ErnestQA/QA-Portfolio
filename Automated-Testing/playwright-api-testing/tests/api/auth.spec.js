import { test, expect } from '@playwright/test';

test('should create authentication token', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('token');

  const token = responseBody.token;

  expect(token).not.toBe('');

  expect(token).toEqual(expect.any(String));
});

test('should reject authentication with invalid password', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: {
      username: 'admin',
      password: 'wrongpassword'
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('reason');
  expect(responseBody.reason).toBe('Bad credentials');
});