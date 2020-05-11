// Jest notes|: 
// Source: https://medium.com/swlh/react-testing-using-jest-along-with-code-coverage-report-7454b5ba0236
// Jest global commands: https://jestjs.io/docs/en/api
//   - If create-react-app was used to make the app, Jest is already included and does not need to be installed. 
//   - Create _test_ or test folder in src folder.
//   - Test files should be named with .test.js extension so that Jest can identify them. 


// app.test.js

const add = (a, b) => a + b;

test('should add two numbers', () => {
 const sum = add(3, 4);
 expect(sum).toBe(7);
});

// Enzyme - used to manage state and event handlers with Jest. 
// Enzyme methods: https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html

npm install enzyme enzyme-adapter-react-16 --save-devicePixelRatio

// Then we need to create and configure our file setupTest.js inside the src folder:

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
configure({ adapter: new Adapter() });

// Next, create a file in the root called jest.config.json, where package.json is, and give content:

{
  "setupFiles": ["<rootDir>/src/setupTests.js"]
 }
 
// Now we can done with config. 


// Spys - a spy is a way of creating a function and checking if the written method gets called or not. Must use jest.fn method and pass it the function. 

// To configure test coverage, we need to edit the jest.config.json file with this content: 

{
  "setupFiles": ["<rootDir>/src/setupTests.js"],
  "testRegex": "/*.test.js$",
  "collectCoverage": true,
  "coverageReporters": ["lcov"],
  "coverageDirectory": "test-coverage",
  "coverageThreshold": {
   "global": {
   "branches": 0,
   "functions": 0,
   "lines": 0,
   "statements": 0
   }
  },
  "moduleDirectories": ["node_modules", "src"]
 }

 // Once this is done, you can run this command in the terminal to see the total test coverage of the app: Note that you can always put this script inside of `npm run test:coverage` to shorten. 

 npm run test -- --coverage --watchAll=false

 // Note that this will also create a new coverag folder in the project, if you open coverage/lcov-report/index.html, you can view the report in the browser. 

 // How to read Jest's coverage report. 

 // Statement coverage - Has each statement in the program been executed?
 // Branch coverage - Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed? For example, given an if statement, have both the true and false branches been executed? Another way of saying this is, has every edge in the program been executed?
 // Function coverage - Has each function (or subroutine) in the program been called?
// Line coverage - has each executable line in the source file been executed?