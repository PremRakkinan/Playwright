import { test, request, expect } from '@playwright/test';
 
test(' customer all meters via API', async () => {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJWQzdrTFQzaVhyRjVzczdYTW5CcjVrQ1E0LW5pY1NmUFpLTmJYRFVMRFVVIn0.eyJqdGkiOiJlYmNhMDBkOC1lZjFhLTQ0YTctYTc5MC00NDc0NjBlMmM2ZTYiLCJleHAiOjE3NDQ5NTM2ODQsIm5iZiI6MCwiaWF0IjoxNzQ0ODY3Mjg0LCJpc3MiOiJodHRwczovL2xpYW0uc2lpbnBheS5jb20vYXV0aC9yZWFsbXMvc2lpbnBheSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI4NTZhMWZhYi0xMjVhLTRjNWEtOTAxZi0xYTQ0NmZlNWY4MDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzaWlucGF5LWFwaSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjA4ZGRhYzI1LTAzM2QtNDExYy04OWYxLTlkOGRmODRmZTI0ZiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUk9MRV9FTUFBTF9GSU5BTkNJQUxfSU5TVElUVVRJT04iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJTb21CYW5rIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic29tYmFuayIsImxvY2FsZSI6ImVuIiwiZ2l2ZW5fbmFtZSI6IlNvbUJhbmsiLCJmYW1pbHlfbmFtZSI6IiJ9.f8KMKXmKHrmAVz111B50SUWe6CmZCGL6v2WRXaPsgZJzhfBJW2opqeZqZwt4xDoXgMiFK5dXZcgbITOuAzviwEGbuWpWVkmX_rNxyiUDUpsj7MIE-omCNUaI3aPcUbVqVNIh_Ohgt95GytPPA_UtjfTjYPHE__5RaEh1OM7g2kctm2rokZZwTP_Q0TxGDZwHUji3nIoqkQbBtcKT3bLMu-iazAqHnIUlJqsRE4CcWR_T1oqCEov1JbEuhpSL35Er78fLIF5tKjR-rDUY1x74w8GABlCAJkZo4-O35HgCgSROljs8hO7WQeqUf_Sfocqb7ZurIr7zB18TkjaKNEGW8w'; // Replace with actual token
 
    // Step 1: Create API context with Authorization header
    const apiContext = await request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
 
  const registrationPayload = {
    "customerId":"g-323",
    "paymentAmount":1.35,
    "paymentConfirmationNumber":"CO250210.1934.A67021",
    "payeeMobileNumber":"668666666"
    // "end_point":"https://v1prepaid.smhrp01.app"
 
  };
 
  const response = await apiContext.post('https://testapi.siinpay.com/siinpay-api/api/v1/fins/payment', {
    data: registrationPayload
  });
 
  // Step 4: Check the response
 // expect(response.ok()).toBeTruthy();
 const status = response.status();
 const body = await response.text(); // use text() for raw debugging
 
 console.log('Status Code:', status);
 console.log('Response Body:', body);
 
});