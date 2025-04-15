
const { test, expect } = require('@playwright/test'); //packages and required files and one variable

test('Login', async ({ page }) => { //title of the automated page //java is asynchronized programming

  await page.goto('https://v1prepaid.smhrp01.app/admin/signin'); //await and async id keyword of playwright

  await page.fill('input[id="email"]', 'admin@carifer.com');
  await page.fill('input[id="password"]', 'Password@1234');
  await page.waitForTimeout(2000);
  page.locator('//*[@id="login_form"]/p/input');
  await page.waitForTimeout(5000);


});
