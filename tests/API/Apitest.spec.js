import { test, expect, request } from '@playwright/test';
 
test('login API should return a token', async () => {
    const token = '2858|RGNwL09QKjc5FtsZVvR6r63VNVof2TvrlJdDjJH1f084639b'; // Replace with actual token
 
    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  // Step 2: Define the login payload (credentials)
  const registrationPayload = {
    client_id: 'siinpay-api'
    grant_type:'password',
    username:'sombank',
    password:'TrFEMnt8YCk3uqe',
    client_secret:'6a3a83be-2584-4075-8955-06d692f9f872'
 
  };
   // Step 3: Make a POST request to the login endpoint with the payload
  const response = await apiContext.post('https://liam.siinpay.com/auth/realms/siinpay/protocol/openid-connect/token', {
    data: registrationPayload
  });
 
  // Step 4: Check the response
 
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging
 console.log('Status Code:', status);
 console.log('Response Body:', body);
 
});