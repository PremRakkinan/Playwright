// tests/api-example.spec.ts
import { test, expect } from '@playwright/test';

test('GET request example', async ({ request }) => {
  const response = await request.get('https://testapi.siinpay.com/siinpay-api/api/v1/fins/biller/rta/balance?license_plate=AX575');
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.id).toBe(1);
});
