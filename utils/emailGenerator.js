const fs = require('fs');
const path = require('path');

// Paths to files
const counterFile = path.resolve(__dirname, '../emailCounter.txt');
const emailLogFile = path.resolve(__dirname, '../utils/generatedEmails.txt');

// Function to read the counter value
const readCounter = () => {
  try {
    if (fs.existsSync(counterFile)) {
      return parseInt(fs.readFileSync(counterFile, 'utf8'), 10) || 9000;
    }
  } catch (error) {
    console.error("Error reading counter file:", error);
  }
  return 9000; // Default value
};

// Function to write the updated counter value
const writeCounter = (counter) => {
  try {
    fs.writeFileSync(counterFile, counter.toString(), 'utf8');
  } catch (error) {
    console.error("Error writing counter file:", error);
  }
};

// ✅ Updated function to strip file path and log only the file name
const logUsedEmail = (email, testFile = '') => {
  const date = new Date().toISOString().split('T')[0]; // Extract only the date (YYYY-MM-DD)
  const testName = testFile ? path.basename(testFile) : 'Unknown Test';

  const logEntry = `${date} - ${email} - ${testName}\n`;

  try {
    fs.appendFileSync(emailLogFile, logEntry, 'utf8'); // Append to .txt file
  } catch (error) {
    console.error("Error logging email:", error);
  }
};

// Generate the test email
const generateTestEmail = (baseEmail) => {
  let counter = readCounter();
  const [localPart, domain] = baseEmail.split('@');
  const email = `${localPart}+${counter}@${domain}`;

  writeCounter(counter + 1); // Increment and save the counter

  return email; // Return the email, but don't log it yet
};

// Export the functions
module.exports = { generateTestEmail, logUsedEmail };