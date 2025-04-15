import { test, expect } from '@playwright/test';

test.use({
  slowMo: 100 // Delay of 100ms between actions
});

test('test', async ({ page }) => {
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Meter', exact: true }).click();
  await page.getByRole('link', { name: '+ Create' }).click();
  await page.getByRole('textbox', { name: 'Latitude:' }).click();
  await page.getByRole('textbox', { name: 'Latitude:' }).fill('43.73633');
  await page.getByLabel('Area:').selectOption('1');
  await page.getByLabel('Zone:').selectOption('C');
  await page.getByRole('textbox', { name: 'Unit of Measure:' }).click();
  await page.getByRole('textbox', { name: 'Unit of Measure:' }).fill('10');
  await page.getByLabel('Connection Type:').selectOption('Postpaid');
  await page.getByRole('textbox', { name: 'Water Pipe Size:' }).click();
  await page.getByRole('textbox', { name: 'Water Pipe Size:' }).fill('100');
  await page.getByRole('textbox', { name: 'Longitude:' }).dblclick();
  await page.getByRole('textbox', { name: 'Longitude:' }).fill('34.546665');
  await page.getByRole('textbox', { name: 'Meter Number:' }).dblclick();
  await page.getByRole('textbox', { name: 'Meter Number:' }).fill('75684744');
  await page.getByRole('button', { name: 'Save' }).dblclick();
  //await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('#select2-getCustomer-container').click();
  await page.getByRole('treeitem', { name: 'Prithvi Raj P R' }).click();
  await page.locator('#select2-meterOwner-container').click();
  await page.getByRole('treeitem', { name: 'Prithvi Raj P R' }).click();
  await page.getByRole('button', { name: 'Save' }).dblclick();



});