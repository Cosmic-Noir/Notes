/* -React - React is a library that focuses on reusable components and good experience for developers. A Library that gives us two global variables, the ReactDOM and React. 
    -Render -
    -Component - "branches of the trees". 
    -Babel - A tool for enabling advanced JavaScript syntax when developing. It reads JavaScript and converts it into React.createElement() behind the scenes.
    -JSX - Convenient syntax for React, allows the rendering of many HTML elements combined together. 
    -Prop
    -Children

Inline must link React library to your html: */
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script>
      // Our code will go here
    </script>

// Setting up a clean React project: Make your directory, cd to your directory where projects are located. Then run:
npx create-react-app project-name

// then you can cd to that project directory, and then install all dependencies with :
npm install


// Accepts two arguments
    ReactDOM.render(element, container); 

// container: the DOM element we insert our app into. 
// element: Our react application, which will beomce the contents of the container.

// Set variable equal to the container you want to populate and then use the ReactDOM.render method with the element you want to insert.
// Below we use the .querySelector() method to select DOM nodes and manipulate them with JavaScript, using CSS selector as the argument
// **Note that you cannot use actual HTML like <h1></h1> as an argument for .render
    const appRoot = document.querySelector('#application-root');
    ReactDOM.render('Hello, world!', appRoot);

// To insert html, we use the .createElement on the React object instead, which takes 3 arguments: a type, props, and children. 
    const helloWorldH1 = React.createElement('h1', null, 'Hello World!');

// Babel - Must link Babel above your other scripts. Using Babel we can refactor the "React.createElement" into a variable like below:*/
     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
     const helloWorldH1 = <h1>Hello, world!</h1>;

// Adding 'Props' with JSX - Use curly braces and backticks OR if you set attributes with variables, no backticks, but still curly braces: (note that the parantheses are optional for clarity). note also that props are not attributes, but close. 

    const anchor = (
        <a href={`https://thinkful.com`} target={`_blank`}>
        Thinkful
        </a>
    );

    const thinkfulAddress = `https://thinkful.com`;
    const target = '_blank';
    const content = 'Thinkful'

    const anchor = (
    <a href={thinkfulAddress} target={target}>
        {content}
    </a>
    );

// ** Note that for adding classes to rendered elements, we use the className prop, which renders as "class" on the DOM, while "id" is the same:

function App() {
    return (
      <span id='app-id' className='app-class'>
        My App
      </span>
    );
  }


  // NPM - 
    /* 
    -Node - 
    -nvm - "Node Version Manager" - 
    -npx - This tool allows you to execute an npm package without actually installing it on your computer. 
    -npm - "Node Package Manager" - crated to help install and manage packages as you build new applications. 
    -packages - Basically small packages of code for libraries? 
    -Dependency - When you use a package as a building block in an app, that package is a "dependency" for your app. You app depends on that package.
    -CLI - "Command Line Interface" - 
    -Create React App - An app developed by Facebook to quickly bootstrap a new React application comlete with all the configurations that you need. 
    */

    /* Reach Playground 
        -Imports - 
        -Exports - 
        -Playground -
        -Boilerplate -
    */


    // Relative Export/Import - must be specified both import and export at files to have cross access.

    // "import *** from *** - import creates a variable, below named React from a location within the node_modules of 'react' Ex:"

    import React from 'react';
    import ReactDOM from 'react-dom';

    // "export default *** - Way to get components from App.js to index.js (for example)"


    export default App;



// JSX - Note that EVERY element needs to either have a closing part or be self-closing. Also, Custom Component name should be UPPER case, like MyComponent vs myComponent, not camelCase Ex:
<br />
// or 
<App />

// props - use curly braces unelss the value is a string: 

<Component stringProp="string" />

<Component numProp={123} />;

<Component booleanProp={true} />;

// Embedding Expressions - Expressions can be variables, values, returns from functions, anything that is a value, and they must be contained in curly braces. Ex using string:

<p>Hello, {'Beyonce'}</p>;

// using variable:

const name = 'Beyone';

<p>Hello, {name}</p>

// using function: 

const name = 'beyonce';

<p>Hello, {capitilize(name)}</p>;

// Using other JSX:

const jsxName = <span>Beyonce</span>;
<p>Hello, {jxsName}</p>;

// Using if statement: 

let myJsx;

if (something) {
  myJsx = <p>Hello, Beyoncé</p>;
}

<div>{myJsx}</div>;

/* Component Composition - 
  -React Developer Tools - 
  -Props - 
  -Composition -
  -Imports - 
  -Function Components - 
*/
  
// Testing 
// Unit testing - how each individual component behaves 
// Integration testing - how each component behaves when working with other components.

// Jest - a JavaScript testing platform built by Facebook. 
// Test Coverage - The degree to which your code is protected by tests. 

// To run the tests:
npm test

// it function - takes two parameters, a string describing the test and the test function itself, and a test function. The below calls an anonymous function. The testing function needs an input and expected output, then compares the two. If they match, the test passes, otherwise it fails. 

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  expect(leapYear(input)).toBe(expectedOutput);
});

// Smoke screen test - ensures the component renders in the first place.
  import React from 'react';
  import ReactDOM from 'react-dom';
  //make the App component available
  import App from './App';

  //this is the test case
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<App />, div);

    //clean up code - if component unmounts succesfully, returns true, otherwise does nothing.
    ReactDOM.unmountComponentAtNode(div);
  });


  // ** Ensuring that the component renders with the props provided must provide default props 


// Snapshot testing - compares the UI to a saved version of the UI and informs you if the UI changes at all. For if you did not intend for the UI to change at all could indicate something is wrong.
// To install react-test-renderer, use this in command line:
  npm install react-test-renderer -D // -D tells npm to add this as a developmental dependency. Not bundled with production code later.

  // First you have to import the new tester to the test file like so:
  import renderer from 'react-test-renderer';

  // Then add test case that renders the component to create a readable JSON file and compare the rendered component to a saved version of the component.

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

// Note that this test may fail if you update the component renders or you unintentionally update it.
// Which is why you can update the snapshot to reflect your intentional changes. 
// To update, after the test fails, simply push "u" to update

// What if the DOM might render differently based on info passed to the component? It must have it's own test. For example, this test both the case where messages = 10 AND messages = 0: 

import React from "react";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";

// Smoke screen test
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Messages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Snap shot tests:
it("renders the UI as expected", () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={4} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the UI as expected with no unreads", () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


// With many many tests, you should organize tests into "test suites". Each test suite should focus on a single component or functional area. Use describe() function to wrap the test cases. This takes two parameters, a name and a function. Name is a description, use anonaymous function and then insert all test cases like so: 

describe('My component', () => {
  //all my test cases here
});

// Ex: 

import React from "react";
import ReactDOM from "react-dom";
import Messages from "./Messages";
import renderer from "react-test-renderer";

describe("Messages component", () => {
  // Smoke screen test
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snap shot tests:
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the UI as expected with no unreads", () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={0} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


/* Setting, Reading, and Updating State - 
  -Component State - Current condition something is in. Can be used to change the current condition of a particluar component.
  -The Component life-cycle - 
  -Event Handlers - 
*/

// In this example we've created a class with a constructor method that must use super and pass props to allow us access to all functionality extended from the React.Compoonent class provided by React. With this, we can set this.state equal to an object that contains the various states of the component.

import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "foo",
      hello: "Hello, world!",
      list: [1, 2, 3],
      obj: { nested: "object", yes: true }
    }
  }
  render() {
    return <div />;
  }
}

export default TheDate;

// You can then access those states for content like changing render to this (Note you CAN change state in the React console):

render() {
  return <div>{this.state.hello}</div>;
}

// Here's how to display the current date and time in a component - Note you have to use .toLocaleString() the datetime to display:

import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: new Date()
    };
  }
  render() {
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;


// To skip a test, change 'it' to 'it.skip' :
it.skip("renders the UI as expected", () => {
  expect(
    renderer
      .create(<TheDate />)
      .toJSON()
      .toMatchSnapshot()
  );
});

/* The Component Life-Cycle - 
  1. constructor - enter the restaurant and ask for the buffet. happens once per component instance (every time you use the component in  SX). The component was created (think <Component />).
  2. render - collect food from the buffet. Can happen multiple time, like if the props change, the render will happen every time they change. Component reacting to being created OR updated - happens at least once, if props change, re-renders, or if component state changes, re-render. 
  3. The DOM is updated - Eat the food. 
    a. This isn't a life-cycle method, it is part of the life-cycle.
    The component is added or changed in the DOM.
      1. if render function returns something it will be mounted or
      2. if the result of render function is different to what's on the page, it will be updated. 
  4. componentDidMount - Ask for condiments, tap water, more cutlery. Could happen multiple times (conditional rendering, where props change the compoenent from rendered to not rendered). Directly after the component is mounted.
  5. componentWillUnmount - Pay the bill and leave. leans up interval when component is removed from the DOM. Component is about to be removed from the DOM. 
    1. When the parent component's render doesn't render this component any longer, the component will be removed. 

    Image: https://tf-curricula-prod.s3.amazonaws.com/curricula/470516c8-d2be-4d1d-be0c-03c9d8da4483/react-v1/assets2/react_state_1_introduction/component-lifecycle-simplified.jpeg
*/

/* Updating state - You can use setInterval method with the first argument the callback function, and the second argument being milliseconds to delay. Updating state should be placed  Ex: */

const milliseconds = 1000;
setInterval(function callback() {
  // update the state.date in here
}, milliseconds
);


// In a component, you place like the constructor method above render:

componentDidMount() {
  setInterval(() => {
    console.log("tick");
  }, 1000);
}

// componentWillUnmount. In the below example, set a interval state. Ex:

componentWillUnmount() {
  // cleans up interval when component is removed from the DOM
  clearInterval(this.interval);
}

// setState() - To change the state you must notify react by using the setState method - this method accepts an object with the key/value pair you want to update, in this example, calls a new date every 1000 milliseconds - Note that using setState() re-renders the component every time called : 

componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({ datetime: new Date() });
  }, 1000);
}

// Consider logging these events to the console to see each stage of the component life-cycle. Note that 'render' is the only required method for a component, but that the other methods allow control of the behavior of the component during it's life cycle. 

/* Event Listeners: A Counter Component. - Common to update states in response to user action like submiting a form or clicking button. 

onClick - event Handler prop for when elements are clicked:*/

render() {
  return (
    <div>
      <p>The current count: {this.state.count}</p>
      <button
        onClick={function() { console.log('clicked!') }}
      >
        Add 1
      </button>
    </div>
  )
}

// onSubmit - when form submitted

// onHover - element hovered over

// onBlur - when element is blured

// Note that you can make ANY custom method on your custom components, and then call those methods in what you render. Then you can call {this.mymethod} in JS injection, BUT, NOTE that you must BIND this method to the "this" state in the constructor method, when the component is first created: 

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

// OR to make this cleaner, you can use arrow function in JSX, remove the .bind method line and instead inject JS into onClick, use anonymous function which then calls this.myMethod(). Arrow functions automatically bind the function the "this" instance of the component:

render() {
  return (
    <div>
      <p>The current count: {this.state.count}</p>
      <button onClick={() => this.handleButtonClick()}>
        Add 1
      </button>
    </div>
  )
}

// Also, apparently the cleanest way to store a method is like this, remember to use setState method, which will re-render the element:

handleButtonClick = () => {
  const newCount = this.state.count +1
  this.setState({ count: newCount });

}

/* Event Handlers and Conditional Rendering
  -Event Handlers - 
  -Conditional Rendering -
  -Enzyme -
  -Shallow Rendering - 


*/

// Example of using map method when input prop is an array and you want to render one of each, just remember that for testing, you must provide a default prop value.

import React from "react";

class Tabs extends React.Component {
  static defaultProps = {
    tabs: []
  };
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
    const currentTab = this.props.tabs[0];

    return (
      <div>
        {buttons}
        {this.props.tabs.length && (
          <div className="content">{currentTab.content}</div>
        )}
      </div>
    );
  }
}

export default Tabs;


// Enzyme - assists with testing snapshots for buttons. With this installed, install using:
npm install enzyme enzyme-adapter-react-16 --save-devicePixelRatio
// This program will automatcially search for this file in a location, you must create the setupTests.js file: ./src/setupTests.js
// Create the file and then import using this: 

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapater: new Adapter() });

// Once this file is set up, then you can use enzyme in your component.test.js file.
// You can use their shallow function to create a "wrapper" instance of the component that you can interact with. This allows you to simulate events on nodes.

import { shallow } from 'enzyme';

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />)
})

// To use the wrapper with Jest's snapshot functionality, you need to create a JSON version of the component. You can do this with a library called enzyme-to-json that will convert a wrapper to a JSON object.

npm install enzyme-to-json --save-dev

// Then you must import it and then utilize it:

import toJson from 'enzyme-to-json';

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />);
  toJson(wrapper);
})

// then you create a shanpshot of the component instance from the JSON.

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

// Then you "simulate" events, such as finding the button and clicking it, in the ex this clicks the second button. Note that the selector for the .find method is css selectors, the .at() selects a single item from the returned .find elements, index at 0, which is why .at(1) selects the second button:

it("closes the first tab and opens any clicked tab", () => {
  const wrapper = shallow(<Tabs tabs={tabsProp} />);
  wrapper
    .find("button")
    .at(1)
    .simulate("click");
  expect(toJson(wrapper)).toMatchSnapshot();
});
});

// You can use the .debug() method to show what element you're selecting, the below will return the second button: 

console.log(wrapper.find('button').at(1).debug());

// once you have the selected element which you can see with the .debug() method, then you can simulate events on that element. 

// Callback props - used to pass state between components - a function that a Parent component passes as a prop to a child component.
 
// The best place for storing state is the lowest common ancestor of the components that read and update that state. 

// For example, the below shows us using onDeleteItem and onCheckItem attributes to pass the callbackfunctions this.handleDeleteItem and this.handleCheckItem.

handleDeleteItem(){
  console.log('handle delete item called')
}
handleCheckItem(){
  console.log('handle check item called')
}
render() {
  return (
    /* not showing the full render */
    <section>
      <ShoppingList
        items={this.state.shoppingItems}
        {/* add the two callback props here */}
        onDeleteItem={this.handleDeleteItem}
        onCheckItem={this.handleCheckItem}
      />
    </section>
  )
}

// You can then pass props in the next component to gain access to further nodes:

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
}

// Then you can use the callback props when the buttons are clicked in ShoppingItem:

function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button
        type='button'>
        check
      </button>
      <button
        type='button'>
        delete
      </button>
    </li>
  )
}

// Then you can call that callback function and pass other props into it as well, like the below that passes a prop:

return (
  <li>
    <h2
      style={{
        textDecoration: props.item.checked ? "line-through" : null
      }}
    >
      {props.item.name}
    </h2>
    <button type="button" onClick={() => props.onCheckItem(props.item)}>
      check
    </button>
    <button type="button" onClick={() => props.onDeleteItem(props.item)}>
      delete
    </button>
  </li>
);
}

// The below examples take an item as input

state = {
  shoppingItems: [
    /* put stub items in here for testing */
    { name: "apples", checked: false },
    { name: "oranges", checked: true },
    { name: "bread", checked: false }
  ]
};

// newItems is a variable with the item removed, then stored as the new list
handleDeleteItem = item => {
  const newItems = this.state.shoppingItems.filter(itm => itm !== item);
  this.setState({
    shoppingItems: newItems
  });
};

// This goes through the object and for each item, if it matches the item input, switches/toggles the checked status, then returns it to be the new object of items.
handleCheckItem = item => {
  const newItems = this.state.shoppingItems.map(itm => {
    if (itm === item) {
      itm.checked = !itm.checked;
    }
    return itm;
  });
  this.setState({ shoppingItems: newItems });
};

/* API Requests 
  - Promises -
  - Asynchronous -
  - Synchronous -
  - Chaining - 
*/

/* To create a promise, call the constructor of the promise object with a function that includes the arguments resolve and reject. You can then attach event handlers. A promise is always either pending, fulfilled, or rejected. If successful, the resolve() function was called, if rejected, the reject() function was called. */

const p1 = new Promise((resolve, reject) => {
  // Asynch code here
});


/* To attach an event handler, use then() and for failures, use catch() */

const p1 = new Promise ((resolve, reject) => {
  console.log('Running the asynchronous code here');
  const duration = Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log('About to resolve');
    resolve(); // success
  }, duration);
});

// Note that the .then only executes if the promise is succesful and resolves. 

p1.then(() => {
  console.log('The promise completed sucessfully');
})

// Calling a failure - when a promise is rejected it looks for the catch handler and ignores the then(). 

const p1 = new Promise((resolve, reject) => {
  console.log('Running the asynchronous code here');
  const duration =   Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log('About to fail');
    reject(); //fail!
  }, duration);
});

p1.then(() => {
  console.log('The promise completed successfully');
}).catch(() => {
  console.log('The promise has failed.');
});

// You can also pass a value with the failure: 

const p1 = new Promise((resolve, reject) => {
  console.log('Running the asynchronous code here');
  const duration =   Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log('About to fail');
    reject('Error 42: Life has no meaning'); // fail with a message
  }, duration);
});

p1.then(() => {
  console.log('The promise completed successfully');
}).catch(err => { //notice the err parameter here
  console.log('The promise has failed with the following message:');
  console.log(err);
});

// You can also resolve with a value as well: 
const p1 = new Promise((resolve, reject) => {
  console.log('Running the asynchronous code here');
  const duration =   Math.floor(Math.random() * 5000);
  setTimeout(() => {
    console.log('About to resolve');
    resolve(42); //succeed with a value
  }, duration);
});

p1.then(value => { //notice the value parameter here
  console.log('The promise completed successfully with the following value:');
  console.log(value);
}).catch(err => {
  console.log('The promise has failed with the following message:');
  console.log(err);
});

// You can also have a function return a promise object after setTimeout() triggers:
function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

// You can then call that function and store the return promise in a variable:

const p2 = doTask('A');
console.log(p2);

// Returns: Promise { <pending> }

// You can then attach a handler to the promise object using the .then():

doTask('A').then(result => {
  console.log(result);
});


/* Chaining : Suppose you wanted certain tasks to be done in order, this is how you do that. Using .then() which always returns a new promise which means you can attach them together. Note that in the below example, 'C' is part of the .then() in B. Ex:*/

doTask('B')
  .then(result => {
    console.log(result);
    return doTask('C');
  })
  .then(result => {
    console.log(result);
  });

  // From here you can chain multiple tasks:

  doTask('B')
  .then(result => {
    console.log(result);
    return doTask('C');
  })
  .then(result => {
    console.log(result);
    return doTask('D');
  })
  .then(result => {
    console.log(result);
  });

  // Now, if you have a task that can be done only when MULTIPLE other tasks are completed, we can use Promise.all() to run several operations in parallel. Promise.all() accepts an array of Promises and checks that they are all resolved before invoking the then() method. The parameter of then is an array of the results of the Promises:

  Promise
    .all([p1, p2, p3])
    .then(arr => {
      // arr is an array [result1, result2, result3]
    })

// Ex:

Promise.all([
  doTask('A'),
  doTask('B'),
  doTask('C')
])
.then(results => {
  // first console.log results
  results.forEach(result => console.log(result));
  return doTask('D');
})
.then(result => {
  console.log(result);
})

// Note that the below code will return as follows, and that the results are printed in the order of the array, not when they were completed: 

// A has started
// B has started
// C has started
// A has ended after 4137 milliseconds
// B has ended after 3820 milliseconds
// C has ended after 3275 milliseconds
// D has started
// D has ended after 3091 milliseconds

/* When using an API, it is best to fetch that data in the component where the state is stored. Inside of that compnent, do not fetch this data in the render() method, but componentDidMount() may work */

fetch('https://country.register.gov.uk/records.json?page-size=5000')
  .then(response => response.json())
  .then(data => {
    //process the data here
  })



  /* React Router - a library that allows rendering of different components depending on the URL's path. 
    Benefits: 
      +Since it's a state change and not a complete reload of the page, you can programatically change the /path of the page. Not actually changing to a different web page.
      +Allows integrated "back" and "forward" buttons that pay attention to created routes. 
      +Sophisticated routing compositions, dynamic and nested routes. 
    -Router - Using a router allows you to set certain '/paths' that control the state of the components. No longer need custom states, because the route will set it. You have a component dedicated to each path. Ex: */

    class App extends React.Component {
      // no need for custom state!
    
      render() {
        return (
          <ReactRouter>
            <HomePageRoute path={'/'} />
            <QuestionOneRoute path={'/question/1'} />
            <QuestionTwoRoute path={'/question/2'} />
            <QuestionThreeRoute path={'/question/3'} />
            {/* ... */}
            <QuestionSixRoute path={'/question/6'} />
          </ReactRouter>
        )
      }
    }

    /*
    -Route - 
    -Dynamic Routing -
    -Link Compnent - 
    -History - 
    */

    // To set up React-Router, start in your chosen proejct's directory and use this command (there are other versions, this one is the DOM version for web pages):

    npm install react-router-dom

    // Then, in the index.js file, import the BrowserRouter component from 'react-router-dom' and wrap it around your whole App.:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from "react-router-dom";
    import './index.css';
    import App from './App';
  
    ReactDOM.render(
     <BrowserRouter>
       <App />
     </BrowserRouter>,
      document.getElementById('root')
    );

    //The BrowserRouter comoponent gives another component <Router />, which is rendered next to the App:
    
    <BrowserRouter>
      <Router>
        <App/>
      </Router>
    </BrowserRouter>

    // The router comes with props and states, like state.match, which has a path and url keys for the current page. 

    /* -Path - A string the Route component will be looking at the current path for this.
    -Component - A component, the Route component will render this component when the page's path matches the path prop. */

    function Foo() {
      return <p>I want to only shoe when the path is /foo</p>
    }
    
    // plug the Foo component into the Route component's component prop
    <Route
      path='/foo'
      component={Foo}
    />


  // First you must import Route and use it on your chosen component: 

import { Route } from "react-router-dom";

// You use 2 Route components and set the path prop to the route, and the component prop as the literal component you want to display: 

<Route path='/' component={HomePage} /> // no path - will then match any
<Route path='/about' component={AboutPage} />

// So now, the address in the browser for a locally hosted React proects would be:

/* 
http://localhost:3000 - show HomePage component
http://localhost:3000/about - show AboutPage component */

// To solve the '/' problem you give the component an extra prop of 'exact' so that it will only match the home page: 

<Route exact path='/' component={HomePage} />

// Note that with the above examples. simple <a> links were being hit, which casues the page to reload. To avoid this using the Link component from react-router-dom instead of <a> elements. First you must import the component:

import { Link } from 'react-router-dom';

// When using the Link component, set their path equal the "to" prop, like so:

<Link to="/" > Home </Link>
<Link to='/about'>About</Link>

// Full example of component Links - Note that the page no longer refreshes! Simply updates the path/rendered components, even when you hit back/forward with history button!:

export default class Nav extends Component {
  render() {
    return (
      <Content className="Nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/workouts">Workouts</Link>
      </Content>
    );
  }
}

// Now to have a page displayed when something is not found, when the path is incorrect and there are no matches, you need a "catch all" Route, in this case, you use the Switch component, wrap the Switch component around all Routes:
// instead of import { Route } from 'react-router-dom;
import {Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

// NOTE important - the Route WITHOUT a path should always come last in the switch, otherwise no other components would render.
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route component={NotFoundPage} /> 
          </Switch>
        </main>

// Now you can have "nested" routes. Note that typcially the home page route is simply '/'. But what about when you want to use ONE component to display the content of an array. And instead of addingmany Route components for each instance, what if you could somehow have one Route instance that works for each diplay of the items in the array.

// You want one Route component that can serve all paths. To make a part of the 'path' dynamic, prefix with a colon, this is called a 'route parameter':

<Route path='/fixed/:dynamic' />

// Ex:

<Route
path="/poem/:poemId"
component={PoemPage}
/>

// The above Route will look for a url match 

// Example of creating dynamic <Link> tags with 'routes' that match their ids. NOTE the use of back-ticks due to ${} inside the path. Note that using this, the page will NOT reload, leading to a much smoother experience:


export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className="PoemList">
        {POEMS.map(poem => (
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>{poem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

/* Programatic Navigation with History: 
  Useful for: 
    -After a user submits a login-form, only if submission is successful, redirect the user to the homepage.
    -After filling out a form that adds a new item to a list, redirect the user back to the list.
    -After clicking a link, depending on the user type, you might want to navigate to a different route.
    
*/

// Note that instead of using the 'component' prop, use 'render' which takes a function for the value because you need to control some props that get added, so using render allows you to write JSX for two components and thus specificy the props to pass. 


render() {
  const { bookmarks } = this.state;
  return (
    <main className="App">
      <h1>Bookmarks!</h1>
      <Nav />
      <div className="content" aria-live="polite">
        <Route
          path="/add-bookmark"
          render={() => (
            <AddBookmark
              onAddBookmark={this.addBookmark}
              onClickCancel={() => {
                /* */
              }}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <BookmarkList bookmarks={bookmarks} />}
        />
      </div>
    </main>
  );
}
}

// You can now also replace navigation buttons with links to each displayed component depending on their path/route:

export default function Nav(props) {
  return (
    <nav className="Nav">
      <Link to={"/"}>Bookmark List</Link>
      <Link to={"/add-bookmark"}>Add Bookmark</Link>
    </nav>
  );
}

// *** Testing: Note that you must change your smokescreen tests to include the BrowserRouter wrapper in your App.test.js or whatever file like so: 

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


/* History: Another library that comes with react-router. Can use history to subscribe to nav changes, check how many nav events happen, and programmatically navigate. You can access history by the props on the Router component, which has a prop 'history'. This history also contains methods, such as push and goBack. You can then set route-props parameter to render prop. */

render() {
  const { bookmarks } = this.state;
  return (
    <main className="App">
      <h1>Bookmarks!</h1>
      <Nav />
      <div className="content" aria-live="polite">
        <Route
          path="/add-bookmark"
          render={({ history }) => {
            console.log(history);
            return (
              <AddBookmark
                onAddbookmark={this.addBookmark}
                onClickCancel={() => {
                  /* */
                }}
              />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => <BookmarkList bookmarks={bookmarks} />}
        />
      </div>
    </main>
  );
}

// Now you can acces the history object, you can use the push method to supply the path to navigate to. 

          <Route
            path="/add-bookmark"
            render={({ history }) => {
              return (
                <AddBookmark
                  onAddbookmark={this.addBookmark}
                  onClickCancel={() => {
                    history.push("/");
                  }}
                />
              );
            }}
          />

// Note you can also use history.goBack() method to go back to the previous entry in the browser's history, like clicking a back button. 

/* Navigating AFTER a succesful POST request - Conditional - Use withRouter higher order component, which must be imported first:*/ 

import { withRouter } from 'react-router-dom';

// NOW instead of exporting the component, pass the component through the withRouter function first: 

export default withRouter(AddBookmark);

// This will make the history a prop of the Component that passes through the function. This means that the history can now be used inside the promise change and programmactially navigate on succsess!

this.props.history.push('/')

/* Creating and Reading Context 
  -Context - helps make variables more globally avaialbe instead of passing props through many children elements.context is best when the data is required by many components and helps solve problems such as prop-drilling. 
  -Prop Drilling - A problem. Passing props through many child elements to where it can be used.
  -Provider - An enclosing tag that allows use of the global variables stored in context. Any component that wants to read the context must be a descendant of the Provider. 
  -Consumer - Complimenting enclosing tag for components that want to use global variables stored in context
  -Render Props -
  */


  // Update React and React-Dom to latest versions, cd into directory:

  npm install react@latest react-dom@latest

  /* When to use context: 
    - current authenticated user, theme, or preferred language. */

// When wrapping components in <someContext.Consumer> remember to take value as a paramter, as this is the actual information that is passed from the .Provider component wrapper:

export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {value => {
        return (
          <>
            <button disabled={value.lang === "en-GB"}>
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button disabled={value.lang === "en-US"}>
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button disabled={value.lang === "ko"}>
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

// When wrapping components in <someContext.Provider> provide the required parameters that they need as "value" property of the wrapper: 

export default class AppLang extends Component {
  render() {
    return (
      <LanguageContext.Provider value={{ lang: window.navigator.language }}>
        <div className="AppLang">
          <LangControls />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}


/* NOTE - You don't have to use a constructor method to set your state, you can just as easily have. Also! Note that if your component is stateless, it should be a function instead of a class. If render() is the only function in your class, change it a function. Note that with hooks, then you never have to use a class and can simply use all functions instead of classes: */

state = {
  lang: window.navigator.language
}

// When working with context React.createContext which creates the context (object), but does not update it. It creates context with 2 pieces, a value and an updater function. Deeply nested componentes can read the value, they can even call the updater function, but it won't do anything. The Provider component intercepts the context and makes the updater function work by using it's own state. 

// To pass functions from a component to grandchildren elements via context, first you must pass the function that uses set.State({}) to the context component.Provider. You must also set the function as a property of the contextValue that is being passed:

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = lang => {
    this.setState({ lang });
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang

    };
    return (
      <LanguageContext.Provider value={contextValue}>
      <div className="AppLang">
        <LangControls onSetLang={this.handleSetLang} />
        <Child />
      </div>
      </LanguageContext.Provider>
    );
  }
}

// Note that for deeply nested components to update context values, a stateful provider component needs to use the updator callback function using state.That callback function needs to be available as part of the context's' value so that the consumer component can call it. 

// You can also use context to manage API requests in an application. 

// When you first create context, make a someContext.js file. Note that any functions passed to the context object need empty place holder functions to pass the function around: 

import React from "react";

const BookmarksContext = React.createContext({
  bookmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {}
});

export default BookmarksContext;

// Then import that context object to your document (App.js), update your current state to an empty value (?), and swap the passed state to a contextValue object that passes state this way. Then, Wrap your JSX in the <someContext.Provider > wrapper to allow descendants to use the passed contextual information globally. The folowing example shows changes to the document made to update it to a useable state with context: 

import BookmarkList from './BookmarkList/BookmarkList';
+import BookmarksContext from './BookmarksContext';
 import Nav from './Nav/Nav';

...

 class App extends Component {
   state = {
-    bookmarks,
+    bookmarks: [],
     error: null,
   };

...

   render() {
-    const { bookmarks } = this.state
+    const contextValue = {
+      bookmarks: this.state.bookmarks,
+      addBookmark: this.addBookmark,
+    }
     return (
       <main className='App'>
         <h1>Bookmarks!</h1>
-        <Nav />
-        <div className='content' aria-live='polite'>
+        <BookmarksContext.Provider value={contextValue}>
+          <Nav />
+          <div className='content' aria-live='polite'>

...

+          </div>
+        </BookmarksContext.Provider>
-        </div>
       </main>
     )

...

export default App;


// Once you're using context, you can then change your <Route > component from the render propery to using component={ComponentName} like so:

<BookmarksContext.Provider value={contextValue}>
<Nav />
<div className='content' aria-live='polite'>
  <Route
    path='/add-bookmark'
-              render={({ history }) => {
-                return <AddBookmark
-                  onAddBookmark={this.addBookmark}
-                  onClickCancel={() => history.push('/')}
-                />
-              }}
+              component={AddBookmark}
  />
  <Route
    exact
    path='/'
-              render={({ history }) => {
-                return <BookmarkList bookmarks={bookmarks} />
-              }}
+              component={BookmarkList}
  />
</div>
</BookmarksContext.Provider>

// You would then import the context to whatever component needs access and change the passed information from props to context like so: 

import React, { Component } from 'react';
+import BookmarksContext from '../BookmarksContext';
 import BookmarkItem from '../BookmarkItem/BookmarkItem';
import Rating from '../Bloc/React/bookmarks-app/src/Rating/Rating';

 ...

 class BookmarkList extends Component {
+  static contextType = BookmarksContext;
+
   render() {
-    const { bookmarks } = this.props
+    const { bookmarks } = this.context
     return (
       <section className='BookmarkList' />

// Deleting items from an item in server storage - First you must write fetch logic for the DELETE request inside of the component that owns the button to delete. Try to use a seperate function that accepts a callback if the request is successful. 

// First you must import "config" and then create the delete function: 

import React from 'react';
import config from '../config';
import './BookmarkItem.css';

function deleteBookmarkRequest(bookmarkId, cb) {
}

export default function BookmarkItem(props) {

// Example of deletion via API:

import React from 'react';

function deleteBookmarkRequest(bookmarkId, callback) {
  fetch(config.API_ENDPOINT + `/${bookmarkId}`, {
    method: 'DELETE',
    headers: {
      'authorization': `bearer ${config.API_KEY}`
    }
  })
    .then(res => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then(error => {
          // then throw it
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state
      callback(bookmarkId)
    })
    .catch(error => {
      console.error(error)
    })
}


/* Advanced Forms 
  -Error Boundary - 
  -Prop Types -
  -Uncontrolled Inputs - 
  -Styling React Components -
*/

// Example of using a form:

class RegistrationForm extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="registration__control"
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="registration__control"
            name="password"
            id="password"
          />
          <div className="registration__hint">
            6 to 72 characters, must include a number
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat Password *</label>
          <input
            type="password"
            className="registration__control"
            name="repeatPassword"
            id="repeatPassword"
          />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}

// There are two ways to obtain values from the input: 
  // - Using the event object
  // - Using React's "ref" attribute
// e.target is the form itself, which you can use to access other inputs via their name or id:

handlSubmit(event){
  event.preventDefault();
  const name = event.target.name.value;
  const password = event.target.password.value;
})

// Using ref, you must first create with React.createRef() and then attach the input element with the ref method:

constructor(props){
  super(props);
  this.nameInput = React.createRef();
}

// Then:

<input type="text" className="registration__control" name="name" id="name" ref={this.nameInput} />

// Then you can update the handleSubmit function: 

handleSubmit(event){
  event.preventDefault();
  const name = this.nameInput.current.value;
}

// Note that you can given inputs a default value with the defaultValue attribute: 
//NOTE that this is diff from just value="" which would not allow you change the value of the input.

<input type="text" className="registration__control" name="name" id="name" ref={this.nameInput} defaultValue="Frank"/>


/* Controlled Registration Forms - In a controlled component the state is handled in React itself rather than the DOM. To do this, you must first set up inital state and then create functions for the changing state:*/

constructor(props) {
  super(props);
  this.state = {
    name: {
      value: ''
    },
    password: {
      value: ''
    },
    repeatPassword: {
      value: ''
    }
  }
}

updateName(name) {
  this.setState({name: {value: name}});
}

updatePassword(password) {
  this.setState({password: {value: password}});
}

updateRepeatPassword(repeatPassword) {
  this.setState({password: {value: repeatPassword}});
}

// Then you add event listeners to the inputs themsevles: 

<input type="text" className="registration__control"
           name="name" id="name" onChange={e => this.updateName(e.target.value)}/>


<input type="password" className="registration__control"
           name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>


<input type="password" className="registration__control"
           name="repeatPassword" id="repeatPassword" onChange={e => this.updateRepeatPassword(e.target.value)} />

// You can then update the handleSumibt(event) function to take values from the state:

handleSubmit(event) {
  event.preventDefault();
  const { name, password, repeatPassword } = this.state;

  // Potentially submit these values to the server here
}


// Validating the form - use functions:

validateName(fieldValue){
  const name = this.state.name.value.trim();
  if (name.length === 0 ){
    return 'Name is required';
  } else if (name.length < 3){
    return 'Name must be at least 3 characters long';
  }
}

validatePassword(){
  const password = this.state.password.value.trim();
  if (password.length === 0){
    return 'Password is required';
  } else if (password.length < 6 || password.length > 72){
    return 'Password must be between 6 and 72 characters long';
  } else if (!password.match(/[0-9]/)){
    return 'Password must contain at least one number';
  }
}

validateRepeatPassword(){
  const repeatPassword = this.state.repeatPassword.value.trim();
  const password = this.state.password.value.trim();
  if (repeatPassword !== password){
    return 'Passwords do not match';
  }
}

// To display a validation error, better to create a seperate component that renders if there is an issue:

import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}


// Then place this component beneath each input and call the function that actually validates the info. That function will return the correct message, which then gets passed to the ValidationError component.

<input
      type="text"
      className="registration__control"
      name="name"
      id="name"
      onChange={e => this.updateName(e.target.value)}
    />
    <ValidationError message={this.validateName()} />

// Note that these are now ALWAYS displayed, to fix this we can add boolean to the state which show whether the user has typed anything into each field. 

this.state = {
  name: {
    value: '',
    touched: false
  },
  password: {
    value: '',
    touched: false
  },
  repeatPassword: {
    value: '',
    touched: false
  }
};

// Then update your state changing functions to change that state to true: 

updateName(name){
  this.setState({name: {value: name, touched: true}});
}

// THEN you can conditonally render the ValidationError component IF this.state.name.touched is "true":

{this.state.name.touched && (
  <ValidationError message={nameError} />
)}

// Once this is set up, then you can either enable or disable the "save" or "submit" button :

<button type="submit" className="registration__buttom" disabled={
  this.validateName() || this.validatePassword() || this.validateRepeatPassword()} >Save</button>


  // Error Boundaries - a react component that can catch a JavaScript error anywhere in the child component tree. Meant to display an appropriate user interface in the event of an error or log the error for later debugging. To build this component, make a class Component with either or both of the two lifecycle methods below:

  // Note that when considering where to place these Erorr Boundry components, note that this covers sub-components, so it may be prudent to place them where the component tree splits. You can use either two methods:


  static getDerivedStateFromError() // May be used to render a user interface that helps the user understand and solve the error
  componentDidCatch() // May be used to log error information for debugging purposes. 

  // So first start by creating an error .js file like CurrencyError.js and then set up with initial state with a property of hasError. Use the static getDerivedStateFromError function to return state of error, then conditonally render a <div> in the render function if this.state.hasError = true, or simply return the normal children if no errors.
  
  import React, { Component } from "react";

class CurrencyError extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Could not display this currency.</h2>;
    }
    return this.props.children;
  }

}

export default CurrencyError;

// Once this component exists, you can use it anywhere! You can now warp anything in the Error boundaries like so:

import React, { Component } from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US"/>
          USA: <Currency value={21} locale="en-US" currency="USD"/>
        </CurrencyError>
      </div>
    );
  }
}

export default App;

// However, you cannot see this in action unless you're funning in "production mode". To do this, first, create a "production" build:

npm run build

// the resulting folder contains a compiled app that can be served to the server. You can then fun a server on your machine by installing:

npm install serve -D

// Then ensure that the following script is in your package.json file:
"scripts": {
  // all the other scripts here
  "serve":"serve -s build",
  "preserve": "npm run build"
},


// Then you can run your buld with: ( you should now see your boundary error)

npm run serve


// Note that Boundary Errors only catch errors during rendering, in lifecycle methods, or in constructors. They do not catch errors in event-handlers, asynchronous code, or errors in the boundaries themselves. 

// PropTypes - Used to specify the type of values your component is expecting as props. You must of course install proptypes:

npm install prop-types

// You can then specify this with setting a default type after importing the library. Note that this is OUTSIDE of the class/function itself. Note that in the below example, 'value' is the prop being passed to the component

import PropTypes from 'prop-types';

ComponentName.propTypes = {
  value: PropTypes.number
}

// You can also put .isRequired so that the App knows that the props is required

ComponentName.propTypes = {
  value: PropTypes.number.isRequired
}

// Other values include: .array, .bool, .func, .object, and .string







// Default Props - In the case that a parent component does not pass the child the required component, you can have a default one set, this is also done OUTSIDE of the actual component:

ComponentName.defaultProps = {
  value: 1
}

// If for instance you pass an array, how do you check the contents of the array? You use arrayOf validator like so: 

ComponentName.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object)
}

// What if the number you want has a range? You can use the .oneOf validator: 


ComponentName.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired
}

// But what if the range was huge?? PropTypes allows you to create a custom function to define your own validation. Takes 3 parameters, props, propName, and componentName:

ComponentName.propTypes = {
  value: (props, propName, componentName) => {
    // value of the prop:
    const prop = props[propName];
    if(!prop) {
      return new Error(`${propName} is required in ${componentName}. Validation Failed`);
    }

    // the prop has a value let's check the type
    if (typeof prop != 'number') {
      return new Error(`Invalid prop, ${propName} is expected to be a number in ${componentName}. ${typeof prop} found.`);
    }

    // the prop is a number let us check the range
    if(prop < 1 || prop > 5) {
      return new Error(`Invalid prop, ${propName} should be in range 1 - 5 in ${componentName}. ${prop} found.`);
    }

  }
}

/* Deploying to Productin - Hosting React App on The Cloud - Putting it on the internet so others can visit it is called Deploying to Production. 
  -Production - 
  -Bulid - "Building" is the process of preparing applications for production. 
  -Serve - 
  -Enviornemtn Variables -
  -Zeit/Now.sh - 
  -Deploy - 
  -Domain Alias - 
  -NPM Scripts -
   */

   // Redundant - to create a production build, run:

   npm run build

   // This will then create optimized files and save them inside the ./build folder that was also generated. 

   // You can then run the below serve tool that will host the react app build:

   npx serve -s build

   // This will copy a local address to your clipboard which can be pasted into the browser. 

   /* Enviornment Variables - When you have senstive info like passwords, API keys, or whatever, you should remove these from your source code and store them in the machine itself. There are alternative ways such as strogin in "key-vaults" but this is one solution. You can read the enviornment variables on your machine with this command: */

   env

   // Note that Create-react-app projects have access to enviornment variables on the host machine. You can add variables to the enviornment so that the app will have access. These are made available on the process.env object. You can see this by loggin this to your console in index.js

   console.log(process.env);

   // To create a temporary enviormental variable, use this in the command line:

   export REACT_APP_TEST=supersecretkey!

   // You can test that this was created with: 

   echo $REACT_APP_TEST

   // Note that after you close the bash session, this will no longer exist. 

   // Now, if you npm start in the SAME window, you can see the variable logged in the console. 

   // Note that the console does not log ALL enviornment variables, and that's because the React-create-app is filtering for variables that start with the prefi * React_APP_ . If you were to deploy the application to a hosting provider to run on the internet, the enviornment variables would need to be set on that host machine directly. 

   // Since we don't want a bunch of variables on the local machine, you can use the .env file to create pretened variables, if you will. You must create the .env file and place your variables inside of it. Create-react-app is checking for multiple different .env files. 

   // To do this, run this command in the project directory:

   touch .env.local

   // Note that in the .gitignore file, .env.local is listed because this should not be sent with a git update since it contains sensitive info. Any variables that you add to this will become available in the process.env object. 

   // To store your api key, open the .env.local file and add:

   REACT_APP_API_KEY=put_your_key_here

   // Ex:

REACT_APP_API_KEY='\$2a$10$ba1z0n2XnSnbMP/ipTCHeOqqrI7i8Rssm/z8MHTxgb7LamV7LpfXu'

// Note you may need to add \ in front of key if there is a $ sign. 

// You can then use this variable inside of the config.js file, for in this case, that's where the api key is stored: 

export default {
  -  API_KEY: 'your_api_key_was_here',
  +  API_KEY: process.env.REACT_APP_API_KEY,
   }


/* Zeit - Hosting platform (also known as now.sh). Allows you to host apps to the Cloud for free. */

// Ziet is controlled with the "now" command. To run your build use this command:

now --name bookmarks-app ./build

// This will then deploy your code AND copy the new address of the deployed app to your clip board. Note that the name of copied url below. HTTPS, then bookemarks-app (which is the name), and the unique ID, which is different after each deployment. 

// https://bookmarks-app-cr3ttihc9.now.sh 

//  Using the Now.JSON configuration file. The now command looks for "now.json" file next to the code you deploy. This file NEEDS to live in the build folder. BUT, running npm run build will remove the fild. So to make this work, you can use the ./public folder which gets copied into the build folder every time. Make with the contents: 

{
  "version": 2,
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

// NOW when you run npm run build, the now.json file is in the build folder, and you no longer have to use --name when deploying, becasue it is already stored. You can now simply run :

now ./build

// Note that another problem this can solve is the unique ID being generated each time you deploy. To solve this, you use a feature called alias to solve this problem. Youc an create a fixed URL "alias" that you can connect to the latest unique URL. You would use the following now command structure:

now alias [deployment-url] [alias]

// so real world ex:

now alias https://bookmarks-app-cr3ttihc9.now.sh kristens-bookmarks-app


// You can now visit your hosted app at https://kristens-bookmarks-app.now.sh

// HOWEVER, note that you must update this every time with the unique ID each time. however, the now.json can help here too. Update the ./public/now.json file 

{
  "version": 2,
+  "alias": "[your-username]-bookmarks-app"
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

// Remember to re-do your build after adding this to copy over the now.json file to your build folder. NOW after this you can use the now alias command without the eployment url and the alias as it will b read from the file instead. Instead, specify the location of the now.json file using the  -A flag like so :

// perform a new deploy:
now ./build
// update the alias to latest bulid: - NOT WORKING, apparently after an update this no longer works - no solution as of yet
now alias -A ./build/now.json

// Using NPM to automate. In NPM, we use npm start, npm test, npm run build, but they offer many features. You can create your own scripts that can be run before or after other scripts automatically. Scripts that run before or after other scripts are called pre and post hooks.  You make these in the package.json file:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
-   "eject": "react-scripts eject"
+   "eject": "react-scripts eject",
+   "hello": "echo 'hello!'"
},

// You can then run this script with npm run hello. Now, if you want to automatically fun scripts before or after this one is run, you can use pre and post hooks like so:

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
+   "prehello": "echo 'before hello!'",
+   "posthello": "echo 'after hello!'",
  "hello": "echo 'hello!'"
},

// Now if you do npm run hello, the other two scripts will also run, before and after hello. 

// In the context of deployment, You want to run a build before each deployment, update the fixed URL alias after each deploy, and then run tests before each build. To automate running all tests before running a new build, HOWEVER, this starts tests in "watch mode" and still creates the build even if the tests fail:

"scripts": {
  "start": "react-scripts start",
+   "prebuild": "react-scripts test",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},

// To fix this, we use a create-react-app feature that looks for an enviornment variable called CI (continuous integration). When the CI variable is present, create-react-app does: 
  // - disables watch-mode in tests
  // - Makes the tests output an error "exit code" when test fails, which stops the next scripts from running
  // - Disables colours in the test output, but we can fix this with the --colors flag. 

// SO update script to, and now when a test fails, the build will not work, which is what you want:

"scripts": {
  "start": "react-scripts start",
-   "prebuild": "react-scripts test",
+   "prebuild": "CI=true react-scripts test --colors",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},


// Now you can add a script to trigger now alias after every deploy

"scripts": {
  "start": "react-scripts start",
  "prebuild": "CI=true react-scripts test --colors",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
+   "predeploy": "npm run build",
+   "deploy": "now ./build",
+   "postdeploy": "now alias -A ./build/now.json"
},

// If ever you deploy broken code and want to roll back to a previous version, you can do so and also change your alias back as well:

now alias [previous-deploy-url] [alias]

now alias https://bookmarks-app-hjqczyxcu.now.sh sams-bookmarks-app

/* Accessibility in React 
  -Focus - 
  -Focus Management - 
  -Form Validation -
  */

  // React.Fragment component - Must be imported then wrap an item that would normally require a <div> ? to produce semantic html:

  import React, { Fragment } from 'react';

  function ItemGroup(props) {
    const items = props.items.map(item => <td>{item.name}</td>);
    return (
      <Fragment>
        {items}
      </Fragment>
    )
  }

  // Form Accessbiility - Note that in input, textarea, and select all require their own unique labels and we use htmlFor like this:

  <label htmlFor="username">Username:</label> 
  <input id="username" type="text" name="username" />

  // aria-required & aria-describedby - attributes you can use to increase accessibility. 
  // - aria-required - tells users with assistive technologies that he input is required. 
  // aria-describedby - points to another element in the DOM  and provides more info about the secribed element: 

<label htmlFor="dueDate">Due Date 
  <span className="requiredField">(required)</span>
</label>
<input 
  type="date" 
  id="dueDate" 
  name="dueDate" 
  aria-label="Due date for book return" 
  aria-required="true" 
  aria-describedby="dueDateConstraint"/>
<div id="dueDateConstraint">Due date must be within 6 months of the current date.</div>

// Note in this above example that the aria-describedby attribute points to the ID of the div beneath it. So when a screen reader reads the input, it will then hear both the label and the extra description.

// Form Validation - Note that displaying a list of errors at the beginning if a validation fails may be dificult for mobility-impaired users who must scroll back and forth between the errors and controls. Even for distracted and memory-handicapped users who cannot remember. Also screen readers, which will hear a lot of content before reaching the error. ** Therefore, error messages should be properly associated witht heir inputs **. Ex:

<label htmlFor="ccNumber">Credit Card Number
  <span className="requiredField">(required)</span>
</label>
<input
  type="text"
  id="ccNumber"
  name="ccNumber"
  aria-label="Credit card number"
  aria-required="true"
  aria-describedby="ccError"
  aria-invalid="true"/>
<div 
  className="errorMessage"  
  id="ccError">
  Please enter a valid credit card number
</div>  

// aria-invalid - indicates to assistive tech that the input field is invalid. Using this, it means that when the user focuses on the input, they will hear the aria-describedby id section next, hearing the error. 

/* Keyboard focus - Programmatic focus - When there is an invalid field, focus on that DOM element. Note that this is made difficult as we cannot interact with the DOM itself, but must through React. React provides:*/ 

// ref API - for accessing the DOM. Ex of ref API validating a social media form:

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: 18,
      tooYoung: false
    };
    //create a ref
    this.age = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      tooYoung: this.state.age < 13
    }, () => {
      if(this.state.tooYoung) {
        //reset the focus on the input
        this.age.current.focus();
      }
    });
  }

  handleChange(age) {
    this.setState({
      age
    });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="age">Enter your age:
          <span>(required)</span>
        </label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          aria-required="true"
          aria-describedby="ageDescription"
          aria-label="Enter you age"
          ref={this.age}
          onChange={e => this.handleChange(parseInt(e.target.value), 10)}
          aria-invalid={this.state.tooYoung}/>
        <div id="ageDescription">You must be 13 years of age or older to use this site.</div>  

        <button type="submit">Go</button>
      </form>
    );
  }
}

render(<App />, document.getElementById('root'));

// You can use the inspector in the browser to take a look at accessibility through the "audits" tab. You must choose some specs of the test. 

// Formik - first you need to import and then wrap form inside of FOrmik with initial values and then have tracked values and event handler functions as arguements for function 

import { Formik } from 'formik';

<Formik initialValues={{name: "", email: ""}}>
  {({values, errors, touched, handleChange, handleBlue}) => {
    <form>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" onChange={handleChange} values={values.name} onBlur={handleBlur}/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      <button type="submit">Submit</button>
    </form>
  }}
</Formik>

// Then we can use a tool called "Yup" . We define the object, and then add the shape of our values, and define the validations we want

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, "Must have a character").max(225, "Must be shorter than 225").required("Must enter a name"),
  email: Yup.string().email("Must be a valid email address").max(225, "Must be shorter than 255").required("Must enter an email")
});

// We can then pass validationSchema to our Formik component. It will then automatically validate info.

<Formik initialValues={{name: "", email: ""}} validationSchema={validationSchema}>
  {({values, errors, touched, handleChange, handleBlue}) => {
    <form>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" onChange={handleChange} values={values.name} onBlur={handleBlur}/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      <button type="submit">Submit</button>
    </form>
  }}
</Formik>

// We can then add an optional class to the inputs IF the field has been touched and has an error. This will make the input red.

<Formik initialValues={{name: "", email: ""}} validationSchema={validationSchema}>
  {({values, errors, touched, handleChange, handleBlue}) => {
    <form>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" onChange={handleChange} values={values.name} onBlur={handleBlur} className={touched.name && errors.name ? "has-error" : null} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "has-error" : null} />
      <button type="submit">Submit</button>
    </form>
  }}
</Formik>

// Submission of form - Add handleSubmit and isSubmitting to values which must then be passed to form:

<Formik initialValues={{name: "", email: ""}} validationSchema={validationSchema}>
  {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" onChange={handleChange} values={values.name} onBlur={handleBlur} className={touched.name && errors.name ? "has-error" : null} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "has-error" : null} />
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  }}
</Formik>

// Next we need to add an onSubmit attribute to the Formik component itself:

<Formik initialValues={{name: "", email: ""}} validationSchema={validationSchema} onSubmit={(values, {setSubmitting, resetForm}) => {setSubmitting(true);
// Can then call resetForm(); or post data to server here, passing values?

}}>
  {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => {
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" />
      <input type="text" name="name" id="name" onChange={handleChange} values={values.name} onBlur={handleBlur} className={touched.name && errors.name ? "has-error" : null} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "has-error" : null} />
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  }}
</Formik>



/* React Interview questions:
  Component Lifecycle and methods called in each phase
    1. Mounting
      a. constructor () - sets initial state
      b. static getDerivedStateFromProps() - Users do not have access
      c. render() - Return JSX, only mandatory method, cannot set state or will cause an infinite loop
      * Note that componentWillMount() is depricated and should be avoided
    2. Updating
      a. static getDerivedStateFromProps() - 
      b. shouldComponentUpdate() - compare state to see if there are updates?
      c. render() - re-renders 
      d. getSnapshotBeforeUpdate() - consider important user info before update, such as where the user was when scrolling
      e. componentDidUpdate() - 
    3. Unmounting  
      a. componentWillUnmount() - 


  Explain Error Boundaries - 
    - Similar to a try/catch block - You can wrap your component in an error boundary component with two special react hooks:
      - static getDerivedStateFromError - You can have a fallback component that can render if there was an error. 
      - componentDidCatch - You can log the error if it is happening.
    
  Best lifecycle method for making API calls:
    - componentDidMount() - allows initial loading of DOM, then can update state here which will cause re-render with new info. You can then use cool loading graphicas while API call is being made in the initial render. 






    Things to look into:

    

*/

