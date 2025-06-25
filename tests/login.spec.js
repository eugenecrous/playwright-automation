const { test, expect } = require('@playwright/test');
const { generateRandomSAID } = require('../utils/randomid.js');
const { generateTestEmail, logUsedEmail } = require('../utils/emailGenerator.js');
const { generateRandomPP } = require('../utils/randompassport.js');

// ✅ Only declare this once
const baseEmail = "mrtester@test.co.za";

test('Login with random SA ID and email', async ({ page }, testInfo) => {
  const testEmail = generateTestEmail(baseEmail);
  const randomPP = generateRandomPP(8);

  console.log('Generated Test Email:', testEmail);
  console.log('Generated Random PP:', randomPP);

  await page.goto('https://demo.applitools.com/');
  await page.fill('#username', testEmail);
  await page.fill('#password', randomPP);
  /* This can be used to generate a random SAID Number
  await page.fill('#password', generateRandomSAID);
  */
  
  logUsedEmail(testEmail, testInfo.file);
});
