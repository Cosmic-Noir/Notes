// Redux - State management. 

// First, create your React app, then install react:

npm install redux react-redux

// Will then be listed in your dependencies. 

// In index.js, you create the globalized state - STORE. 

// ACTION - describes what you want to do. 

// REDUCER - describes how actions transform state into next state - checks which action was done, then modifies state based on the action. 

// DISPATCH - "Dispatch this action to the reduer - reducer will check what to do"

// First create the store:

import { createStore } from 'redux';

let store = createStore(`reducer goes here`);

// Create an action, which is a function that returns an object:

const increment = () => {
    return {
        name: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        name: 'DECREMENT'
    }
}

// Create a reducer, which will take care of actions, needs two arguments, initial state and action as arguments. So this example is using a switch statement to assess the action? and then choose how to update the state.

const counter = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;

    }
}

// So now is where the create store would be with the argument of a reducer:

let store = createStore(counter);

// You can display store in the console:

store.subscribe(() => {
    console.log(store.getState());
})

// Then create the dispatch, which will run the action indicated. 

store.dispatch(increment());

// It is advixsed to create two folders, one for actions and one for reducers. Then create an index.js file in each folder, where all reducers/actions are imported. THen use combineReducers on all the reducers.

import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer
});
// Or if ES5
export default allReducers;



// This can then be imported into main index.js file and put that as the single argument to the createStore function.

import allReducers from './reducers';

const store = createStore(allReducers)

// Ex of counterReducer in a counter.js file:

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;

// Ex of loggedReducer in isLogged.js file:

const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;


// To use the Redux dev tools (now installed on this comp), must put this as the second argument to the createStore:

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Now we need to import the Provider:

import { Provider } from 'react-redux';

// You then wrap the <App /> in the provider with the store:

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// Then to use that state in any component you import the useSelector. You can even check if something is true or false, and conditionally render html:

import React from 'react';
import { useSelector} from 'react-redux';

function App () {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    return (
        <div>
            <h1>Counter is {counter}</h1>
            {isLogged ? <h3>Valuauble information</h3> : ''}
        </div>

    )
}





// Now we can create an action in index.js
//(ES6)
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () {
    return {
        type: 'DECREMENT'
    }
}

// Next, we must import useDispatch with useSelector. You can then use any "action" or function via the dispatch.

import { useSelector, useDispatch } from 'react-redux';

function App () {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter is {counter}</h1>
            <button onClick={() =>  dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? <h3>Valuauble information</h3> : ''}
        </div>

    )
}


// Then, if we wanted to pass arguements to the action functions, we can send data in the actions as another key/value pair, usualyl called "payload"

export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};

// THEN in the reducer, with the case 'INCRMENT', we can replace the 1 value with the payload:

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCRMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
    }
}





// Video source: https://www.youtube.com/watch?v=CVpUuw9XSjY