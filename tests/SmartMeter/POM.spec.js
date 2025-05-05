import { test, expect } from '@playwright/test';
import { Login } from '../Projects Logins/Smartmeter';
//import { login } from '../Projects Logins/Ajensia';
test('test', async ({ page }) => {
  await Login(page);
  await page.waitForTimeout(5000);
  await page.locator('role=button[name="Log In"]').click();

  //await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(5000);
  await page.locator('role=link[name="Customer"]').click();



  // page.getByRole('link', { name: 'Customer', exact: true }).click();
  await page.getByRole('link', { name: '+ Create' }).click();
  await page.locator('#customer_group').selectOption('Individual');
  await page.getByRole('textbox', { name: 'First Name:' }).click();
  await page.getByRole('textbox', { name: 'First Name:' }).fill('Prithvi');
  await page.getByRole('textbox', { name: 'Second Name:' }).click();
  await page.getByRole('textbox', { name: 'Second Name:' }).fill('Raj');
  await page.getByRole('textbox', { name: 'Third Name:' }).click();
  await page.getByRole('textbox', { name: 'Third Name:' }).fill('p');
  await page.getByRole('textbox', { name: 'Fourth Name:' }).click();
  await page.getByRole('textbox', { name: 'Fourth Name:' }).fill('r');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Owner Phone Number:' }).click();
  await page.getByRole('textbox', { name: 'Owner Phone Number:' }).fill('74375545');
  await page.getByRole('textbox', { name: 'Email ID:' }).click();
  await page.getByRole('textbox', { name: 'Email ID:' }).fill('raj@gmail.com');
  await page.getByRole('textbox', { name: 'Tenant Phone Number:' }).click();
  await page.getByRole('textbox', { name: 'Tenant Phone Number:' }).fill('643653474');
  await page.getByRole('textbox', { name: 'Address Line 1:' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1:' }).fill('Add One');
  await page.getByRole('textbox', { name: 'Address Line 2:' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2:' }).fill('Add Two');
  await page.getByRole('button', { name: 'Save' }).click();

  
});