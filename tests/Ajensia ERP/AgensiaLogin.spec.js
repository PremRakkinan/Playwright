import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testajensiacloud.carifer.com/login');
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Username *' }).fill('admin@ajensia.com');
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pause();

  

});