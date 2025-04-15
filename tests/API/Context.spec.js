import { request, expect } from '@playwright/test';

test('custom API context', async () => {
  const context = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Authorization': 'Bearer your-token-here',
    },
  });

  const res = await context.get('/posts/1');
  expect(res.ok()).toBeTruthy();
});
