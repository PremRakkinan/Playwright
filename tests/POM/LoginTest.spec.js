const { test, expect } = require('@playwright/test');
//const { LoginPage } = require('../../POM\LoginTest.spec');
const { LoginPage } = require('./SmartLogin');
 
test.describe('Login Test Suite', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
 
    await loginPage.gotoLoginPage();
    await loginPage.login('admin@carifer.com', 'Password@123');
    //await page.waitForTimeout(5000);
    //await page.pause();
 
   // await expect(page).toHaveURL(/dashboard|home|projects/i);
  });
});
