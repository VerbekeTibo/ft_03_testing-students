# ft_03_testing

## Project Setup

- Node module for authentication
- Express server to serve this auth module
- Vite/Vue webapp to use said authentication routes

## Implement TDD via

- Jest module testing
- Jest route testing
- Jest + Vue Test Utils

## Todo's

- Create "auth.js" module according to the test
- Write api.test.js tests
- Implement the auth module in an express server (files are already given / started) while running your test
- Add JWT token verification to test(s)

## Extra

- Testing via cypress

## Steps

1. Test with Jest

   > backend: npm test

2. Test frontend with Jest and Vue Test Utils

   > frontend: npm test

   > won't work: fetch not found (mock the api requests: https://test-utils.vuejs.org/guide/advanced/http-requests.html)

3. Test frontend with cypress

   > frontend: npm install cypress --save-dev  
   > frontend: npx cypress open

   Run server in other terminal

   > backend: node server.js

## Urls

- https://jestjs.io/docs/api
- https://docs.cypress.io/guides/overview/why-cypress
- https://docs.cypress.io/guides/references/assertions#Text-Content
- https://vuejs.org/guide/scaling-up/testing.html#unit-testing
- https://test-utils.vuejs.org/
- https://vitest.dev/
- https://github.com/visionmedia/supertest
- https://www.makeuseof.com/express-apis-jest-test/
- https://www.ibm.com/topics/software-testing
