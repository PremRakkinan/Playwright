import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Meter Operations' }).click();
  await page.getByRole('link', { name: 'Bulk Operations' }).click();
  await page.locator('#csvFile').click();
  await page.locator('#csvFile').setInputFiles('bulk-smartmeter-operations (4).csv');
  await page.getByLabel('Operation').selectOption('Read');
  await page.getByRole('button', { name: 'Upload' }).click();

  
});