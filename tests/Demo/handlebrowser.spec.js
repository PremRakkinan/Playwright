import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  //await chromium.launch({ headless: false }); // For debugging

  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.pause();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();

});