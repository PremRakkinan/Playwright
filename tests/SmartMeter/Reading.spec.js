import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.waitForTimeout(1000);
 
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.waitForTimeout(1000);
 
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.waitForTimeout(1000);
 
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.waitForTimeout(1000);
 
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(1000);
 
  await page.getByRole('link', { name: 'Meter', exact: true }).click();
  await page.waitForTimeout(1000);
 
  await page.getByRole('link', { name: 'A-1-S-1530-' }).click();
  await page.waitForTimeout(3000);
 
  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500px
  });
  await page.waitForTimeout(3000);
 
  await page.getByRole('link', { name: '+ Add Meter Reading' }).click();
  await page.waitForTimeout(5000);
 
  await page.locator('#meterread-update-form #reading').click();
  await page.waitForTimeout(5000);
 
  await page.locator('#meterread-update-form #reading').fill('5');
 
  //await page.waitForTimeout(5000);
 
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForTimeout(1000);
 
  await page.pause();


});