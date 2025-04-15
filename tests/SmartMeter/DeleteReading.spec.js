import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Meter', exact: true }).click();
  await page.getByRole('row', { name: 'C 1 C-1-S-1256-75684744' }).getByRole('link').nth(2).click();
  await page.getByText('Delete Last Reading').click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.pause();
});