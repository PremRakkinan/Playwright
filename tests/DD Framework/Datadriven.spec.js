import { test, expect } from '@playwright/test';
import { readExcel } from './ReadExcel'; 
 
const testData = readExcel();  // Read test data from the Excel file
 
console.log(testData);  // Add this line to log the data
 
// Loop over each row in the test data
testData.forEach((data) => {
  test(`Login test for user: ${data.Username}`, async ({ page }) => {
    console.log(`Running test for user: ${data.Username}`);  // Log the username for each test
 
    await page.goto('https://v1prepaid.smhrp01.app/admin/signin');
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(10000);
    await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).click();
    await page.getByRole('textbox', { name: 'Email E-mail Confirm E-mail' }).fill(data.Username);
    await page.getByRole('textbox', { name: 'Password Password' }).click();
    await page.getByRole('textbox', { name: 'Password Password' }).fill(data.Password);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.pause();



  });
});
 