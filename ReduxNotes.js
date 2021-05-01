// Redux - State management. 

// First, create your React app, then install react:

npm install redux react-redux

// Will then be listed in your dependencies. 

// In index.js, you create the globalized state - STORE. 

// ACTION - describes what you want to do. 

// REDUCER - describes how actions transform state into next state - checks which action was done, then modifies state based on the action. "Reduces" store state and change you want to make to the store, into one state (updates the store).

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
import { listeners } from 'cluster';

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


// Notes from egghead.io video series:
// Source: https://egghead.io/lessons/react-redux-the-single-immutable-state-tree

// 3 Principles of Redux:
// 1. Everything that changes in the app, including data and UI state, is contained in a single object, called the State, or State Tree. You represent the state of the entire app as a single object. All changes are explicit. 
// 2. Actions - The State Tree is redundant. The only way to change it is to dispatch an action, a js object, which describes what changed in the object. All data must be obtained by actions. You cannot write-to it. Anytime you need to make a change, you use an action. Components dispatch actions with a certain type. 
// 3. Reducers - what makes redux fast- To describe state mutaionts, you must write a functino that takes the previous state, the action being dispatched, and returns the next state of the app, and must be a pure function that returns a new object. 

// Pure function - do not have any observable side effects, simply calculate a new value, so you can be confident that calling with the same arugments prodcuce the same results. They also never overwrite the original value, but returns a new value. Depends solely on the value of it's arguments, not on server calls or databases. They are predictable and do not modify values passed to them. For examples, using .map(), which returns a NEW array. 

// Impure functions - call databases or networks, may operate on the DOM, may mutate the values passed to them. 

// Some functions in redux must be pure. Takes the state of the application with the action, and returns a new action that is the new state. 

// Action - plain javascript object that is the minimal representation of the change to that data. It requires a 'type' property. Components need to dispatch an action with a type, sometimes passing an arguement. All plain objects. Any data inside the application gets there by being dispatched to an action. 

// Reducer - takes current state, action type, and returns new object of updated state. Ex:

function counter(state, action){
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

// ES6 default argument, arrow function syntax, and SWITCH case version of the above

const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Note that reducers should have a default return that returns the original state in case the action type passed is undefined. If the reducer receiveces undefined as state, it should always return the original state. 

// Store holds current applications state, lets you dispatch actions, and you must specify reducers to specify how state is updated by actions. The store has 3 important methods:
  // getState() - returns current state of Redux store
  // dispatch() - lets you dispatch actions to modify your state - most commonly used. 
  // subscribe() - lets ou register a callback that will be called anytime a dispatch is called. So you caould call your render function, so that ANYTIME a dispatch (or change to the store) is made, the app will re-render:

// ES6 destructure:

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter value ={store.getState()} />,
    document.getElementById('root')
  )
};
  
store.subscribe(render);
render();


// So - apparently we are going to re-create the createStore function provided by Redux by scratch:

 const createStore = (reducer) => {
    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners => listeners.filter(l => l !== listener);
      };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
}

// SO from HERE, you could pass actions as their own prop the component as an anonymous function like so: 

const render = () => {
  ReactDOM.render(
    <Counter
      value ={store.getState()} 
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root');
  );
};


// Here is the Counter component that renders the html elements that call the anonymous dispatch functions (note that this is in the same document, otherwise would likely need to be this.props.onIncrement, ect):

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div> 
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

// The reducer then considers the action passed via dispatch, considers current state, and returns the updated state, and because we have subscribed to the store with the 'render' callback functino, the render function will be called anytime there is an action dispatched to the store. 

// Example of a reducer that adds a todo item to state, and returns the original state if the action type is unspecified. The 'TOGGLE_TODO' action type takes our current state and maps each todo in state, returning a NEW array, and for each todo that does not equal the action.id passed to it, it simply returns that todo, OTHERWISE, it returns the same todo (spread operator), but with a completed attribute that is equal to the OPPOSITE of what the old state is. This produces a toggle effect. 

const todos = (state = [], action) => {
  swtich (action.type){
    case 'ADD_TODOD':
      return [
        ...state,
        { 
          id: action.id,
          text: action.text,
          completed: false
        }
    ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id){
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      });
    default:
      return state;
  }
};

// The above function is hard to understand BECAUSE it is mixing two concerns: how the todos ARRAY is updated and how the todo ITEM is updated, which you want to avoid in redux. You can have seperation of concerns by creating two different reducers, one to handle the array of todos in state, and one to handle individual todo items within that array in state. You should extract functions so that each function addresses a single concern. 

const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      case 'TOGGLE_TODO':
        if (state.id !== action.id){
          return todo;
        }

        return {
          ... state,
          completed: !state.completed
        };
      default:
        return state;
  }
}

const todos = (state [], action) => {
  swtich(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

// Reducer Composition - different reducers specify how different parts of the state tree are updated in response to actions. Reducers are also normal js functions, so they can also call other reducers, like in the above example. It is often the case that we want to have a top-level reducer that returns all of state, after being returned from all of the reducers. 

// combineReducers - taken from Redux, allows us to create the top-levle reducer: THe keys correspond to the fields of the state object the reducer will manage. The value of the object are the reducer it should call to update the corresponding state fields. So the below reducer, the 'todos' and 'visibilityFilter' parts of state are managed by the todos and visibilityFilter reducers. Typical to name the keys after the values (reducers.)

const { combineReducers } = Redux;
const todoApp = conbineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

// ES6 syntxx since key/value are the same:

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// Combine Reduce function from scratch: - Taking all the keys of the reducers, 

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key], 
          action
        );
        return nextState;
      },
      {}
    );
  }
}

// Presentational component - Components concerned only with displaying/renering, not behavior. Essentially, instead of defining functions inside the component, remove from component and pass the function through props instead, which is still called in the component. 

// Need to take notes on using context and <Provider > elements to pass store props.  Maybe not, looks like react-redux, already comes with an automatic provider:

const { Provider } = ReactRedux;

// mapStateToProps - Takes redux store state, and returns props that are needed to be passed to a presentational component

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

// mapDispatchToProps - Takes the stores dispatch function as the first argument, then 

// specifies the behavior, which callback prop dispatches which action. 

const mapDispatchToProps = (dispatch) => {    
  return {
    onTodoclick: id => 
    dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  };
};

// We can then use connect

cost { connect } = ReactRedux;

m 