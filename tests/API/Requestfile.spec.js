test('POST request example', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    });
  
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('foo');
  });
  