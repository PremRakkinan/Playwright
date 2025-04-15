export async function login (page)
{
  await page.goto('https://testajensiacloud.carifer.com/login');
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).press('Shift+ArrowLeft');
  await page.getByRole('textbox', { name: 'Password *' }).fill('Admin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

};