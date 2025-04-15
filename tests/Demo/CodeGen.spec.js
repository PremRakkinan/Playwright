const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
  await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill('admin@carifer.com');
  await page.getByRole('textbox', { name: 'Password Password' }).click();
  await page.getByRole('textbox', { name: 'Password Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Meter', exact: true }).click();
  await page.getByRole('link', { name: 'A-1-S-1531-' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();