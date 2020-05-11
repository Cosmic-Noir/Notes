/* Node 
    -Node - JavaScript that is running directly on a machine, not inside a browser. Node is a free, open-source, multi-platform JavaScript enviornment. Crated by Google in 2009. 
    -NPM - used for managing a projects dependencies and other meta information. Allows the creation of a new project, creates a list of packages the project needs to work, and writes short scripts that allow devs to work with the project. 
    -Executing JavaScript files -
    -Command line interface (CLI) -
    -Global and local installs -
    -Package.JSON run scripts -
    -NPX -
    -NDB -
    -Require -
    -File system -
    -Argv -
    Module exports -

    To check that the latest version of node is installed:     */

    node --version

    // You can also check most recent version of npm:

    npm --version

// Once installed, you can run a Read-Eval-Print-Loop (REPL) that can take commands, see the response, similar to Chrome Dev Tools. To open a Node REPL type "node" in the terminal. Once you have done this, you can execute JavaScript in the termail. To exit, either type .exit OR use Cntrl + c twice. 

// There are differences between the browser and running JavaScript on the machine locally. Such as, no DOM! The browser was creating the DOM, but that's no longer defined. You cannot use things like document.getElementById or document.querySelector. 

// Instead, we gain access to other properties like the machine Node is running on and the global object. 

/* Node on the machine uses JavaScript to handle tasks like: 
    -Machine scripts that can read, write, and manipulate other files.
    -API servers that can access ports on your machine to communicate with the web.
    -Command line tools that can process information or perform computer tasks. 
    -Web servers that generate dynamic content by connecting to a database. 

    If you type "global" in the terminal, you'll see an object like window, this is the equivalent. You can use this and accessing the machine to read properties about the operating system, read and write files on the machine, and read enviornmental variables. 

    -Enviornmental Variables - To see these, in a normal terminal, type "env". To access these in Node, type process.env, you'll see an objec twith the same variables. This can be used to keep secrets inside the enviornment and let Node scripts have access to them without needing to write the values in the Node scripts directly. 

*/


// To create a new node projcect and change into it, start by creating the folder:

mkdir my-node-project && cd $_

// Once inside, initiate with npm with the below command, which will create the packag.json file containing meta info of the project. You will answer prompts about the project. 

npm init

// Note if you want to do all default optoins, you can use :

npm init -y

/* Now that you have a package.json which descripes the NPM project, you can add dependencies with the install command. The install command does several things: 
    -Adds an entry to the list of dependencies in packag.json
    -Creates a folder called node_modules if it doesn't yet exist
    -Downloads the source code for this dependency and stores them recursively in the ./node_modules folder */

// This is why when you clone a repo, you can use npm install to install all dependencies listed in package.json.

// This is how to install debugger:

npm install debug

// or 

npm i debug


// There is actually another way to run node that is not in the terminal, but through the JavaScript files on your machine. Once you have a Javascript file, like index.js, you can run this command in the terminal and it will execute the file and the output is shown. Note that you only see output that is explicitly console.log, where as other feedback from "1 + 1" is not shown. 

node index.js

// Note that you can pass arguements to the script file as well. to access arguments from inside the script, use the process.argv variable. Like so in the index.js file:

console.log(process.argv);

// Then you can run the file again with node, and supply arguements in relative order:

node index.js first-argument second-arguement

// Note that the arguments are always read as a string. 


/* CLI Tools - 
    - Note to install something "globally" on your machine, it is no longer a dependency IN a project, and no longer listed in the package.json file. When packages are installed glboally, you can run them as commands from anywhere on the machine. You install like so: */
    
    npm install --global rockpaperscissors

    // or:

    npm install -g rockpaperscissors

// You can also remove globally installed packages:

npm uninstall -g rockpaperscissors

// Note that you CANNOT use locally installed dependencies in the command line. However, you can use the local dependency wth the projects NPM scripts. Now if you type npm run play, it runs the script in the terminal. Like so:

"scripts": {
    "play": "clake"
}

//

npm run play

/* Note that local dependencies are preferred to global installs because:
 - Might need different versions of the same dependency for different projects. 
 - Local dependencies are listed in a package.json, making them explicit.
 - Global dependencies can have system level conflics with other tools.
 - Globals can pollute the machine.
 - Local dependencies have less scope on your machine and therefore are less of a security risk.
 */

 // Using NPX for one-time commands. Note that this is for when you don't want to list a dependency for your project and don't want to install globally either. In this case, you're using the tool without installing it. NPX comes installed on Node. It allows the latest version of that module without installing globally. NPX is preferred for the same reasons local is preferred to global. 

 /* Install global debugger called NDB, then you can use this anywhere: */

 npm install --global ndb

 // Then you can run your .js files using Node debugger. This will open a new chrome window dedicated to debuggin:

 ndb index.js

 /* This will then open a window with the file system and where you can select any file. From here  you can add a "breakpoint" to the start of the script. This tells Node to pause after reading a certain word in the file, which you can then inspect and explore the variables and script at that point in processing. 

To add this, simply click on the line number. 

Once this is done, you can Replay the script by using the controls at the bottom left hand corner under NPM Scripts. This will cause the code to be read from top to bottom, pausing at any breakpoint, with the line highlighted. You can see available variables within scope on the right hand side. 

You can open the console by hitting Escp. Then you can type "process" into the console and explore the process object. This process object has lots of properties, such as env and argv and version.

You can continue through the code with the play button in the top right hand corner, the "Resume script execution" button. */

// You can also use a built-in module in Node to access the file system called "fs". You can use this module to read, create, remove, rename, ect, directiories and files on the machine.

// First you must require the fs module and then use readdir and readdirSynch methods to read directory contents. fs comes with Node and does not require installation. There are other built-in modules that you can use with require, such as "http", "https", "os", "events",  "utill", "path", and "net". Ex:

const fs = require('fs');

const contents = fs.readdirSync('./animals');

console.log(contents);

// Ex of requiring other built in modules:

import React from 'react';
import debug from 'debug';

const React = require('react');
const debug = require('debug');

// Note that the "require" syntax is called "Common JS" and works like import from syntax. The import syntax is recent to JavaScript and so is not supported everywhere. require has been around for much longer and still used in Node projects. 

/* Note that reading the filesystem is a security risk as yo udon't know what's actually in the files. 
 - You should avoid writing files based on user input
 - Avoid reading and executing files you don't trust
 - Restrict access to the file system to specific users when possible
 - Restrict access to only specified directories.
 - Prefer to use a database.  */

// Note you can also add a debugger to your code just by adding this to your .js file:

+ debugger;

// To make functions available outisde of the file itself, the Commonm JS method is to export by seting a value on a nested object, called a "module". There is an object called "module" in every Node JavaScript file that contains info about the current module. Inside the object, there is an exports property, and any value can be set on the exports object and made available when the module is required. 

// DEFAULT EXPORTS
// works in webpack and babel projects
export default animateString;
// works in Node projects
module.exports = animateString;

// NAMED EXPORTS
// works in webpack and babel projects
export animateString;
// works in Node projects
module.exports = { animateString: animateString };

// Ex of named export: 

const chalk = require("chalk-animation");

function animateString(string) {
  const animation = chalk.rainbow(string);
  animation.start();
  setTimeout(() => animation.stop(), 2000);
}

module.exports = { animateString: animateString };

// Ex of named import:

const fs = require("fs");
const { animateString } = require("./animate-string");

const contents = fs.readdirSync("./animals");

animateString(contents.join("\n"));

/*Tips for using debugger step through controls:
    -If you're paused before a function call you don't want to inspect: "Step over".
    -If you're paused before a function you'd like to inspect: "Step into".
    -If you accidentally go into a function: "Step out of"
    -If you're finished inspecting a function but want to keep debugging: "Step out of".
    -You can add new breakpoints at future lines of code whilst paused at other lines. Add new breakpoints and press play to jump to them.
    -You can blackbox scripts that you don't want to debug.
    -For all other cases, use the simple "Step" button.
*/

// Controlling the script with arguements. 



/* Web APIs with Express - 
    -Express - Most widely used web framework for Node today. it already "knows" how to read and interpret HTTP requests and "knows" how to respond to the client with HTTP responses. This is a minimilist framework, and is designed to allow anyone to add to the functionality. It provides: 
        -Handlers for requests for all the HTTP verbs (Get, Post, ect).
        -Common web application settings such as port numbers.
        -An architecture that allows middleware, so you can modify the request handling pipeline at any point.
    Express comes with 4 objects, each with methods and properties that help build web servers:
        -express() - top-level function exported by Express module. Calling this creates an Express app and gives access to the below Express objects:
            -Application: this object is the express app itself. Provides methods to route HTTP request,s configure middleware. 
            -Request: Represents the HTTP request and has properties of the request, such as query string and headers. This is often referred to as "req" and is passed to route handling methods. 
            -Response: Represents the HTTP response sent to the client when the request is complete. Called "res". Passed to the route hanlding methods. Contains methods to format the response and set headers and status code. 
            -Router: "mini-app" to make your app more modular. 
    -Route
    -HTTP
    -GET
    -Request
    -Response
    -Web server - a program that understands URLs and can read HTTP requests. Can serve up static files or dynamic content upon request. 
    -URL - Uniform Resource Locator. Address for some uniqu resource on the Web. 
        -Protocol - HTTP or HTTPS tells the browser which protocol to use.
        -Domain - uniquely identifies a web server and is mapped to the IP address.
        -Port - identifies an application on a machine.  the IP takes you to the correct machine, the port number determines which application the request will be routed to.
        -Path - Once you connect to the correct server, the path identifies the resource you wish to access. 
        -Query String - set of parameters formattted into key/value pairs. Used not to rout the request, but to send data into the function executed on the resource. 
    */

// To get started, create your directory, change to it, and set up your package.json file:

mkdir expressArena && cd $_
npm init -y

// Create your file to write your code:

touch app.js

// Next, edit your package.json file to include the start script. This will simply run your app.js file anytime you type npm start

"script": {
    "start": "node app.js"
}

// To install express:

npm install express

// Then be sure to require this in your app.js file.

const express = require('express');

// Then invoke the function to create the application:

const app = express();

/* The app object now has methods for: 
    -Routing HTTP requests
    -Configuring middleware
    -and more !
    */

// To create a function that responds with some text to GET requests to the root URL (/)

app.get('/', (req, res) => {
    res.send('Hello Express!');
});
    
/* The server then listens to a specific port so that requests to that port will be correctly routed to the server. Port numbers range from 0 to 65535. Ports 0 to 1023 are "Well-Known Ports" and have specific services associated with them. Ports 1024-49151 are "user or registered ports" and may hva been registered by certain companies for specific products. All other ports are "dynamic ports". When you need to use a port for your own app, pick one between 1024-65535 as long as no other app on the machine is using that port.  Ex:

    Port	Protocol	Description
    21	FTP	File Transfer protocol
    22	SSH	secure logins to remote servers
    23	Telnet	For remote management of servers
    80	HTTP	For web content
    110	POP3	Retrieve emails from a server
    443	HTTPS	Encrypted transmission of web content

Note that since these are already associated (HTTP) with well-known ports, it is not necessary to specifiy it in the URL. For everything else though, you must specifiy the port. W

*/

// Ex using port 8000

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
})

// From here you start the server with your "npm start" command, then go to this address in your browser, which uses the specified port:

http://localhost:8000/

/* Basic Routing - Routing is the process of responding to a client's request to a particular endpoint. An endpoint consists of the path and the HTTP request method:

http://localhost:8000/pizza/pepperoni
http://localhost:8000/pizza/cheese
http://localhost:8000/burger

When a request arrives at the server, Express examines the HTTP method and the path and attempts to find a relevant route. When a route is found, the route is "matched" and the functions associated with that route are executed. If no routes are found, we get a 404 Not Found error.
*/

/* Creating GET routes - Use the .get() method of the express application object. Where PATH is the path on the server and HANDLER is a functio to be executed when the route is matched. The handler function must accept two parameters, the first one is the Request object (req) and the second is Response (res).  */

app.get(PATH, HANDLER);

// You can add a Route like so:

app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
  })


/* Logging - Use of a loggin tool that automatically logs events as they occur. We will use "Morgan" an HTTP request logger that works with Express. It is installed as a middleware function, meanning that the request will pass through this as a "station" before being passed to the handler. It can even be configured to write the log output to a file instead of the console if desired. 

First, install Morgan: */ 

npm install morgan

// In order to use middleware, it must be "mounted" or added at some specific path. We can use use() method for mounting middleware. First, you must require the Morgan middleware and then add it like so :

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// Note that the string argument 'dev' is one of many, such as "combined, common, dev, short, tiny", ect. They can all be found here:  https://www.npmjs.com/package/morgan 

// Note that you'll see the log in the terminal, not in the console in the browser. 

// More on middleware - some can be authorization, and if failed, can return an error back to the user rather than go all the way to the actual handler. 

/* Request Object - The below IS the request handler function. The function accepts two parameters, req and res. req is an object that represents the HTTP request and has methods to access the various properties of that request. res is an objec that represents the HTTP response that Express sends to the client after the request is processed. */ 

(req, res) => {
    res.send('Hello Express!');
}

// Source on request object: https://expressjs.com/en/4x/api.html#req

// Ex of using the req object to display it's own properties when a get request is sent :

app.get('/echo', (req, res) => {
    const responstText = `Here are some details of your request: 
    Base URL: ${req.baseURL}
    Host: ${req.hostname}
    Path: ${req.path}
    `;
    res.send(responseText);
})

/* The Query Object - The query property of the request contains an object with a property for each query string on the URL. Note that the key/value pairs after ? on the URL are not part of the routing for the URL, but are info the handler function may use to process the request. */ 

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); // do not send any data back to the client
})

/* Note that when using query objects, you must consider these: 
    1. retrieve the parameter values from the query object
    2. validate the parameter values, never trust the client
    3. if the values are invalid, respond with an error
    4. if the values are valid, process the request. That is, do whatever the purpose of the function was in 5. the first place
    5. construct a response
    6. send the response */

app.get('/greetings', (req, res) => {
    // 1. get values from query object: 
    const name = req.query.name;
    const race = req.query.race;

    //2. validate the values:
    if (!name){
        return res.status(400).send('Please provide a name');
    }
    if (!race){
        return res.status(400).send('Please provide a race');
    }
     // 4 and 5. Values are valid, so proceed:
     const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;

     res.send(greeting);
})

// Note the res.status, which allows you set a status on the response. 

// To avoid having to restart the server constantly, you can now use a tool called Nodemon. This will restart the Node application whenever file changes are detected. First, install it:

npm install nodemon -D

// THEN you must change your package.json file to use nodemon instead of node when starting the server. You can make a seperate command :

"scripts":{
    "start": "node app",
    "dev": "nodemon app"
}

// You then simply start your server in dev mode:

npm run dev

/* Express Response Object -  
    -Response - 
    -HTTP status - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    -Response object documentation - https://expressjs.com/en/4x/api.html#res

    Common HTTP response Codes:
        Code	Status Text	Description
        200	OK	The request has succeeded. This is the most common response and the default when no other status is set. In the examples above where we called send() the status code would automatically be 200. It is expected that some information is also being returned with this response.
        201	Created	The request has been fulfilled and a new resource has been created on the server. This is usually in response to a POST request. The information in the response varies, it may contain a representation of the created resource, or not be present. In some cases, a location header with a link to the newly-created resource may be set.
        204	No Content	The server successfully processed the request but does not need to return any information.
        304	Not Modified	The requested resource has not been modified since the last time it was requested. This saves bandwidth as the same resource does not need to be sent twice.
        400	Bad Request	The request could not be understood by the server due to malformed syntax. The client should fix the problem with the request before resubmitting.
        401	Unauthorized	The request requires user authentication. For instance, if the credentials provided are not valid, or if they are missing.
        403	Forbidden	The server understood the request but is refusing to fulfill it. Authentication will make no difference. Typically means that the operation being requested is not allowed.
        404	Not Found	The requested resource could not be found. This is used when the path being requested does not exist.
        500	Internal Server Error	The server encountered an unexpected condition which prevented it from fulfilling the request. This is a generic catch-all error when any server-side exception happens.

    To set the status code, use the status() method:
    */

    app.get('/hello', (req, res) => {
        res.status(200).send('Hello, everything was ok!');
    });

    // Ex of a server error: 

    app.get('/hello', (req, res) => {
        res.status(500).send('Oops! I did it again.');
    });

    // Ex of client error:

    app.get('/hello', (req, res) => {
        res.status(400).send('Oops! YOU did it again');
    });

    // When you need to send back a response that contains no mesage, such as a 204 (no content), then you must use the .end() method or nothing is actually sent:

    app.get('/hello', (req, res) => {
        res.status(204).end();  // This ends the response and then sends it back to the client. 
    });

// JSON data - when sending a JSON response back to the client, a "content-type" header should be set to notify the client that the body is a JSON type. Use .json() method to set the correct content-type and convert the paraemeter provided to a JSON string using JSON.stringify(). Ex of sending an object:

app.get('/video', (req, res) => {
    const video = {
        title: 'Cats falling over',
        description: '15 mintutes of cats falling out of trees',
        length: '15.40'
    }
    res.json(video);
})

// Ex of sending an array:

app.get('/colors', (req, res) => {
    const colors = [
        {
            name: "red",
            rgb: "FF0000"
        },
        {
            name: "green",
            rgb: "00FF00"
        },
        {
            name: "blue",
            rgb: "0000FF"
        }
    ]
    res.json(colors);
})

// Ex:

app.get('/grade', (req, res) => {
    const { mark } = req.query;

    // validation:
    // Provide A query
    if (!mark){
        return res.status(400).send('Please provide a mark');
    }

    // turn string value into a number
    const numericMark = parseFloat(mark);

    // check that query is a number
    if (Number.isNaN(numericMark)){
        return res.status(400).send('Mark must be a numeric value');
    }

    // check number is in required range
    if (numericMark < 0 || numericMark > 100){
        return res.status(400).send('Mark must be in range 0 to 100');
    }

    if (numbericMark >= 90){
        return res.send('A');
    }

    if (numericMark > 80){
        return res.send('B');
    }
    
    if (numericMark > 70){
        return res.send('C');
    }

    res.send('F');
});

/* Full Stack Example: */

// First, Build the server by creating the project folder and then :

mkdir nytServer && cd $_
npm init -y

// Then install nodemon, epxress, and morgan:

touch app.js // to create the starting file
npm install nodemon -D
npm install morgan express

// Next, edit your scripts in package.json so that you can run nodemon app with the start command:

"scripts": {
    "start": "nodemon app"
}

// Now create the basic server in your app.js file with Express and Morgan:

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // common format

app.get('/books', (req, res) => {
    // code here
})

app.listen(8000, () => {
    console.log('Server started on PORT 8000');
})

// You can then start your server with:

npm start

// Ex of importing an object containing an array of book data:

const books = require('./books-data.js');

// Ex of assigning a missing query parameter a default value:

const {search = ""} = req.query;

// Ex of filtering through provided data for something that matches the search query:

app.get("/books", (req, res) => {
    // code here
    const { search = "" } = req.query;
  
    let results = books.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  
    res.json(results);
  });

  // When connecting a server to a client app, may run into CORS issue. For now, can install cors and place in server file like so:

  npm install cors

  // then in app.js

  const cors = require('cors');

  app.use(cors());


/* Integration Testing - Creating integration testing for Express apps handling requests. 
    -Testing - Often accounts for a large amount of the work effort/project. In express, communication is via the HTTP protocol,     meaning the client sends an HTTP request with conditions, like auth headers or data in specified formats, to a speciific endpoint function, and expects a specific HTTP response. In this case, we want to verify that the responses match our expectations. Tests can be automated and integrated into the build process. 
    -Mocha -
    -Interface - is a shared boundary across which components exchange data. 
    -Integration Tests - designed to find errors during the exchange in the "interface". 
    -Chai -
    -Supertest -
    -expect -
    -assertion -
    -Hooks - 
*/

/* Testing Tools
    Testing structure - The scaffolding within which tests are run. E.g. Mocha, Jasmine, Jest
    Assertion functions - Used to assert conditions for passing tests. E.g. Chai, Jasmine, Jest
    Watchers - Generate results and watch for code changes to redo the tests. E.g. Mocha, Jest, Karma, Jasmine
    Snapshots - Generate and compare snapshots of components. E.g. Jest, Ava
    Mocking - Fake certain modules or behaviors to test only part of a process. E.g. Jest, Enzyme, Sinon, Jasmine
    Spies - Observes a function and provides details about how that function is invoked without affecting the behavior of the function. E.g. Sinon
    Stubs - Like spies, but replaces the function allowing you to control the behavior of a function during tests. E.g Sinon
    Code coverage - Automatically determines which lines of code are covered by tests and gives a report. E.g. Istanbul, Jest

    Mocha is a testing framework
    Chai is an assertion library
    Supertest is a tool for testing HTTP calls
*/

// To set up, create your directly 

mkdir mocha_playground && cd $_
npm init -y

// Then to install Mocha:

npm install mocha -D

// Then add an npm script for running the tests. Edit your package.json file and add:

"scripts": {
    "test": "mocha"
}

// Mocha defaultly looks for a directory called "test". So create your directory and test file:

mkdir test
touch test/divide.test.js

// Then you can call Mocha:

npm test

// This will return something if the test directory is found and tell how many tests were executed, how many passed, and how long it took. 

// Note that to test the function, it must be made accesible by exporting and then requiring the function in the test file. So your divide.js file could look like:

function divide(a, b) {
    if (b === 0){
        throw new Error('Cannot divide by 0');
    }
    return a/b;
}

module.exports = divide;

// In the test file:

const divide = require('../index');

// Mocha Syntax - Similar to React. Use describe() function to contain suites of tests. Use it() function which "asserts" that the expected outcomes are achieved. .equal() testing strict equality. .throw() expects an error to be thrown. Note that when testing if thrown errors, you must wrap the function in another function so that the exception is thrown, but avoids the normal handling. .throw() returns true if an exception is thrown, otherwise returns false. :

describe('A Suite Description', () => {
    it('should divide positive integers correctly', () => {
        // Define inputs
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        // invoke function
        const actualAnswer = divide(a, b);

        // ASSERT that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
    
    });
    it('should throw an error when divide by zero', () => {
        // Define inputs
        const a = 8, b = 0;

        // Invoke the function
        const fn = () => {
            divide(a, b);
        };

        // ASSERT that exception is thrown
        expect(fn).to.throw();
    });
});

/* Test cases should follow:
    1. Set up any data needed to run the test, like an array or string.
    2. Invoke the function to be tested.
    3. Asser that all the affects of the invocation meet expectations. */

// Note that you need an "assertation library" as mocha does not have one bulit in, but allows you to use the one you want.

/* Chai - popular assertion library often used with Mocha. First, install Chai: */

npm install chai -D

// Then in your test file, require the "expect" interface of Chai:

const chai = require('chai');
const expect = chai.expect;

// or do this:

const expect = require('chai').expect;

// You can also refactor your test code to more condensed form: 

const expect = require('chai').expect;
const divide = require('../index');

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        expect(divide(8, 4)).to.equal(2);
    });

    it('should thrown an error when divide by zero', () => {
        expect(() => { divide(8, 0) }).to.throw();
    })
})

// Note that when testing array values, must use the .deep method:

describe("sort function", () => {
    it("should return a sorted array", () => {
      expect(sort([2, 4, 1, 7, 5])).to.deep.equal([1, 2, 4, 5, 7]);
    });
  });

// Note that Chai has several interfaces namely "expect", "should" and "assert". The choice simply impacts the syntax:

expect(actualAnswer).to.equal(expectedAnswer); //using expect
actualAnswer.should.equal(expectedAnswer); //using should
assert.equal(actualAnswer, expectedAnswer); //using assert

// Chai : https://www.chaijs.com/api/bdd/

// Note that the ".equal" function takes an optional and second argument as a message if the assertion fails:

expect(2).to.equal(2, '2 === 2'); // will pass
expect(2).to.equal("2", 2 === "2") // will fail, as string is not a number with strict equality

// .deep - performs a deep-equal between objects. If you compare objects or arrays, must do deep comparison to see values inside. Example:

const expect = require('chai').expect;
const diff = require('../arrayDiff');

describe('Array diff', () => {
  it('should return a if no common elements', () => {
    expect(diff([1,2,3], [4,5,6])).to.deep.equal([1,2,3]);
  });

  it('should return [] if same', () => {
    expect(diff([1,2,3], [1,2,3])).to.deep.equal([]);
  })

  it('should return correctly if some elements are removed', () => {
    expect(diff([1,2,3], [2])).to.deep.equal([1,3]);
  })
})

// .eql - instead of using .deep.equal, you can use .to.eql like so:

it('should return correctly if some elements are removed', () => {
    expect(diff([1,2,3], [2])).to.eql([1,3]);
  })

// Just note that sometimes .deep.equal might be more userful as you can chain .deep with other methods, like .include. 

// .a - Checks the type of a value. 

const expect = require('chai').expect;
const sum = require('../sumArray');

describe('Array sum', () => {
    it('should return a promise', () => {
        expect(sum([1, 2, 3])).to.be.a('promise');
    })
})

// You can then add .then handler and add a test for normal case like:

it('should sum an array of numbers', () => {
    return sum([1, 2, 3])
        .then(ans => {
            expect(ans).to.equal(6);
        })
})

// Example of checking for a type before simply adding a string to a nubmer:

function sum(arr) {
    return new Promise((resolve, reject) => {
      const ans = arr.reduce((acc, curr) => {
        const num = parseFloat(curr);
        return acc + (Number.isNaN(num) ? 0 : num);
      }, 0);
      resolve(ans);
    });
  }
  
  module.exports = sum;

  // You can also use .to.be.a.() method with that.equal() to check for type of answer as well:

  const expect = require("chai").expect;
const sum = require("../sumArray");

describe("Array sum", () => {
  it("should return a promise", () => {
    expect(sum([1, 2, 3])).to.be.a("promise");
  });
  it("should sum an array of numbers", () => {
    return sum([1, 2, 3]).then(ans => {
      expect(ans).to.equal(6);
    });
  });
  it("should sum an array of numbers and non-numeric strings", () => {
    return sum([1, "2", 3, "a"]).then(ans => {
      expect(ans)
        .to.be.a("number")
        .that.equal(6);
    });
  });
});

// .not()  
  
it('should remove 1 from [1,2,3]', () => {
    expect(diff([1,2,3], [1])).to.not.include(1);
})

// .true and .false

function isEven(n) {
    return n % 2 == 0;
  }
  
  module.exports = isEven;

// Testing:
const expect = require('chai').expect;
const isEven = require('../even');

describe('isEven', () => {
  it('should find 4 to be even', () => {
    expect(isEven(4)).to.be.true;
  });

  it('should find 5 to not be even', () => {
    expect(isEven(5)).to.be.false;
  });
});

/* Testing Express Applications - One difference between testing client side javascript is the HTTP layer which usually invokes the endpoint function. Supertest - library for abstracting HTTP layer and allowing tests to be performed. Steps before you can test:
    1. Prepare the app for testing, need to export the app and require in the test file.
    2. Install Supertest, set up Mocha tests.
    3. Write tests for the endpoints functions. 
    */ 

// To start a new project, install Express, morgan, nodemon, mocha, chai, and supertest:

mkdir express_testing && cd $_
npm init -y
npm install express morgan
npm install mocha chai supertest nodemon -D
touch app.js

// Add scripts:

"scripts": {
    "test": "mocha",
    "start": "node app.js",
    "dev": "nodemon app.js"
  }

// Create your app.js

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});

// Then run the app in dev mode with:

npm run dev

// Note that when in testing, you don't have to have the app listening for the PORT, thus seperating the server and client code. 

// -Server Controller Code - the code that starts the server listening on the given port. Everything else is "Application Code". 

// So after this, first export the Express application object and remove the Server Controller Code:

const express = require('express');
  const morgan = require('morgan');
  const app = express();

  app.use(morgan('common'));

  app.get('/', (req, res) => {
    res
      .send('Hello Express!');
  });

module.exports = app;

// Next create server.js file for the controller code. In that file, require the app and start the server listening. 

const app = require('./app');

app.listen(8000, () => {
    console.log('Sever started on PORT 8000');
})

// Then be sure to update package.json so that it starts the controller file since it's seperated.

"scripts": {
    "test": "mocha",
-   "start": "node app".hs,
+   "start": "node server.js",
-   "dev": "nodemon app.hs"
+   "dev": "nodemon server.js"
  },

//  Re-run your server:

npm run dev

// Set up testing - First create your test directory for your test files:

mkdir test
touch test/app.test.js

// Then in your test file, require the Chai expect, app, and supertest:

const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

// First, invoke the endpoint and call supertest by passing the Express server object, the app. SuperTest has some built in assertions for asserting properties of the HTTP response. You can "assert" that you expect a certain status and the body text. This test is returned inside of the it() function:

describe('Express App', () => {
    it('should return a message from GET /', () => {
        return supertest(app)
            .get('/')
            .expect(200, 'Hello Express!');
    })
})

// supertest git: https://github.com/visionmedia/supertest

// To use supertest on an endpoint that could require some input:

app.get("/sum", (req, res) => {
    const { a, b } = req.query;
  
    if (!a) {
      return res.status(400).send("Value for a is needed");
    }
  
    if (!b) {
      return res.status(400).send("Value for b is needed");
    }
  
    const numA = parseFloat(a);
    const numB = parseFloat(b);
  
    if (Number.isNaN(numA)) {
      return res.status(400).send("Value for a must be numeric");
    }
  
    if (Number.isNaN(numB)) {
      return res.status(400).send("Value for a must be numeric");
    }
  
    if (numB == 0) {
      return res.status(400).send("Cannot divide by 0");
    }
  
    const ans = numA / numB;
  
    res.send(`${a} divided by ${b} is ${ans}`);
  });

  // Then in the test file use .query to feed input values: 

  describe("Get /sum", () => {
    it("8/4 should be 2", () => {
      return supertest(app)
        .get("/sum")
        .query({ a: 8, b: 4 })
        .expect(200, "8 divided by 4 is 2");
    });

    it('should return 400 if "a" is missing', () => {
        return supertest(app)
        .get('/sum')
        .query({ b: 4 })
        .expect(400, 'Value for a is needed');)
    })
  });


  // Now if you want to access the response object returned like ini this request function: 

  app.get("/generate", (req, res) => {
    // get n from query string in request
    const { n } = req.query;
  
    // coerce n to a numeric value
    const num = parseInt(n);
  
    if (Number.isNaN(num)) {
      return res.status(400).send("Invalid request");
    }
  
    const inital = Array(num)
      .fill(1)
      .map((_, i) => i + 1);
  
    inital.forEach((e, i) => {
      let ran = Math.floor(Math.random() * num);
      let temp = initial[i];
      initial[i] = initial[ran];
      initial[ran] = temp;
    });
  
    res.json(initial);
  });

// You then use the .then after .expect to have access to response data. In this example, it tests that the response body is an array, that it has a min length, and testing that the response body includes each of the given values.

return supertest(app)
  .get('/yourendpoint')
  .query({ key: 'value' })
  .expect(200)
  .expect('Content-Type', /json/)
  .then(res => {
      // here res is full response data and you can use chai assertions to examine it fully
    // Make sure it was an array:
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf.at.least(1);
    expect(res.body).to.include.members([1, 2, 3, 4, 5]);
  })

// Note that instead of .include.members, which tests that the given are present, you can use .have which asserts that the items being compared are the ONLY ones present.

expect(res.body).to.have.members([1, 2, 3, 4, 5]);

// You can also chain things into a single line:

expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]);

// .all and .any- Checks that an object either contains all or any of a set of keys.

// Test exp:

const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('GET /midpoint endpoint', () => {
  it('should find midpoint between NY and LA', () => {
    const query = {
      lat1: 40.6976701, //NY
      lon1: -74.2598674, //NY
      lat2: 34.0207305, //LA
      lon2: -118.6919221 //LA
    };

    // somewhere near Aurora, Kansas
    const expected = {
      lat: 39.50597300917347,
      lon: -97.51789156106972
    };

    return supertest(app)
      .get('/midpoint')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.have.all.keys('lat', 'lon');
        expect(res.body).to.eql(expected);
      });
  })
});


/* Exclusive and Inclusive tests - to skip certain sections of tests, you can use the .skip() method behind describe: */

describe.skip('GET /books', () => {
  // all tests are skipped here
});

// or skip just certain tests:

describe('GET /books', () => {
  it.skip('should return an array of books', () => {
    // this test is skipped
    // ...
  });

  it('should be 400 if sort is incorrect', () => {
    // this test is NOT skipped, runs like normal
    //  ...
  });

  // ...
});

// OR if you want to run just ONE test, you can use the .only() method.

describe('GET /books', () => {
  it.only('should return an array of books', () => {
    // only this test runs
    // ...
  });

  it('should be 400 if sort is incorrect', () => {
    // this and all other tests are skipped
    //  ...
  });

  // ...
});

// Ex:

describe.only('GET /books', () => {
  // all tests in this suite will run, no other suite of tests will run
});



/* Working with Datasets - 
  -Datasets -
  -Authorization headers -
  -API tokens -
  -Environmental variables -
  -CORS -
  -Helmet -
*/

// Note that when creating endpoints, instead of passing anonymous functions as the second argument, you can create the function outside of the .get, and then pass the callback function as the second argument like so:

function handleGetTypes(req, res){
  // stuff
}

app.get('/types', handleGetTypes);

/* Authorization Headers - What if we need to limit the number of requests a person can make to the server? In case of an attack? You can limit this by only allowing requests that contain a valid API token. The client should supply a valid "Authorization header" value with a value of "Bearer ${API_TOKEN}". If not provided, server should respond with an "Unauthorized" error using the correct status code. The server should look for this header, read the value, and check the value contains a valid API token. */

// To validate tokens by using more middleware, we want to pass the req and res objects through validation BEFORE handing off to the GET hanlder requests. Where validateBearerToken is a callback function: 

const app = express()

app.use(morgan('dev'))

app.use(validateBearerToken)

app.get('/types', handleGetTypes);

app.get('/pokemon', handleGetPokemon);

app.listen(PORT, cb)

// Example of the function - note that next() signals the passage of info to the next function:

app.use(function validateBearerToken(req, res, next){
  console.log('validate bearer token middleware');
  //move to next middleware
  next();
})

// You can access authorization headers by using req.get('headerOfChoie'). In this full example, this first checks that the auth header is present, otherwise returns an error, then checks to see that the value of that header, after being split and accessing the second word (token), matches what is stored:

app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get("Authorization");

  if (!authToken || authToken.split(" ")[1] !== apiToken) {
    return res.status(401).json({ error: "Unauthorized request" });
  }

  next();
});

// To further protect your server from sending information in the response header indicating that you server is built with Express, you can install something call "helmet" which will hide that info.

npm i helmet 

// Then implement in your server:

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const POKEDEX = require("./pokedex.json");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

/* Know that servers store large amounts of data so that client side apps can request only what they need. */



/* Deploying a Server - Deploy a server app to production in Heroku. For back end applications, much more emphasis is placed on security rather then optimizaiton. 
  Heroku - platform-as-a-service (PaaS). Site uses a "dyno" to serve content when someone visits the site. 
  Environmental variables
  Git remotes
  Ports
  Continuous integration
  Production
  The cloud
*/

// Once Heroku is installed on your computer with:

sudo snap install --classic heroku

// You can then login in the terminal with:

heroku login

/* Steps to take before deploying to server app to Heroku:
    1. Hide secrets - ensure no keys or tokens are stored in the source code, try to be using the process.env.API_TOKEN with the .env file and that the .env is listed in the .gitignore file. 
    2. Respect the PORT from the environment - Note that Heroku will not be using your assigned port on their cloud service. They assign you a port in their own system. Heroku will set an enviornmental variable called PORT to the number it's assigned. To change your app.listen to utilize the enviornmental variable set up by the cloud service OR your default port so it will work in both local and cloud settings: Ex: */

   const PORT = process.env.PORT || 8000

    /* 3. Use minimal logging - This is a security risk. Malicious users could gain access to logs, so no info should be logged. NOTE that using middleware Morgan, we can change its setting from 'dev' or 'common to 'tiny' or 'short'.BUT
      - Heroku will also set another enviornmental variable called NODE_ENV and set it to 'production'. We can then check if this variable is set to production, and if it IS, then change it 'tiny', otherwise 'common'. */

      const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';

    /* 4. Remove unnecessary console logs.
    5. Hide sensitive server error messages - For this we can use another middleware to help protect information. Should be the last middleware in your pipeline. Note Express checks the number of parameters fed to the app.use method. When the middleware has a list of 4 parameters, it is assigend to the error object that occured. Ex: */

    app.use((error, req, res, next) => {
      let response;
      if(process.env.NODE_ENV === 'production'){
        response = { error: { message: 'server error' }}
      } else {
        response = { error }
      }
      res.status(500).json(response);
    })

    /* 6. Use a different API_TOKEN.
    7. Make and configure a Procfile - When deploying with Heroku, it will look for a file called Procfile so that it knows how to start your server. Not necessarily required, could look in package.json, but is preferable because it prevents errors if you need a diff start script in dev vs production. First, create your file with no extension and then add this content: */

    touch Procfile

    // content:

    web: node server.js

/* 8. Specify which version of Node the application uses - Best to use same version of node in Heroku as we are locally. We can tell Heroku in our package.json file in the section "engines". First check your version: */

node --version

// Then add this to package.json underneat "keywords"

"engines": {
  "node": "10.16.1"      // Per your version of coures.
}

/*    9. Audit our packages - utilize a feature of NPM called "audit" that will search for any security vulnerabilites. Run: */

npm audit

// Note that if there are any issues, you can run:

npm audit --fix


// Ensure all tests are still working properly, then push commit to gitHub, which is how the server will be deployed to Heroku. First, we must create a new "remote" location for the code using heroku in the command line:

heroku create
 
// Now all you have to do is push this to heroku:

git push heroku master

// NOTE - when this is done, Heroku reads the project files, finds package.json, and sets up enviornment variables such as NODE_ENV=production, reads the "engines" section, sees version of node, sets up a "buildpack", installs all dependencies listed in package.json while ignoring devDependencies, reads the Procfile and starts the application as specified. 

// You can check that this was all successful with this command:

heroku logs

// or to get a live report as logs are added:

heroku logs --tail

// Once the code is pushed, you can then specify the number of dynos the app needs. NOTE you only need to do this once even if updating code:

heroku ps:scale web=1

// If you need to push new code to heroku, simply use to deploy:

git push heroku master

// Now you can check out your app by using the "heroku open" command which will open a brwoser tab with an address. If you want to use the endpoints you've set up, you do need to set up the production API_TOKEN. Luckily, heroku has a feature called "config" that enables us to create, read, update, and remove enviornmental variables for production code. You can run "heroku config" to list env variables. You can set new ones using:

heroku config:set API_TOKEN=paste-token-here

/* Continuous Integration - automating the steps of deployment to avoid committing human error. The steps in most cases would be: audit, test, and deploy. To automate, add scripts to your package.json in the "scripts" section: */

"predeploy": "npm audit",
"deploy": "git push heroku master"

/* There are many services that provide Continuous Integration (CI) services which would watch for an update or push to GitHub and then begin deployment. Some services also perform tasks like sending emails and creating backups. such as: 
    Circle CI
    Travis CI
    Jenkins
    VSTS
    Concourse
    AWS pipeline
    Teamcity
    Bamboo
    Codeship
    Gitlab */

// Ex: Travis CI would watch for changes pushed to a certain gitHub branch, then download the changes, run the tests, perform the audit, and e-mail the manager asking to deploy the code to production. If OKed, it will then deploy the code. 



/* Boilerplate Node app - Can upload to Github and clone it at anytime to have a fresh starting point by re-init Git. Accomplish the following: 
    Installs dependencies
    Installs middleware appropriate for any API project
    Adds basic configuration management
    Configures testing libraries
    Creates NPM scripts for running, developing, testing and deploying
    Creates a "Hello, world!" endpoint so that we can verify the boilerplate set up worked.
*/

// To use the boiler plate code, first clone the repo in your project directory:

git clone git@github.com:Cosmic-Noir/express-boilerplate.git PROJECT-NAME && cd $_

// then remove the old git info:

rm -rf .git && git init

// Now the project is fresh. Install dependencies:

npm install

// Move example env file with:

mv example.env .env

// Next, edit package.json to have your project name:

"name": "project-name",
"version": "0.0.1",


/* POST and DELETE requests -  */

// A typical login form like this:

<form method="post" action="/auth/login">
  <label for="username">Username: </label>
  <input type="text" name="user" id="username" />
  <label for="password">Password: </label>
  <input type="password" name="pw" id="password"/>
  <input type="submit" value="LOGIN" />
</form>

/* May produce and HTTP request like this

POST /auth/login HTTP/1.1
Host: localhost:8000
Accept-Language: en-us
Content-Type: application/x-www-form-urlencoded
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
Content-Length: 37
Connection: Keep-Alive
Cache-Control: no-cache

User=stan&pw=lee */

// However, using the fetch api call:

const data = {
  user: "stan",
  pw: "lee"
};
fetch('http://localhost:8000/auth/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(...)

/* With a resulting HTTP request of: 

POST /auth/login HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
    "user": "stan",
    "pw": "lee"
}

*/

// Handling POST Requests in Express - use .post() method, similar to .get(). 

app.post('/', (req, res) => {
  res.send('POST Request received');
})

// Note that when making endpoints, a route path in combo with the request method defines the endopoint to which requeses can be made. Ex of two endpoints with diff request methods:

app.get('/card', (req, res) => {
  // return a list of cards
})

app.post('/card', (req, res) => {
  // create a new card
})


// Now we should validate that the incoming information is in json data format. We can use an express built in middleware called express.json() which will produce a correctly formatted body of data to work with. Must use with the other middleware to parse the body of data:

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Note that it's important to use matching headers to whichever endpoint you are passing, such as content-type. 

// Now that we have sent the data with the POST Request, let's do something with it!:

// NOTE - NEVER trust data from the client - always assume the data sent is invalid and needs validation. 

app.post('/user', (req, res) => {
  // get the data:
  const { username, password, favoriteClub, newsLetter } = req.body;

  // Validation code

})

// The first thing to check is, is the value required? First, we can set anything not required to a default value, then we can validate with the below:

const { username, password, favoriteClub, newsLetter=false } = req.body;

if (!username) {
  return res
    .status(400)
    .send('Username required');
}

if (!password){
  return res
    .status(400)
    .send('Password required');
}

if (!favoriteClub) {
  return res  
    .status(400)
    .send('Favorite Club required');
}

// Then, if the required data does exist, is it the right format and data type?

if (username.length < 6 || username.length > 20){
  return res 
    .status(400)
    .send('Username must be between 6 and 20 characters');
}

if (password.length < 8 || password.length > 36) {
  return res
    .status(400)
    .send('Password must be between 8 and 35 characters');
}

if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
  return res
    .status(400)
    .send('Password must contain at least one digit');
}

// If you want to check that a value is part of an array of options:

const clubs = [
  'Cache Valley Stone Society',
  'Ogden Curling Club',
  'Park City Curling Club',
  'Salt City Curling Club',
  'Utah Olympic Oval Curling Club'
];

if (!clubs.includes(favoriteClub)){
  return res  
    .status(400)
    .send('Not a valid club');
}

// Processing the data - For now, just storing data in memory, not in a data structure yet. For now, we'll declare a variable to store the usernames at the top:

app.use(express.json());

const users = [];

// Then, after validation, we can construct an object that is pushed to the array:

const id = // generate unique id
const newUser = {
  id,
  username,
  password,
  favoriteClub,
  newsLetter
};

users.push(newUser);

res.send('All validation passed');

// One way to randomly generate a unique id is to install a UUID library:

npm install uuid

// Then require the library:

const uuid = require('uuid/v4');

// When sending a response for a succesfull response, you can actually be more specific with your status code instead of just 200 OK. Two options: 201 Created or 204 No Content. Since we aren't technically sending a response, just the status after a post, you can return:

res
  .status(204)
  .end();

// If you DO want to send a response, a popular method is to send the ID of the newly created object, or respond with the actual object itself. In both cases, a location header is typcially set with the URL to dirctly access the object:

res  
  .status(201)
  .location(`http://localhost:8000/user/${id}`)
  .json(newUser);

// Sending just the ID:

res 
  .status(201)
  .location(`http://localhost:8000/user/${id}`)
  .json({id: id});

// In this way the user can GET the details with the location , but the endpoint for user/id must exist. 

// Named Route Parameters - Another way to send data besdies as a query or in the body of the request. Route parameters are named portions of a URL that can capture values specified at their positions in the URL. 

// To create a route parameter use the special syntax :param_name when specifying the route. In this case, if a request is send to "http://localhost:8000/book/1234" the part of the URL corresponding to the :bookId will be assigned to the req.params.

app.get('/book/:bookId', (req, res) => {
  // ... 
})


// :bookId assigned to req.params:

{
  bookId: 1234
}

/* DELETE Requests - Used with the Route Paramater, identifies the correct object with the provided ID. So the endpoint could be defined as:*/

app.delete('user/:userId', (req, res) => {
  // ... 
})

// So then within the route handler function, you can get the ID like this:

app.delete('/user/:userId', (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.send('Got it.');
})

// First, validate that the ID even exists: 

app.delete('/user/:userId', (req, res) => {
  const { userId } = req.params;

  const index = users.findIndex(u => u.id === userId);

  // make sure we actually find a user with that id
  if (index === -1) {
    return res
      .status(404)
      .send('User not found');
  }

  users.splice(index, 1);

  res
    .status(204)
    .end();
});

/* Organizing Server - 
  Layering
  Modularizing
  Modules
  Routing
*/


// We can install a loggin library called Winston:

npm install winston

// Then, in you app.js file, require and configure the logger:

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
});

if (NODE_EVN !== 'production'){
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Winston has 6 levels of severity: silly, bedbug, verbose, info, warn, and error. 

// Now we must add logging statements to the code. You can use the logger.error in certain places in your code. In this case, we've added a logging statement to the authorization middleware:

app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get("Authorization");

  if (!authToken || authToken.split(" ")[1] !== apiToken) {
    logger.error(`Unauthorized request to path: ${req.path}`);
    return res.status(401).json({ error: "Unauthorized request" });
  }
  next();
});

// Note that you also do not want the error log to pollute your git hub, so we should have gitignore all files with .log extension. Add this to .gitignore:

*.log

// You can also use the logger to note when something is succesffully posted like in this ex:

app.post("/card", (req, res) => {
  const { title, content } = req.body;

  // Validation:
  if (!title) {
    logger.error(`Title is required`);
    return res.status(400).send("Invalid data");
  }

  if (!content) {
    logger.error(`Content is required`);
    return res.status(400).send("Invalid data");
  }

  const id = uuid();

  const card = {
    id,
    title,
    content
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res.status(201).location(`http://localhost:8000/card/${id}`);
});

// NOTE that to use the logger in multiple files, you can create logger.js and have a file with:
const winston = require("winston");
const { NODE_ENV } = require("./config");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "info.log" })]
});

if (NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

module.exports = logger;


// Referential Integrity - Ensure that id's passed into a property of the data being stored actually exist. The data is referncing other data that exists. Ex:

app.post('/list', (req, res) => {
  const { header, cardIds = [] } = req.body;

  if(!header){
    logger.error(`Header is required`)
    return res.status(400).send('Invalid data');
  }

  // check dard IDs:
  if (cardIds.length > 0){
    let valid = true;
    cardIds.forEach(cid => {
      const card = cards.find(c => c.id == cid);
    })
    if (!card){
      logger.error(`Card with id ${cid} not fond in cards array.`);
      valid = false;
    }
  }

  // get an id:
  const id = uuid();

  const list = {
    id,
    header,
    cardIds
  };

  lists.push(list);
  logger.info(`List with id ${id} created`);

  res.status(201).location(`http://localhost:8000/list/${id}`).json({id});
})

// Sometimes when removing certain Id's or "cards" from an array, those cards or ids are referenced in other arrays and must be removed from those as well. 

app.delete('/card/:id', (req, res) => {
  const { id } = req.params;

  const cardIndex = cards.findIndex(c => c.id == id);

  if (cardIndex === -1){
    logger.error(`Card with id ${id} not found.`);
    return res.status(404).send('Not Found');
  }

  // Remove matching card from lists:
  // Assume cardIds are not duplicated in the cardIds array
  lists.forEach(list => {
    const cardIds = list.cardIds.filter(cid => cid!== id);
    list.cardIds = cardIds;
  })

  cards.splice(cardIndex, 1);
  logger.info(`Card with id ${id} deleted`);

  res.status(204).end();

})



/* Organizing Your Server - Once your server file starts to grow, it's best to split it up into multiple files for organization. There are two ways to organize:
    -Vertically - Called "Layering"
    -Horizontally - Called "Modularizing". Modules are groupings of related code. 

In the Trelloyes card/list app, we could split it by cards and lists "modules". 

Express uses routing, similar to React, to organize code.

So card route will contain these endpoints:
  GET /card
  POST /card
  GET /card/:id
  DELETE /card/:id

List route will contain:
  GET /list
  POST /list
  GET /list/:id
  DELETE /list/:id


To configure a route for cards, create one using express.Router method: */

const cardRouter = express.Router();

// You can then take care of the commond endpoints for /card:

cardRouter.route('/card').get((req,res) => {/* code here */ }).post((req, res) => {/* code here */})

// Then handle the /card/:id endpoints by chaining:

cardRouter.route('/card/:id').get((req, res) => {/* code here */ }).delete((req, res) => {/* code here */})

// Using this method, you can pass middleware to each .get, .post. or .delete methods. This is instead of using the .use() method to pass the entire request through the middleware, you can then specify which endpoints use them. An examples is passing the JSON body parser like so. 

const bodyParser = express.json();

cardRouter.route('/card').post(bodyParser, (req, res) => { /* code here */ });

// So first, for example, you could create a file in src/card/card-router.js, then create the file with this logic:

const express = require("express");

const cardRouter = express.Router();
const bodyParser = express.json();

cardRouter
  .route("/card")
  .get((req, res) => {
    // Code
  })
  .post(bodyParser, (req, res) => {
    // Code
  });

cardRouter
  .route("/card/:id")
  .get((req, res) => {
    // code
  })
  .delete((req, res) => {
    // code
  });

module.exports = cardRouter;


// Next you would import the card router into your app.js and connect it using the app.use method.

const cardRouter = require('./card/card-router');

app.use(cardRouter);

// Don't forget to require your UUId in the card-router file AND we must now move the logger to a seperate file that can be exported to any Router files. That would look like:

const winston = require('winston')
const { NODE_ENV } = require('./config')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
})

if (NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

module.exports = logger

// Then be sure to import this into your router files:

const logger = require('../logger');

/* Intro to Databases - PostgreSQL. 
    -Database Management System - a system that provides tools needed to create and manage databases. They usually provide:
      - a language to define the database and the data stored (called Data Definition language)
      - a language to manipulate the data (called Data Manipulation Language)
      - a security system to prevent unauthorized access
      - a concurrency control system for allowing shared access to the database
      - a recovery control stystem to restore the database in case of software or hardware issues
      - Must provide secure, fast, and scalable data access.
          - Some common examples:
             Relational DBMS 
                Oracle Database (Oracle Corporation)
                Microsoft SQL Server (Microsoft)
                Db2 (IBM)
                MariaDB (open source)
                PostgreSQL (open source)
                SQLite (open source)
              NoSQL DBMS
                MongoDB
                redis
                Neo4j
                Couch DB
    -Relational database - Most common. Stores data in a very structured way and require pre-defined strucutre. Very fast and can support complex queries. Data and relationships between them are represented in tables. Each table must have a unique name and each column has a unique name. Each column has a data type and all values in that column have the same data type. Each table/cell has only one value, and each row must be unique. 
    -NoSQL database - Better for less strucutred data, providing dynamic approach to storing data without first defining structure. 
    -SQL - Structured Query Language - Language used to interact with relational databases. 
    -PostgreSQL - very popular open source relational database system. Used by Instagram, Spotify, Uber, Neflix, Reddit, Twitch, Groupon, MIT and many more. 
    -Primary key - the column that uniquely identifies each row. 
    -Foreign key - referring to the primary key of another table. 
    -Meta-commands (slash-commands) - generally used to administer the database server. Can see full list with \? command.
    -SQL command - useful for manipulating databases and data in the databases and end with semi-colon ;. 
    -Roles - Used to manage access to the databases on the server. 
    -Superuser
*/

// FOr ME, to connect to server: 

sudo su - postgres

// to then connect to psql

psql

// Use Cntrl+D or \q to quit 

// to specify the database to connect to use name of database

psql postgres

// to specify both a user and system name:

psql -U $USER postgres

// To create a role and then create a new database with that role was the owner:

postgres=# CREATE ROLE kevin WITH LOGIN;
postgres=# CREATE DATABASE tax_returns OWNER kevin;





/* Databases with Node - 
  -Knex - SQL query builder library that can be used with different types of databases with Node. 
  -Promise-like object -
  -SQL queries -
  -Query builder -
  */

// First you must install Knex:
npm i knex

// Then install the driver for Postgres which is a module called pg
npm i pg

// To use, require knex in the code and then invoke with knex() function. This function takes arguments of where to connect to, username, password, and which driver to use. Passed as an object, knex will then return an instance that we can use to build queries and connect to the database:

const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: "postgresql://dunder_mifflin@localhost/knex-practice"
});

// With password:

const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: "postgresql://dunder_mifflin:password-here@localhost/knex-practice"
});

// For security, we want to move the connection string to envrionmental variable so it's not hardcoded. Add this to your .env file:

DB_URL="postgresql://dunder_mifflin@localhost/knex-practice"

// Then you can use the enviornmental variable in your .js file:

require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

// Building Queries - To create a Knex query equivelent to "SELECT * FROM <tableName>", use either below method:

knexInstance.from('amazong_products');

// or 

knexInstance('amazong_products');

// This automatically starts building the query, which you can then chain with the select method to choose which columns we want:

knexInstance('amazong_products').select('*');

// To see what your query looks like in pure SQL, you can use the .toQuery method and then log it to the console, where 'amazong_products' is a tableName:

const q1 = knexInstance('amazong_products').select('*').toQuery()
const q2 = knexInstance.from('amazong_products').select('*').toQuery()

console.log('q1:', q1)

console.log('q2:', q2)

// Promise-like Objects - Has normal promise methods, .then, .catch, and .finally, but also has non-promise standard methods to offer more functionality. These include, .select(), .from(), .toQuery(), and more. Doc: https://knexjs.org/#Builder

// We can then use the .then() with a callback function to perform the query. This example logs the results to the console.

knexInstance.from('amazong_products').select('*')
.then(result => {
  console.log(result);
})

// To change SQL:

SELECT product_id, name, price, category FROM amazong_products WHERE name = 'Point of view gun';

// ** Note that the order of .from() and .select() has changed. Build knex chain like so:

knexInstance
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({ name: 'Point of view gun' })ES6 Object initialize
  .then(result => {
    console.log(result);
  });

// You can also use the .first() method to select only the first returned item. 

knexInstance
.select('product_id', 'name', 'price', 'category')
.from('amazong_products')
.where({ name: 'Point of view gun' })
.first()
.then(result => {
  console.log(result)
})

// To create a query string that searches for a word contained in a column, remember to use the LIKE operator with % so it's not looking for an exact match. LIKE specifies we want to search by a pattern. % is a "wildcard" for 0 or more characters. This way you can wrap the search term in %% so it can be found no matter where in the string. So the SQL query would be:

  SELECT product_id, name, price, category
    FROM amazong_products 
  WHERE name LIKE '%cheese%';

// ** note that LIKE is case sensitive, to fix this, you can use ILIKE which is case insensitive:

SELECT product_id, name, price, category
FROM amazong_products 
WHERE name ILIKE '%cheese%';

// To build this in Knex, we must pass 3 arguments to the .where(), the column, operator, and value. NOTE that the third argument is in backticks to be able to hold a variable 

const searchTerm = 'holo';

knexInstance
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where('name', 'ILIKE', `%${searchTerm}%`)
  .then(result => {
    console.log(result);
  })

// Further, you can turn this knexInstance into a function to be called with the search term provided:

function searchByProduceName(searchTerm) {
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result)
    })
}

searchByProduceName('holo')

// Using LIMIT and OFFSET, we can now paginate information, that is, create different pages of data. LIMIT tells us the number of items to display and OFFSET is the starting position in the list to count up to the limit from. So SQL is:

SELECT product_id, name, price, category
  FROM amazong_products
  LIMIT 10
  OFFSET 0;

// To navigate, if we want page 4, minus one from the page number(in this case 3), then multiply this by the limit (which is 10), giving 30, so the SQL for page 4 data is:

SELECT product_id, name, price, category
  FROM amazong_products
  LIMIT 10
  OFFSET 30;

// So for a function using Knex with input page number:

function paginateProducts(page){
  const productsPerPage = 10;
  const offset = productsPerPage * (page -1);
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result);
    })
}

paginateProducts(2);

// Filtering products that have images. Must use the IS NOT NULL for those that do have an image. So, the SQL would be:

SELECT product_id, name, price, category, Image
  FROM amazong_products
  WHERE image IS NOT NULL;

// In Knex, use the .whereNotNull() method and use the column name as the arg. So:

function getProductsWithImages(){
  knexInstance  
    .select('product_id', 'name', 'price', 'category', 'image')
    .from('amazong_products')
    .whereNotNull('image')
    .then(result => {
      console.log(result);
    })
}

getProductsWithImages();

// Ex of finding the most popular Whopipe videos, by region for the last 30 days. In this case, we're using the whopipe_video_views table, where each row represents a view of the video. Must count the number of views for each combination of region and video name. use count() to count the dates viewed, group the results by a combo of the video's name and region, then sort the results by region, and order by the count with the most popular first. Also, use WHERE to filter results within the last 30 days. So SQL looks like:

SELECT video_name, region, count(date_viewed) AS views
FROM whopipe_video_views
WHERE date_viewed > (now() - '30 days'::INTERVAL)
GROUP BY video_name, region
ORDER BY region AudioScheduledSourceNode, views DESC;

// Translated to Knex - *Note that knex does not have a now() method, but we can use knexInstance.raw to pass raw SQL as a string. Also, ?? specifies a user input, we then specify the value for user input as the second argument to .raw(). This is called a "prepared statement":

function mostPopularVideosForDays(days) {
  knexInstance
    .select('video_name', 'region')
    .count('date_viewed AS views')
    .where(
      'date_viewed',
      '>', knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
    )
    .from('whopipe_video_views')
    .groupBy('video_name', 'region')
    .orderBy([
      { column: 'region', order: 'ASC' },
      { column: 'views', order: 'DESC'},
    ])
    .then(result => {
      console.log(result)
    })
}

mostPopularVideosForDays(30);



/* Building Services with Knex -
  -Service object - Allows you to make all CRUD transactions for one table. 
  -Separation of concerns - 
  -Encapsulation - Grouping together methods that perform related transactions
  -Modularization - 
  -CRUD  - 
*/

// First, create a file to store your service object and export it. Ex: src/articles-service.js

const ArticlesService = {};

module.exports = ArticlesService;

// We then store all methods on this object for the transactions. First, getAllArticles:

const ArticlesService = {
  getAllArticles() {
    return 'all the articles!!';
  }
}

// Then we create a file where you import this service and use the methods on. This is also where you create your Knex instance. src/blogful.js:

require('dotenv').config();
const knex = require('knex');
const ArticlesService = require('./articles-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

console.log(ArticlesService.getAllArticles());

// Once this is done, you could choose to update the package.json file to 

"start": "node src/blogful.js",

// Then run the below, and you should see "all the articles!!" on the console.
npm start

// Implicit vs Explicit connection - 


/* Mocha Hooks -
    before runs once before all tests in scope
    after runs once after all tests in scope
    beforeEach runs before each individual test in scope
    afterEach runs after each individual test in scope
    Ex: */

    describe.only(`Temporary spec - top level describe`, () => {
      before(() => {
        console.log('before #1')
      })
    
      before(() => {
        console.log('before #2')
      })
    
      after(() => {
        console.log('after #1')
      })
    
      beforeEach(() => {
        console.log('beforeEach #2')
      })
    
      it(`it #4`, () => {
        console.log('it #4')
      })
    
      it(`it #5`, () => {
        console.log('it #5')
      })
    
      describe(`Describe #1`, () => {
        before(() => {
          console.log('before #3')
        })
    
        after(() => {
          console.log('after #2')
        })
    
        afterEach(() => {
          console.log('afterEach #1')
        })
    
        it(`it #1`, () => {
          console.log('it #1')
        })
    
        it(`it #2`, () => {
          console.log('it #2')
        })
    
        describe(`Describe #2`, () => {
          before(() => {
            console.log('before #4')
          })
    
          it(`it #3`, () => {
            console.log('it #3')
          })
        })
      })
    })


/* Databases with Express - 
    -Migrations - Migrations consists of steps. Like creating a table could be a first step.
    -Fixtures - Test data.
  */

// Building an express project to use with PostgreSQL databases with persisting data. First, set up your project:

git clone https://github.com/[YOUR-USERNAME]/express-boilerplate.git blogful-api
cd $_
rm -rf .git && git init
mv example.env .env
npm install
git add -A && git commit -m 'first commit'

// Create the new database in the terminal

createdb -U dunder_mifflin blogful

// You can test it's good to go with npm test and npm run dev.

// When you have tables in two enviornments, such as production and local, let's say you add a new column to your local table, but it doesn't yet exist in production. Instead of reacreating the table (and losing data), we could alter the table to add the column instead. This is known as migration, I think?

// Postgrator - a tool to help migrations for PostgreSQL. Install with:

npm i postgrator-cli -D

// Postgrator-cli is a command which takes one argument, the "destination" step number. Postgrator CLI connects to our database by reading a configuration file containing the database URL as the value for a connectionString setting. The config file should read the connectionString from the .env file. Make a file 

touch ./postgrator-config.js

// Add the following:

require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": process.env.DB_URL,
}

// So in the .env file you would add your DB_URL file with the associated user and database, just remember if you set a password it must also be entered (see ex above):

DB_URL="postgresql://dunder_mifflin@localhost/blogful"

// In the above exports, the driver is the same driver used in the Knex instance, which must be installed with:

npm i pg

// In the above exports, the migrationsDirectory refers to the folder in our app that contains the migraion steps, which must be made. Note that migrations files come in pairs of "do" and "undo"

mkdir migrations

// Then create the first file:

touch ./migrations/001.do.create_blogful_articles.sql

// Then fill the file with: 

CREATE TABLE blogful_articles (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL,
  content TEXT,
  date_published TIMESTAMP DEFAULT now() NOT NULL
)

// Now we must also make an  "undo" migration:

touch ./migrations/001.undo.create_blogful_articles.sql

// Then fill file with:

DROP TABLE IF EXISTS blogful_articles;

// Next we create an NPM script that runs the postgrator-cli command using the config we created. Do this in the package.json file:

"scripts": {
  "migrate": "postgrator --config postgrator-config.js",
}

// After this, you can run the first migration by specifying a destination of 1:

npm run migrate -- 1

// This will actually create two tables. The specified table ( in this case blogful_articles) and "schemaversion". The schemaversion table is used by postgrator to records which migration version the database is at, noting the last run successful "destination". The "version" column will have a value of "1". 

// After this you can run the undo migration with, but note the schmeaversion will persist with a version of 0 ** Note that you can also delete tables using DBeaver, then run this command, which will revert, then you can re-run the migration:

npm run migrate -- 0

// if you run the below, the number argument will simply be  "max".

npm run migrate

// Next, to make a second migration:

touch ./migrations/002.do.alter_article_style.sql

// Adding a column by altering the table:

CREATE TYPE article_category AS ENUM (
  'Listicle',
  'How-to',
  'News',
  'Interview',
  'Story'
);

ALTER TABLE blogful_articles
  ADD COLUMN
      style article_category;

// Also add the undo file:

touch ./migrations/002.undo.alter_article_style.sql

// Fill with SQL to undo the column creation:

ALTER TABLE blogful_articles DROP DOLUMN IF EXISTS style;

DROP TYPE IF EXISTS article_category;

// Next, make a seed directory and file to seed your data (not shown). Then run the file with psql to seed the table:

psql -U dunder_mifflin -d blogful -f ./seeds/seed.blogful_articles.sql

// From here is the perfect spot to start building API endpoints. First, install knex, as pg was already done:

npm i knex

// Create the knex instance in the src/server.js file so it's an "explicit" connection:

const knex = require("knex");
const app = require("./app");
const { PORT, DB_URL } = require("./config");

const db = knex({
  client: "pg",
  connection: DB_URL
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Note that typically there would be two sets of credentials and URLs in the .env but this is just for simplicity. 

// Then export the variable from src/config.js with a default like so:

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_URL || "postgresql://dunder_mifflin@localhost/blogful"
};

// Then, in your src/app.js file, start with the GET endpoints:

app.get("/articles", (req, res, next) => {
  res.send("All articles");
});

// The endpoints can then make use of the 'service' in this case ArticleService. Create a file in the src folder:

touch src/articles-service.js

// Reminder:

const ArticlesService = {
  getAllArticles(knex) {
    return knex.select("*").from("blogful_articles");
  },
  insertArticle(knex, newArticle) {
    return knex
      .insert(newArticle)
      .into("blogful_articles")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from("blogful_articles")
      .select("*")
      .where("id", id)
      .first();
  },
  deleteArticle(knex, id) {
    return knex("blogful_articles")
      .where({ id })
      .delete();
  },
  updateArticle(knex, id, newArticleFields) {
    return knex("blogful_articles")
      .where({ id })
      .update(newArticleFields);
  }
};
module.exports = ArticlesService;

// Then be sure to require this file in your app.js:

const ArticlesService = require('./articles-service');

// We can then use the methods from the service inside the endpoints to populate the response. Note that if any errors arise, catch is used to pass to next, which will then pass through the error handling middleware:

app.get('/articles', (req, res, next) => {
  ArticlesService.getAllArticles(/*need knex instance */)
    .then(articles => {
      res.json(articles);
    })
    .catch(next);
})

// NOW we need a knex instance, but we do not want to import this from server.js. Instead we can use an Express feature to set a property on the app instance from the server.js file. Using app.set('property-name', 'property-value'), we can create one called 'db' and set the knex instance inside as the value. Do this insdie the server.js file:

app.set('db', db);

// In so doing this, when you start the server with npm start (node ./src/server.js), the server.js file requires 'app' instance from app.js, app.js then creates the express instance and exports app. Then server.js creates the knex instance and attaches the knex instance to app as a propery called 'db'. Then server.js tells the app to start listening on the port number, and any request handling middleware can now read the 'db' propery on the app to get the knex instance. 

// To test that we have accuretly set this propery, we can read it from the app in the /articles endpoing:

app.get('/articles', (req, res, next) => {
  const knexInstance = req.app.get('db');
  ArticlesService.getAllArticles(knexInstance)
    .then(articles => {
      res.json(articles)
    })
    .catch(next);
})

// Testing the endpoint to ensure it gets all the items requested. Different from testing the Service item. Will need a testing database specifically for testing. Step by Step:

// 1. Create database for testing in terminal:

createdb -U dunder_mifflin blogful-test

// Make sure to create an enviornmental variable to store the address for the test DB in .env

TEST_DB_URL="postgresql://dunder_mifflin@localhost/blogful-test"

// Now we can use the migrations to set up this database. In the postgrator-config.js, add a ternary condition that checks the NODE_ENV and either uses DB_URL or TEST_DB_URL, so the file now looks like:

require("dotenv").config();

module.exports = {
  migrationsDirectory: "migrations",
  driver: "pg",
  connectionString:
    process.env.NODE_ENV === "test"
      ? process.env.TEST_DB_URL
      : process.env.DB_URL
};

// Then make a new migration script that sets NODE_ENV to "test" for the one time command. Add this to the package.json:

"scripts": {
  "migrate:test": "env NODE_ENV=test npm run migrate"
}

// Then you can migrate your test db using:

npm run migrate:test

// 2. Next we should ensure the db is clear before the tests. So in your ./test/setup.js file, we need to allow access to the TEST_DB_URL from within the test:

require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;

// Next we make a test file to test the endpoints:

touch ./test/articles-endpoints.spec.js

// With this inside:

const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');

describe('Articles Endpoints', function() {

})

// Next we need to create the knex instance to connect to the test db and clear the data, then disconnect from the database so the test doesn't hang. Note that in this case, we are passing a description as the first argument to the mocha hooks for labeling purposese. 

describe('Articles Endpoints', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
  });

  after('disconnect from db', () => db.destroy());

  before('clear the table', () => db('blogful_articles').truncate());
});

// 3. Inser rows into the blogful_articles table of the test db.Create test rows and then create the 'context' section where the table already contains data. **Note that in this case, as we're testing endpoints, the date is provided as a string instead of teh javaScript object. 

context('Given there are articles in the database', () => {
  const testArticles = [
          {
            id: 1,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'First test post!',
            style: 'How-to',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
         },
         {
           id: 2,
           date_published: '2100-05-22T16:28:32.615Z',
           title: 'Second test post!',
           style: 'News',
           content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
         },
         {
           id: 3,
           date_published: '1919-12-22T16:28:32.615Z',
           title: 'Third test post!',
           style: 'Listicle',
           content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
         },
         {
           id: 4,
           date_published: '1919-12-22T16:28:32.615Z',
           title: 'Fourth test post!',
           style: 'Story',
           content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?'
         },
         ];

         beforeEach('insert articles', () => {
           return db
           .into('blogful_articles')
           .insert(testArticles);
         })
})

// 4. Use Supertest to make requests to epxress instance's GET /articles handler:

it('GET /articles responds with 200 and all articles', () => {
  return supertest(app)
  .get('/articles')
  .expect(200)
})

// NOTE that at this point, since server.js file is not used, it does not use the app.set('db', knexInstance), and so we must set this up in our own tests. Add this below where db = knex({}) is defined:

describe('Articles Endpoints', function() {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

// 5. Assert that the response matches the data we inserted into the database table, using expect, which allows a second argument of what the body should match:

.expect(200, testArticles);

// This will then cause an error due to timezones. We need to tell Node that we're working with "Coordinated Universal Time" (UTC). Node has a special enviornmental variable called TZ that we can force to display UTC. Set this in your test/setup.js:

process.env.TZ = 'UTC';

// Now we want to test the endpoint /articles/:article_id. Make a request containing the ID of the one of the test articles. Then assert that the response contains the full article with a 200 status. 

it('GET /article/:article_id responds with 200 and the specified article', () => {
  const articleId = 2;
  const expectedArticle = testArticles[articleId -1];
  return supertest(app)
    .get(`/articles/${articleId}`)
    .expect(200, expectedArticle);
})

// NOTE that the above will FAIL as we need to clear the tables after each test. This will avoid "test leak" and that the table is clean after each test. 

afterEach('cleanup', () => db('blogful_articles').truncate());

context(...)

// To save room, we can move the test articles to a seperate file know as "fixtures" simliar to seeds, but for testing instead. 

touch ./test/articles.fixtures.js

// Add:

function makeArticlesArray() {
  return [
    {
      id: 1,
      date_published: '2029-01-22T16:28:32.615Z',
      title: 'First test post!',
      style: 'How-to',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    {
      id: 2,
      date_published: '2100-05-22T16:28:32.615Z',
      title: 'Second test post!',
      style: 'News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
    },
    {
      id: 3,
      date_published: '1919-12-22T16:28:32.615Z',
      title: 'Third test post!',
      style: 'Listicle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
    },
    {
      id: 4,
      date_published: '1919-12-22T16:28:32.615Z',
      title: 'Fourth test post!',
      style: 'Story',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?'
    },
  ];
}

module.exports = {
  makeArticlesArray,
}

// We can then import this file and use it to create the testArticles variable instead of it being contained in the test file itself:

const { makeArticlesArray } = require('./articles.fixtures');

context(...) {
  const testArticles = makeArticlesArray();
}

// At this point, as the testing grows, it would be better to seperate different endpoints into their own describe() methods. Ex of full and passing testswith empty and data containing DBs:

const { expect } = require("chai");
const knex = require("knex");
const app = require("../src/app");
const { makeBookmarksArray } = require("./bookmarks.fixtures");

let db;

// Create connection
before("Make knex instance", () => {
  db = knex({
    client: "pg",
    connection: process.env.TEST_DB_URL
  });
  app.set("db", db);
});

// Disconnect and clear the table for testing
after("Disconnect from db", () => db.destroy());

before("Clear the table", () => db("bookmarks").truncate());

afterEach("Cleanup", () => db("bookmarks").truncate());

describe("GET /bookmarks", () => {
  context("Given no bookmarks", () => {
    it("Responds with 200 and an empty list", () => {
      return supertest(app)
        .get("/bookmarks")
        .expect(200, []);
    });
  });

  context("Given there are bookmarks", () => {
    const testBookmarks = makeBookmarksArray();

    beforeEach("Insert bookmarks", () => {
      return db.into("bookmarks").insert(testBookmarks);
    });

    it("GET /bookmarks responds with 200 and all bookmarks", () => {
      return supertest(app)
        .get("/bookmarks")
        .expect(200, testBookmarks);
    });
  });
});

describe("GET /bookmarks/:bookmark_id", () => {
  context("Given no bookmark in db", () => {
    it("Responds with 404", () => {
      const bookmarkID = 12455;
      return supertest(app)
        .get(`/bookmarks/${bookmarkID}`)
        .expect(404, { error: { message: `Bookmark doesn't exist` } });
    });
  });

  context("Given there are bookmarks", () => {
    const testBookmarks = makeBookmarksArray();

    beforeEach("Insert bookmarks", () => {
      return db.into("bookmarks").insert(testBookmarks);
    });

    it("GET /bookmarks/:bookmark_id responds with 200 and specified bookmark", () => {
      const bookmarkID = 2;
      const expectedBookmark = testBookmarks[bookmarkID - 1];
      return supertest(app)
        .get(`/bookmarks/${bookmarkID}`)
        .expect(200, expectedBookmark);
    });
  });
});


/* POST and DELETE with PostgreSQL - 
  -Cross-site scripting (XSS) -
  -Sanitizing -
  -Express routing -
*/

// Using the approach of writing tests before creating the endpoints using the Service object, write the POST test first, starting with a new describe section. If that post request has a valid body, then the article should be inserted into the database and response should have 201 to indicate succesful creation. In this case, we use the .send() method on supertest. 

describe(`POST /articles`, () => {
  it(`creates an article, responding with 201 and the new article`, () => {
    const newArticle = {
      title: "Test new article",
      style: "Listicle",
      content: "Test new article content..."
    };
    return supertest(app)
      .post("/articles")
      .send(newArticle)
      .expect(201)
      .expect(res => {
        expect(res.body.title).to.eql(newArticle.title);
        expect(res.body.style).to.eql(newArticle.style);
        expect(res.body.content).to.eql(newArticle.content);
        expect(res.body).to.have.property("id");
      });
  });
});

// Then add the endpoint to the app.js, note the below will pass but still not actually inserting into the database table: We can still read the body with the JSON body parser and send the response with any numeric ID value:

const app = express();
const jsonParser = express.json();

app.post("/articles", jsonParser, (req, res, next) => {
  res.status(201).json({
    ...req.body,
    id: 12
  })
});

// IN the test though, another way to test if the article posted correctly would be to use the GET /articles/:article_id endpoint to see if it was posted. We can chain this request onto the original POST test request. **Note that the below will still fail though, as the article didn't persist and wasn't actually added to the db yet:

describe(`POST /articles`, () => {
  it(`creates an article, responding with 201 and the new article`, () => {
    const newArticle = {
      title: "Test new article",
      style: "Listicle",
      content: "Test new article content..."
    };
    return supertest(app)
      .post("/articles")
      .send(newArticle)
      .expect(201)
      .expect(res => {
        expect(res.body.title).to.eql(newArticle.title);
        expect(res.body.style).to.eql(newArticle.style);
        expect(res.body.content).to.eql(newArticle.content);
        expect(res.body).to.have.property("id");
        // We also expect the response to contain a location header for the new article
        expect(res.headers.location).to.eql(`/articles/${res.body.id}`);
      })
      // This will cause an error unitl the POST request side is actually fixed, err:  Error: ECONNREFUSED: Connection refused
      .then(postRes =>
        supertest(app)
          .get(`articles/${postRes.body.id}`)
          .expect(postRes.body)
      );
  });
});

// Now we can change the POST endpoint to actually post the article data. **Note that we used the .location to send as response which should match. 

app.post('/articles', jsonParser, (req, res, next) => {
  const { title, content, style }= req.body;
  const newArticle = {title, content, style };
  ArticlesService.insertArticle(
    req.app.get('db'),
    newArticle
  )
  .then(article => {
    res.status(201).location(`/articles/${article.id}`).json(article);
  })
  .catch(next);
});

// Now app.js has more endpoints, starting to get crowded. So we want to move endpoints to their own file and directroy. Create directory for endpoints:

mkdir src/articles

// Then create a file:

touch src/articles/articles-router.js

// Move articles-service.js to articles folder as well. After moving artciles-service.js to articles folder, update app.js require location. Then create the articles-router.js file and rework app.js. So articles-router.js will look like: 

const express = require("express");
const ArticlesService = require("./articles-service");

const articlesRouter = express.Router();
const jsonParser = express.json();

articlesRouter
  .route("/")
  .get((req, res, next) => {
    ArticlesService.getAllArticles(req.app.get("db"))
      .then(articles => {
        res.json(articles);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { title, content, style } = req.body;
    const newArticle = { title, content, style };
    ArticlesService.insertArticle(req.app.get("db"), newArticle)
      .then(article => {
        res
          .status(201)
          .location(`/articles/${article.id}`)
          .json(article);
      })
      .catch(next);
  });

articlesRouter.route("/articles/:article_id").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  ArticlesService.getById(knexInstance, req.params.article_id)
    .then(article => {
      if (!article) {
        return res.status(404).json({
          error: { message: `Article doesn't exist` }
        });
      }
      res.json(article);
    })
    .catch(next);
});

module.exports = articlesRouter;

// App.js can then remove the ArticlesService object as this is used in the router instead, remove jsonParser as well as all endpoints, and insert the router instead:

require("dotenv").config();
const express = require("express");
const jsonParser = express.json();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const articlesRouter = require("./articles/articles-router");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.log(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

app.get("/", (req, res) => {
  res.json("yes");
});

// Router:
app.use("/articles", articlesRouter);

module.exports = app;

/* Post Validation - The tests should test for required body req params, such as title, content and style, which are required. We can now write the tests inside the POST describe block*/

it(`responds with 400 and an error message when the title is missing`, () => {
  return supertest(app)
    .post('/articles')
    .send({
     style: 'Listicle',
     content: 'Test new article content...'
    })
    .expect(400), { error: { message: `Missing 'title' in request body` }
  })


  // Then update the code in articles-router.js to return the appropriate res code with matching message:

  .post(jsonParser, (req, res, next) => {
    const { title, content, style } = req.body
    const newArticle = { title, content, style }

   if (!title) {
     return res.status(400).json({
       error: { message: `Missing 'title' in request body` }
     })
   }

    ArticlesService.insertArticle(
      req.app.get('db'),
      newArticle
    )


// Note you could make individual code for each missing key/value pairs in the request body, or you can consolidate in this:

for (const [key, value] of Object.defineProperties(newArticle)){
  if (value == null) {
    return res.status(400).json({ error: { message: `Missing ${key} in request body`}})
  }
}

// Now we actually refactor the test into one block of code with the required fields as well in a loop:

const requiredFields = ['title', 'style', 'content']

   requiredFields.forEach(field => {
     const newArticle = {
       title: 'Test new article',
       style: 'Listicle',
       content: 'Test new article content...'
     }

     it(`responds with 400 and an error message when the '${field}' is missing`, () => {
       delete newArticle[field]

       return supertest(app)
         .post('/articles')
         .send(newArticle)
         .expect(400, {
           error: { message: `Missing '${field}' in request body` }
         })
     })
   })

// Cross-site Scripting (XSS) - A security vulnerability. To avoid this, we must "sanitize" the content in our responses. To do this, we "escape" any potential script elements or suspicious JavaScript in our response data.

// An XSS attack is an embedded piece of JavaScript inside content from an API response. 

// Sanitizing works by removing strings of content that could be used for an attack while leaving benign html elements like <strong> and <h1>. 


// Install sanitizing tool which provides a function that santizies strings of content. 

npm i xss

// Require this in the articles-router.js file and then use the xss() method around the content that requires sanitization: See blogful-api project for examples of articles-router.js, articles-endpoints.spec.js for tests and articles.fixtures.js for the maliciousArticle example function.

/* DELETE endpoint. First create the describe block to handle this endpoint. */

describe.only(`DELETE /articles/:article_id`, () => {
  context('Given there are articles in the database', () => {
    const testArticles = makeArticlesArray();

    beforeEach('insert articles', () => {
      return db.into('bookmarks').insert(testArticles);
    });

    it('responds with 204 and removes the article', () => {
      const idToremove = 2;
      const expectedArticles = testArticles.filter(article => article.id !== idToRemove);
      return supertest(app)
        .delete(`/articles/${idToRemove}`)
        .expect(204)
        .then(res => supertest(app)
        .get(`/articles`).expect(expectedArticles))
    })

  })
})

/* RESTful APIs - 
  -RESTful - "REpresentational State Transfer" and is a software architectural style. REST is a set of constraints for building web APIs. 
  -Representations - 
  -State transfer - 
  -Resources - 
  -Verbs - 
  -CRUD    - 
  
RESTful design is concerned with these questions:
  -What are the addresses for endpoints? -
  -Which methods do endpoints support? -
  -What do query strings do? -
  -What should be in the body and what is in the response? -
  -How can we ensure the performance of the server? -
  -How can we manage the complexity of the server architecture? -

Goals of REST:
  -Make the API design simple and predictable
  -Make the API design consistent
  -Give clear direction for API developers and consumers
  -To "use HTTP how it was originally intended"
  -Clear patterns in endpoint naming conventions and HTTP method usage
  -Clear patterns in what is contained in responses
  -Allow flexibility in different implementations, for example, the exact wording of endpoints and how to  identify entities
  -Build APIs that are efficient and performant
  -Ensure APIs are scalable to support a large number of "components" and interactions. Where components can be systems such as proxies, gateways, firewalls, load balancers, clients, servers, databases, etc...

Constraints of RESTful architecture:
  1. Client–server architecture
    a. A clear separation of concerns (SOC). The client is concerned with the user interface and the server concerned with data storage.
  2. Statelessness
    a. No client information gets stored on the server between requests. Each request contains all the information required for that request.
    b. In other words, the server has no session.
  3. Cacheability
    a. Where possible, responses should be predictable. Given a certain request, no matter how many times you perform the request, the response is the same. This allows clients or layers to save the response and skip processing.
  4. Layered system
    a. The client shouldn't be able to tell whether it's connected to the "end" server or an intermediary! More components can be added as intermediaries (layers) between the client and the end server.
  5. Uniform interface
    a. Uniform interface is fundamental to RESTful design!
    b. This makes the overall system more simple with visibility of potential interactions.
    c. Individual resources are consistently identified in requests, for example, in the URL.
    d. Clients can use a representation of a resource (e.g. JSON) to manipulate the state of the system.
  6. Code on demand (optional)
    a. We won't cover this as it isn't appropriate. (I guess? )


    The parts of REST are as follows:
REpresentational - representing one or more resources
State - the current condition of a resource
Transfer - messages between server(s) and client(s), e.g. HTTP

Resrouces - The items/data stored. Things that can be requested and sent. Descirbed by "nouns". Rules for resource naming:
  -Use / to indicate the hierarchical relationships between resources.
  -Use hyphens-separated-names to improve readability rather than camelCaseNames.
  -Don't use underscores, _, because certain fonts can obscure or completely hide them. For example, if a link is underlined in an editor, the underscore is obscured from view.
  -Use lowercase letters for the whole name, mixing cases can increase confusion.
  -Never use verbs in URIs. The verbs are part of the HTTP methods, not the resource name.
  -Use ?query=strings to filter collections, paginate, etc... Don't add fine-grained control functionality into  -endpoint names.

CRUD Operations - Known as "verbsa" and are the operations for web APIs:
  -GET should only ever get (never create, delete or update)
  -POST should only ever create
  -PATCH should only ever update a resource
  -PUT should only ever replace a resource
  -DELETE should only ever remove
  */

  // Most server endpoints have /api/ before them. Refactor all requests and server-side endpoints to include /api before the rest. This does create a problem with post, so we must use Express's method .join in a node module called path. In router:

  const path = require('path');

  .then(article => {
    .status(201)
    .location(path.posix.join(req.originalUrl, `/${article.id}`))
    .json(serializedArticle(article))

  })


  // PATCH requests 

  /* HTTP supports two methods for updating, "PATCH" and "PUT". 
    -PATCH updates part of a resource, where the request body contains the fields that are to be updated, but the rest of the resource is the same.
    -PUT is for replacing the entire resource. Therefore the whole new version of the resource should be contained in the request body.   
  */

// First, start with creating the test for the PATCH method:

describe.only(`PATCH /api/articles/:article_id`, () => {
  context(`Given there are no articles`, () => {
    it(`Responds with 404`, () => {
      const articleID = 123455;
      return supertest(app)
        .patch(`/api/articles/${articleId}`)
        .expect(404, { error: { message: `Article doesn't exist` } } )
    })
  })
})
  


/* Relationships and Schema design - 
  -relationship -Some tables may reference primary keys of other tables to indicate a relationship.
  -one-to-many - When many items in one table reference one item in another table. Known as the "multiplicity" of the relationship. 
  -normalization - A design process where one table is "decomposed" into two or more relatable tables. 
  -ERD - Entity Relatinoship Diagram - visualizes the tables and relationships between tables in a database. 
  -many to many -
  -join - Used to query data from multiple tables. Tables related by a foreign key can be joined. 
  -Entities - real world objects that we store data about.
  -Third Normal Form - Where all columns in a table are dependent on the primary key. 
*/

// When create tables with relationships, you'll need to create a foreign key. Below is an exmample of a supplier table creation: 

DROP TABLE IF EXISTS supplier;

CREATE TABLE supplier (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    supplier_name TEXT NOT NULL,
    phone TEXT,
    city TEXT
);
// Basic syntax for creating a FOREIGN key to reference another table is:

// <column name> <data type> REFERENCES <foreign table name>(<foreign column>)


// Then below is the creation of a table with a foreign key that references the primary key of the above supplier table:

DROP TABLE IF EXISTS DataTransferItem;

CREATE TABLE item (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS CustomElementRegistry,
  item_name TEXT NOT NULL,
  unit TEXT,
  unit_cost numeric,
  supplier INTEGER REFERENCES supplier(id) NOT NULL
)

// Note that for the last table, ORDER is actually an SQL keyword, so don't name the table order, but rather supplier_order: 

DROP TABLE IF EXISTS supplier_order;

CREATE TABLE supplier_order(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  order_date DATE DEFAULT now(),
  item INTEGER REFERENCES item(id) NOT NULL,
  amount numeric,
  total_cost numeric,
  shipping_status TEXT
)


// From here we would create the database called products in the terminal:

createdb -U dunder_mifflin products

// Log into psql into the products db

psql products dunder_mifflin

// then create the tables with the sql file:

\i ~/path/to/file/supplier.sql

// Because of the foreign refrence keys, if an item is deleted with an order referencing that item, you will be stopped. You can change the table though to "cascade", meaning that if an item is deleted, all orders referencing that foreign key in the supplier_orders table will also be deleted. You can change the REFERENCES key like so:

CREATE TABLE supplier_order (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  order_date DATE DEFAULT now(),
-   item INTEGER REFERENCES item(id) NOT NULL,
+   item INTEGER REFERENCES item(id) ON DELETE CASCADE NOT NULL,
  amount numeric,
  total_cost numeric,
  shipping_status TEXT
);

// After the change, you can re-run the script to rebuild the database. 

// Next we want to create some seed data, and this seed file will clear all tables (tuncate) before inserting the seed data ( where -- is a comment)

TRUNCATE  supplier, item, supplier_order RESTART IDENTITY CASCADE;

-- insert some suppliers
INSERT INTO supplier
  (supplier_name, phone, city)
  VALUES
    ('Arnold Grummers Papermaking', '920-840-6056', 'Appleton'),
    ('Blumfeld Paper', '555-6789', 'Moscow');

-- insert some items
INSERT INTO item
  (item_name, unit, unit_cost, supplier)
  VALUES
    ('Paper Additives', 'LBS', '3.85', 1),
    ('Abaca Sheet Pulp', 'LBS', '11.20', 1),
    ('Wood pulp', 'LBS', '0.20', 2),
    ('White Envelope Paper', 'LBS', '0.52', 1);

-- insert some orders
INSERT INTO supplier_order
  (item, amount, total_cost, shipping_status)
  VALUES
    (1, 10, 38.5, 'Delivered'),
    (2, 2000, 1240, 'Shipped'),
    (3, 50, 560, 'Shipped'),
    (2, 1000, 620, 'Preparing');


// You can now delete an item in the item table, even though there was a reference in the supplier_order table, but due to the cascade setting, that too will be deleted. 

// As an alternative, you can change the table so that if a referenced item is deleted, it can be set to null:

CREATE TABLE item (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  item_name TEXT NOT NULL,
  unit TEXT,
  unit_cost numeric,
-   supplier INTEGER REFERENCES supplier(id) NOT NULL
+   supplier INTEGER REFERENCES supplier(id) ON DELETE SET NULL
);

// Join - Basic syntax: 

SELECT <columns> FROM <table1> JOIN <table2> ON <related columns>;

// Real ex: 
SELECT * FROM department JOIN employee ON department.manager = employee.id;

// This will specify that we want all rows of data where the manager id in the department table is the same as the employee id in the employee table. It is recommended that you explicitly list the column names in a SELECT statement to reduce the number of columsn that are processed. Also, list all table names with column names like below:

SELECT
  department.id,
  department.dept_name,
  employee.emp_name,
  employee.phone,
  employee.title,
  employee.salary
FROM department JOIN employee ON department.manager = employee.id;

// You can reduce keystrokes by specifying aliases in the FROM call like so: 

SELECT
  d.id,
  d.dept_name,
  e.emp_name,
  e.phone,
  e.title,
  e.salary
FROM
  department d
  JOIN
  employee e
  ON d.manager = e.id;

  // You can further alias columsn as well: 
  SELECT
  d.id as department_id,
  d.dept_name as department,
  e.emp_name as Full_Name,
  e.phone,
  e.title,
  e.salary
FROM
  department d
  JOIN
  employee e
  ON d.manager = e.id;

// Inner Join - returns all rows where the two columsn in the join condition match. Inner join is the default.Ex:

SELECT
  d.id,
  d.dept_name as department,
  e.emp_name as Manager_Name
FROM
  department d
  INNER JOIN
  employee e
  ON
    d.manager = e.id;

// To restrict the number of rows that are returned, use the WHERE clause:

SELECT
  e.emp_name as Full_Name,
  e.salary as Salary,
  d.dept_name as Department
FROM
  employee e
  INNER JOIN
  department d
  ON e.department = d.id
WHERE
  d.dept_name = 'Sales';

// When you must join three tables, because two tables are related by a third table, :

SELECT
  e.emp_name as Full_Name,
  p.project_name as project
FROM
  employee e
  JOIN
  employee_project ep
  ON e.id = ep.emp_id
  JOIN
  project p
  ON ep.project_id = p.id;

// Left Join - brings back all rows on the LEFT side of a JOIN even if it does not match any rows on the right. If not matches are round the right side coulmns are null. Ex:

SELECT
  d.id,
  d.dept_name as department,
  e.emp_name as Manager_Name
FROM
  department d
  LEFT JOIN
  employee e
  ON
    d.manager = e.id;

// Right Join - bring back all rows on the right of a JOIN whether it matches a row on the left or not. Where the left column does not match, the columns are left null. Ex:

SELECT
  e.emp_name as Manager_Name,
  d.dept_name as department
FROM
  department d
  RIGHT JOIN
  employee e
  ON
    d.manager = e.id;

// Other join sources: https://www.postgresql.org/docs/11/sql-select.html


// Updating knex to use multiple tables in a database. First, create a new directory in your project to manage the table:

mkdir src/users

// Then create a service file in that folder:

touch src/users/users-service.js

// Update that file with services:

const UsersService = {
  getAllUsers(knex) {
    return knex.select("*").from("blogful_users");
  },
  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into("blogful_users")
      .returning("*")
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from("blogful_users")
      .select("*")
      .where("id", id)
      .first();
  },
  deleteUser(knex, id) {
    return knex("blogful_users")
      .where({ id })
      .delete();
  },
  updateUser(knex, id, newUserFields) {
    return knex("blogful_users")
      .where({ id })
      .update(newUserFields);
  }
};

module.exports = UsersService;


// Then create a new router file:

touch src/users/users-router.js

// Populate with:

const path = require('path')
const express = require('express')
const xss = require('xss')
const UsersService = require('./users-service')

const usersRouter = express.Router()
const jsonParser = express.json()

const serializeUser = user => ({
  id: user.id,
  fullname: xss(user.fullname),
  username: xss(user.username),
  nickname: xss(user.nickname),
  date_created: user.date_created,
})

usersRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    UsersService.getAllUsers(knexInstance)
      .then(users => {
        res.json(users.map(serializeUser))
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const { fullname, username, nickname, password } = req.body
    const newUser = { fullname, username }

    for (const [key, value] of Object.entries(newUser)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        })
      }
    }

    newUser.nickname = nickname;
    newUser.password = password;

    UsersService.insertUser(
      req.app.get('db'),
      newUser
    )
      .then(user => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${user.id}`))
          .json(serializeUser(user))
      })
      .catch(next)
  })

usersRouter
  .route('/:user_id')
  .all((req, res, next) => {
    UsersService.getById(
      req.app.get('db'),
      req.params.user_id
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({
            error: { message: `User doesn't exist` }
          })
        }
        res.user = user
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeUser(res.user))
  })
  .delete((req, res, next) => {
    UsersService.deleteUser(
      req.app.get('db'),
      req.params.user_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const { fullname, username, password, nickname } = req.body
    const userToUpdate = { fullname, username, password, nickname }

    const numberOfValues = Object.values(userToUpdate).filter(Boolean).length
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: `Request body must contain either 'fullname', 'username', 'password' or 'nickname'`
        }
      })

    UsersService.updateUser(
      req.app.get('db'),
      req.params.user_id,
      userToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })

module.exports = usersRouter

// Then you need to update app.js to add the new router. First declare the const and then invoke the .use() method:

const usersRouter = require('./users/users-router');

app.use('/api/users', usersRouter);

// Next we will create a table referencing two other tables, IDs must match to retain referential integrity. First, start with another new folder 

mkdir src/comments

// Make the new services file

touch src/comments/comments-service.js

// Then populate the file:

const CommentsService = {
  getAllComments(knex) {
    return knex.select('*').from('blogful_comments')
  },

  insertComment(knex, newComment) {
    return knex
      .insert(newComment)
      .into('blogful_comments')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('blogful_comments')
      .select('*')
      .where('id', id)
      .first()
  },

  deleteComment(knex, id) {
    return knex('blogful_comments')
      .where({ id })
      .delete()
  },

  updateComment(knex, id, newCommentFields) {
    return knex('blogful_comments')
      .where({ id })
      .update(newCommentFields)
  },
}

module.exports = CommentsService

// Then create the routing service for this:

touch src/comments/comments-router.js

// Then populate:

const path = require('path')
const express = require('express')
const xss = require('xss')
const CommentsService = require('./comments-service')

const commentsRouter = express.Router()
const jsonParser = express.json()

const serializeComment = comment => ({
  id: comment.id,
  text: xss(comment.text),
  date_commented: comment.date_commented,
  article_id: comment.article_id,
  user_id: comment.user_id
})

commentsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    CommentsService.getAllComments(knexInstance)
      .then(comments => {
        res.json(comments.map(serializeComment))
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const { text, article_id, user_id, date_commented } = req.body
    const newComment = { text, article_id, user_id }

    for (const [key, value] of Object.entries(newComment))
      if (value == null)
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        })

    newComment.date_commented = date_commented;

    CommentsService.insertComment(
      req.app.get('db'),
      newComment
    )
      .then(comment => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${comment.id}`))
          .json(serializeComment(comment))
      })
      .catch(next)
  })

commentsRouter
  .route('/:comment_id')
  .all((req, res, next) => {
    CommentsService.getById(
      req.app.get('db'),
      req.params.comment_id
    )
      .then(comment => {
        if (!comment) {
          return res.status(404).json({
            error: { message: `Comment doesn't exist` }
          })
        }
        res.comment = comment
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeComment(res.comment))
  })
  .delete((req, res, next) => {
    CommentsService.deleteComment(
      req.app.get('db'),
      req.params.comment_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const { text, date_commented } = req.body
    const commentToUpdate = { text, date_commented }

    const numberOfValues = Object.values(commentToUpdate).filter(Boolean).length
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: `Request body must contain either 'text' or 'date_commented'`
        }
      })

    CommentsService.updateComment(
      req.app.get('db'),
      req.params.comment_id,
      commentToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })

module.exports = commentsRouter


// Then we must update app.js with this new router info:

const commentsRouter = require("./comments/comments-router");

app.use("/api/comments", commentsRouter);


// At this point, you should be able to test with Postman that all endpoints are working, that posting, deleting and patching all work. 

// Since we added a new 'authors' column to articlers with currently nulable values, we need to update the code to include an author when a new article is created. So update articles-router.js first and update the serializedArticle:

const serializeArticle = article => ({
  id: article.id,
  style: article.style,
  title: xss(article.title),
  content: xss(article.content),
  date_published: article.date_published,
+   author: article.author,
})

// Also update the post method to get the author value from request body:

.post(jsonParser, (req, res, next) => {
  -     const { title, content, style } = req.body
  +     const { title, content, style, author } = req.body
        const newArticle = { title, content, style }

// Since this isn't a required value, we can skip validating it, but add the author value to the object after:

for (const [key, value] of Object.entries(newArticle))
if (value == null)
  return res.status(400).json({
    error: { message: `Missing '${key}' in request body` }
  })
+   newArticle.author = author
ArticlesService.insertArticle(
req.app.get('db'),
newArticle
)

// At this point, all endpoints are working, but now tests need to be updated. Remember that to update your test database run:

npm run migrate:test

// First thing is we'll need test data for users. Create a file for user seed test data:

touch test/users.fixtures.js

// Then create a function that return an array of valid user data:

function makeUsersArray() {
  return [
    {
      id: 1,
      date_created: '2029-01-22T16:28:32.615Z',
      fullname: 'Sam Gamgee',
      username: 'sam.gamgee@shire.com',
      password: 'secret',
      nickname: 'Sam'
    },
    {
      id: 2,
      date_created: '2100-05-22T16:28:32.615Z',
      fullname: 'Peregrin Took',
      username: 'peregrin.took@shire.com',
      password: 'secret',
      nickname: 'Pippin'
    }
  ]
}

module.exports = {
  makeUsersArray
}

// Next, be sure to update the articles.fixtures.js file to include the newly added field of author:

{
  id: 1,
  date_published: '2029-01-22T16:28:32.615Z',
  title: 'First test post!',
  style: 'How-to',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
+     author: 1
},

// At this point, the tests are now failing due to foreign key restraints, as the users are now being referenced as authors, but they are never loaded into the tables yet. So we must update the articles-endpoints.spec.js file to include this:

const { makeUsersArray } = require('./users.fixtures');

// Note that the SQL to truncate multiple tables at the same time is:

TRUNCATE blogful_articles, blogful_users, blogful_comments RESTART IDENTITY CASCADE;

// Remember that to execute arbitrary SQL statements with knex, we use the raw() method. We can no update the before and afterEach statements like so:

before('clean the table', () => db.raw('TRUNCATE blogful_articles, blogful_users, blogful_comments RESTART IDENTITY CASCADE'))

afterEach('cleanup',() => db.raw('TRUNCATE blogful_articles, blogful_users, blogful_comments RESTART IDENTITY CASCADE'))

// Now, anywhere where articles are inserted, we must also insert the user data as well, note that users must be inserted first, as articles depends on user information.

context('Given there are articles in the database', () => {
  const testUsers = makeUsersArray();
  const testArticles = makeArticlesArray();

  beforeEach('insert articles', () => {
    return db
      .into('blogful_users')
      .insert(testUsers)
      .then(() => {
        return db
          .into('blogful_articles')
          .insert(testArticles)
      })
  })

  /* **** Instead of using JS5 where module.export = { someFunc };, you can use this to export: */

  export function foo() {
    return 'bar';
  }



  // and this to import:

  import { foo } from 'foobar';





  

/* Deploying a Database - This ex will use Heroku.  */

// List of Postgres hosting providers: https://www.postgresql.org/support/professional_hosting/northamerica/

// Run this comman to get started with Heroku: 
heroku create

// When a Postgres database is provisioned by Heroku, it automatically sets an env variable name DATABASE_URL that your app uses to connect to th e db. We need to update DB_URL. 

// In config.js, update the file:

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
-   DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin@localhost/blogful',
+   DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/blogful',
-   TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://dunder_mifflin@localhost/blogful-test'
+   TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://dunder_mifflin@localhost/blogful-test'
}

// Then we need to update other files that make use of this. Like the postgrator.config .js, change the conditional to :

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
-     ? process.env.TEST_DB_URL
-     : process.env.DB_URL,
+     ? process.env.TEST_DATABASE_URL
+     : process.env.DATABASE_URL,
}

// Server.js:

- const { PORT, DB_URL } = require('./config')
+ const { PORT, DATABASE_URL } = require('./config')

  const db = knex({
    client: 'pg',
-   connection: DB_URL,
+   connection: DATABASE_URL,
  })

// .env file:

-  DB_URL="postgresql://dunder_mifflin@localhost/blogful"
+  DATABASE_URL="postgresql://dunder_mifflin@localhost/blogful"
-  TEST_DB_URL="postgresql://dunder_mifflin@localhost/blogful-test"
+  TEST_DATABASE_URL="postgresql://dunder_mifflin@localhost/blogful-test"

// After this, you can deploy with the command:

git push heroku master

// You can then provision Postgres with this command, where hobby-dev is the free tier

heroku addons:create heroku-postgresql:hobby-dev

// The database will start empty, so we need to create tables before it can be used. To see the addons in the project run the command:

heroku addons

// To see the env variable that was created with the database connection URL use:

heroku config

// To see all the details of the database connection:

heroku pg:credentials:url

// Connecting with a Client - First, take note of the Connection URL, connect with this command:

psql <connection url> 

// You are then connected to the database and can explore. You can see a list of ALL roles with:

\du

// You can view list of ALL databases with:
 
\l

// From the terminal you can also connect to the database with:

heroku pg:psql

// Alternitevely you can connect to to the database with DBeaver. Use:

heroku pg:credentials:url

// Then in DBeaver, select "New Database Connection", select PostgreSQL, then hit next. 

// Production Migration - to use postgrator, we first need to read the production DATABASE_URL, we can use the heroku config:get DATABASE_URL. Use the command within the script and pass the value into npm run migrate and then use the env command to set the value. We also need to set a value for SSL

"scripts": {
  "test": "mocha --require test/setup.js",
  "dev": "nodemon src/server.js",
  "migrate": "postgrator --config postgrator-config.js",
  "migrate:test": "env NODE_ENV=test npm run migrate",
+   "migrate:production": "env SSL=true DATABASE_URL=$(heroku config:get DATABASE_URL) npm run migrate",
  "start": "node src/server.js",

// THen update postgrator.config.js to respect this setting from the env variable:

  require('dotenv').config();

  module.exports = {
    "migrationDirectory": "migrations",
    "driver": "pg",
    "connectionString": (process.env.NODE_ENV === 'test')
      ? process.env.TEST_DATABASE_URL
      : process.env.DATABASE_URL,
+   "ssl": !!process.env.SSL,
  }
  
// We can also check if migration are necessary at each deployment by modifying the predeploy script and add the migration as a step:

"predeploy": "npm audit && npm run migrate:production"

// Then we can run: 

npm run deploy

/* FULL STACK DEPLOYMENT example - Bookmarks app - */

// Starting with Server - Bookmarks Server 
// 1. Create a Heroku App, in the project, run:

heroku create

// 2. Provision Database - run:

heroku addons:create heroku-postgresql:hobby-dev

// 3. Obtain database credentials for use in the migration step - run: 

heroku pg:credentials:url

/* Results for bookmarks-server:

Connection information for default credential.
Connection info string:
   "dbname=dcai92ts2odbaq host=ec2-107-20-168-237.compute-1.amazonaws.com port=5432 user=firzjyssznnnmd password=d2fa492df07c0cff9eab5dbda0a40a796dd207a466ecb8f4469f2caaf94b9eb5 sslmode=require"
Connection URL:
   postgres://firzjyssznnnmd:d2fa492df07c0cff9eab5dbda0a40a796dd207a466ecb8f4469f2caaf94b9eb5@ec2-107-20-168-237.compute-1.amazonaws.com:5432/dcai92ts2odbaq

   */

// 3. Migration variables, update according to steps above.

// 4. npm scripts, update according to steps above.

// 5. Deploy - commit changes and then run:
npm run deploy

/* REACT Bookmarks Client - Note that the server URL is stored in config.js. Update this file with the URL of the server that was deployed above: */

// I THINK bookmarks is : https://stormy-badlands-90713.herokuapp.com/

export default {
  API_ENDPOINT: `https://desolate-meadow-95722.herokuapp.com/`,
  API_KEY: process.env.REACT_APP_API_KEY,
}

// Then review the file in public/now.json and settings should be: 

{
  "version": 2,
  "alias": "my-bookmarks-app",
  "name": "bookmarks-app",
  "routes": [
    {
      "src": "^/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": ".*",
      "dest": "/index.html"
    }
  ]
}

// Also ensure that package.json is set up for deployment: 
"scripts": {
  "start": "react-scripts start",
  "prebuild": "CI=true react-scripts test --colors",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "now ./build",
  "postdeploy": "now alias -A ./build/now.json"
},


// ****** Noteful: https://thawing-scrubland-88648.herokuapp.com/

// ****** Noteful database crednetials:

Connection information for default credential.
Connection info string:
   "dbname=d3i5m6o4u1uejo host=ec2-54-235-100-99.compute-1.amazonaws.com port=5432 user=chnwufauwnwfcu password=7fa07c0be665821731faade6297e81e44a405ac3f87a14a980b13da41ce8c3c6 sslmode=require"
Connection URL:
   postgres://chnwufauwnwfcu:7fa07c0be665821731faade6297e81e44a405ac3f87a14a980b13da41ce8c3c6@ec2-54-235-100-99.compute-1.amazonaws.com:5432/d3i5m6o4u1uejo




// Using JSonwebtokens and bcrypt - install with: 

npm install jsonwebtoken

npm i bcryptjs



// Passport js - authentication middleware for Node.js. States it has a comprehensive set of strategies that support authentication using a username and password, Facebook, Twitter, ect. These notes are using Passport's 'local' strategy to use username and password. Install:

npm install passport-local

// The below will authenticate a user with username and password. This requires a callback which accepts credentials and calls 'done' providing a user:

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// No further relevant passport notes to my current project, nothing matches syntax, ending passport.js notes here....


// Jest testing: 
