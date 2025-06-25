
# 🔐 Automation Login Test Suite

This is a simple and modular automation suite designed to test login functionality. The project includes utilities to generate random user data (emails, IDs, passports), manage counters, and log generated data.

## 📁 Project Structure

```
AUTOMATION/
├── utils/
│   ├── emailCounter.txt           # Tracks the number of generated emails
│   ├── emailGenerator.js          # Generates random email addresses
│   ├── generatedEmails.txt        # Stores previously generated emails
│   ├── randomid.js                # Generates a random South African ID number
│   ├── randompassport.js          # Generates a random passport number
├── login.spec.js                  # Login test script using Playwright / Cypress / etc.
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/playwright-login-automation.git
cd login-test-suite
```

### 2. Install Dependencies

If you're using a framework like Playwright or Cypress:

```bash
npm install
# or
yarn install
```

### 3. Run the Test

```bash
npx playwright test login.spec.js
# or
npx cypress run --spec login.spec.js
```

> ⚠️ Make sure to install the relevant framework globally or configure the test runner accordingly.

## 🧰 Utility Scripts

- `emailGenerator.js`: Creates unique emails for sign-up/login tests.
- `randomid.js`: Generates valid-looking South African ID numbers.
- `randompassport.js`: Creates dummy passport numbers.
- `emailCounter.txt` & `generatedEmails.txt`: Used for tracking and persistence.

## ✅ Test Case: `login.spec.js`

The test checks login functionality using randomly generated credentials. You can modify it to suit different environments or expand it to cover negative test cases, MFA, etc.

## 📦 To-Do

- [ ] Add environment support (dev/stage/prod)
- [ ] Add more test cases (sign-up, forgot password, etc.)
- [ ] CI/CD integration
- [ ] Add data validation for ID/passport formats

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.

## 📄 License

MIT © 2025 [Your Name](https://github.com/your-username)
