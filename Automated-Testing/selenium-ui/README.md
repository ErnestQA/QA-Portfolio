
# Playwright API Testing — RESTful Booker

## About the Project

This project demonstrates API test automation using Playwright and JavaScript against the RESTful Booker public demo API.

The test suite covers authentication and CRUD operations for booking management, including response validation and verification of expected API behavior.

## Tools & Technologies

- **Playwright** — API test automation
- **JavaScript** — test scripts and assertions
- **REST API** — HTTP methods and status codes
- **JSON** — request and response data
- **Node.js / npm** — runtime and dependency management

## Automated Test Scenarios

- **Authentication** — verifies successful and unsuccessful authentication.
- **Create Booking (POST)** — creates a booking and validates the response.
- **Get Booking (GET)** — retrieves booking details and checks response data.
- **Update Booking (PUT)** — updates booking information and verifies the changes.
- **Delete Booking (DELETE)** — deletes a booking and verifies that it is no longer available.

## Project Structure

```text
playwright-api-testing/
├── tests/
│   └── api/
│       ├── auth.spec.js
│       ├── booking-create.spec.js
│       ├── booking-get.spec.js
│       ├── booking-update.spec.js
│       └── booking-delete.spec.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests with a list reporter:

```bash
npx playwright test --reporter=list
```

## Test Results

The test suite validates HTTP status codes, response data, data types, and expected behavior of booking operations.

## Notes

This is a portfolio practice project using a public demo API. All test data is fictional and is not related to production systems.
