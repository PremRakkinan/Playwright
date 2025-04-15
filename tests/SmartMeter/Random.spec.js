import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
 
//let testData = {};
 
test('Login with random credentials', async ({ browser }) => {
 
      // Launch a new browser context with HTTPS errors ignored
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
  });
 
  const page = await context.newPage();
 
  //let randomName1 = faker.person.fullName();
  const randomName2 = faker.person.firstName();
  const randomName3 = faker.person.lastName();
  const randomPhoneNumber1 = (800000000 + Math.floor(Math.random() * 100000000)).toString();
  const randomPhoneNumber2 = (700000000 + Math.floor(Math.random() * 100000000)).toString();
 
  test.setTimeout(60000); // Increase timeout to 60 seconds
    // Navigate to login page
    await page.goto('https://gtest.c2btech.com/admin/signin');
 
      // Fill in login form
  await page.locator('input[name="email"]').fill("teller@coh.com");
  await page.locator('input[name="password"]').fill("CoNfIrM1@3");
 
  await page.locator('input[type="submit"]').click({ timeout: 10000 });
 // await page.getByRole('input', { value: 'Sign In' }).click();
//  await page.locator('[type="submit"]').click();
 
const registercustomer = page.locator('//ul[@class="top-menu"]/li[1]');
await registercustomer.click({ timeout: 10000 });
//await page.locator('//ul[@class="top-menu"]/li/[1]').click({ timeout: 3000 });;
 
await page.locator('select[name="customer_type"]').selectOption({ index: 0 });
await page.waitForTimeout(5000);
await page.locator('select[name="customer_type"]').selectOption({ index: 1 });
 
await page.locator('input[name="first_name"]').fill(randomName2);
await page.locator('input[name="second_name"]').fill(randomName3);
await page.locator('input[name="third_name"]').fill('customer');
await page.locator('input[name="fourth_name"]').fill("test");
await page.locator('input[name="date_of_birth"]').fill('2000-01-01');
await page.locator('input[name="place_of_birth"]').fill("eyl");
await page.locator('input[name="gender"][value="Male"]').check(); // Select Male
 
await page.locator('select[name="phone_carrier"]').selectOption({ index: 1 });
await page.waitForSelector('#phone_carrier', { timeout: 5000 });
await page.locator('input[name="mobile_1"]').fill(randomPhoneNumber1);
await page.locator('select[name="phone_carrier2"]').selectOption({ index: 1 });
await page.waitForSelector('#mobile_2', { timeout: 5000 });
await page.locator('input[name="mobile_2"]').fill(randomPhoneNumber2);
await page.locator('input[name="email"]').fill("test@test.com");
await page.locator('input[name="location_reference"]').fill("eyl");
await page.waitForTimeout(3000);
//await page.locator('select[name="district"]').selectOption({ index: 0 });
 
await page.locator('select[name="district"]').selectOption({ index: 1 });
await page.waitForTimeout(3000);
 
await page.locator('select[name="sub_division"]').selectOption({ index: 1 });
await page.locator('input[name="area"]').fill("A");
await page.locator('input[name="block"]').fill("A");
 
await page.waitForSelector('#save-customer', { timeout: 10000 });
await page.locator('input[id="save-customer"]').click();
 
const customerrefno1 = await page.locator('//table[@id="customer"]/tbody/tr[1]/td[2]/p/b').textContent();
//test.info().store('customerName', customerrefno);
//const customerrefno2 = customerrefno1.trim();
const customerrefno2 = console.log('customerName :', customerrefno1);
//testData.fill = customerrefno ;
 
//const name1 = test.info().retrieve('customerName'); // Retrieve stored value
 
const registerproperty = page.locator('//ul[@class="top-menu"]/li[2]');
await registerproperty.click({ timeout: 10000 });
 
await page.locator('input[name="legacy_file_number"]').fill("4333");
await page.locator('input[name="reference_number"]').fill("1234");
await page.locator('input[name="location_reference"]').fill("eyl");
//await page.waitForSelector('#district', { timeout: 10000 });
await page.waitForTimeout(5000);
await page.locator('select[name="district"]').selectOption({ index: 2 });
await page.waitForTimeout(5000);
await page.locator('select[name="sub_division"]').selectOption({ index: 2 });
await page.waitForTimeout(5000);
//await page.waitForSelector('#area', {0 timeout: 5000 });
//await page.fill('#customer-input', customerrefno);
await page.fill('input[name="area"]', customerrefno1);
//await page.fill('#area', "test");
await page.waitForTimeout(5000);
//await page.locator('input[name="block"]').fill(customerrefno);
 
await page.pause();
 
});
 