import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Sales Invoice', exact: true }).click();
  await page.locator('#select2-paymentStatus-container').getByText('Please Select One').click();
  await page.getByRole('treeitem', { name: 'Unpaid' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: 'NU-INV-559723 28-01-2024' }).getByRole('link').nth(2).click();
  await page.getByRole('link', { name: 'Pay Now' }).click();
  await page.locator('#select2-mode_of_payment-container').click();
  await page.getByRole('treeitem', { name: 'AMALBank' }).click();
  await page.getByRole('textbox', { name: 'Cheque / Reference No:' }).click();
  await page.getByRole('textbox', { name: 'Cheque / Reference No:' }).fill('656352');
  await page.getByRole('textbox', { name: 'Cheque / Reference Date:' }).click();
  await page.getByRole('cell', { name: '1', exact: true }).first().click();
  await page.getByRole('textbox', { name: 'Payee Mobile Number:' }).click();
  await page.getByRole('textbox', { name: 'Payee Mobile Number:' }).fill('73635342');
  await page.locator('textarea[name="remarks"]').click();
  await page.locator('textarea[name="remarks"]').fill('Test');
  await page.getByRole('button', { name: 'Pay Now' }).click();
  await page.pause();

});