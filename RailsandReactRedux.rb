# Setting up a React-Redux front end with Rails backend project

# This guide contains the following tech:
# - Redux
# - React Router
# - Reselect
# - Redux Think
# - Semantic UI

# Source: https:#www.freecodecamp.org/news/how-to-create-a-rails-project-with-a-react-and-redux-front-end-8b01e17a1db/

# Create the react app:

rails new rails-react-project-name --webpack=react

# Check gemfile and ensure webpacker and react-rails are listed like so:

gem 'webpacker'
gem 'react-rails'

# if not listed, add, then run the below command to install these necessary tools

bundle install

# Then run this:

rails webpacker:install:react  rails generate react:installyarn install

# Now you can run your server with:

rails server -p 3000

# or for me personally
be rails s

# the tutorial suggests running this command in a sep terminal so changes automatically reload in the browser:

./bin/webpack-dev-server

# TEST IF ABOVE WORKS - I thought this already happened with newer versions of rails?

# Setup controller class and route
  # setting up the GET /v1/things endpoint in the routes.rb

Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
end

# next create the things controller `things_controller.rb`:

class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '9aa0721f-2c53-4d91-ad9e-e893e2a8ea1c'
      }
    ] }.to_json
  end
end

# Now create a React component using:

rails generate react:component HelloWorld greeting:string

# You should see this response in your terminal indiciating it was successful:

Running via Spring preloader in process 71025
      create  app/javascript/components/HelloWorld.js

# Now we use it by embeding the component in a view and add a route pointing to the view

# create the view at `app/views/static/index.html.erb`:

<%= javascript_pack_tag 'application' %>

<%= react_component("HelloWorld", { greeting: "Welcome to Balance" }) %>

# No update the routes file and make the new static view the default view at the roote route

Rails.application.routes.draw do
  root 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
end

# Next create the static controller that will return the index view, corresponding with the 'static' views folder at: app/controllers/static_controller.rb

class StaticController < ApplicationController
  def index
  end
end

# Re-run the server to see the new landing page

# PROBLEM - component will not render
# route works, controller works, view returned, but component not rendering. Not sure sure what's missing

# Add React-Router

npm install --save react-router-dom yarn install

# This should add this line to your package.json

"react-router-dom": "^5.2.0",

# Now we create some routes for the React Front-end. Start with running this line:

rails generate react:component App

# Update the contents to use BrowserRouter:

import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HelloWorld from './HelloWorld'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => { ("Home!") }} />
          <Route path="/hello" render={ () => <HelloWorld greetings="Friend" /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App

# next update the route so that all requests for pages that are not API requests all go to the static index page:

Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end

# Adding Redux, Sagas, Babel Polyfill, and Axios - to install all, run this:

npm install --save redux babel-polyfill reselect react-redux yarn install

# Set up Redux store at app/javascript/configureStore.js

import { createStore } from "redux";

const initialState = {
  things: []
};

function rootReducer(state, action) {
  console.log('action.type', action.type);
  switch(action.type) {
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}

# Next we import and use the configureStore() in the App component

import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import HelloWorld from './HelloWorld';

import configureStore from '../configureStore';

const store = configureStore();

class App extends React.Component {

  render () {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <h2>Application</h2>
          <Switch>
            <Route exact path="/" render={ () => { ("Home!") }} />
            <Route path="/hello" render={ () => <HelloWorld greeting="Friend" /> } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;


# Then we implement in our HelloWorld component:

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'Get_Things';

function getThings() {
  console.log('get things action');
  return {
    type: GET_THINGS_REQUEST
  };
};

class HelloWorld extends React.Component {

  render () {

    console.log('Hello world component rendering...', this.props.greeting);

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingButton" onClick={ () => this.props.getThings() }>Get Things</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);

# Next we give the initial state of the app some content in the things:

import { createStore } from "redux";

const initialState = {
  things: [
    {
      name: "Thingy 1",
      guid: "0b314c33-4869-48d8-a8c4-30221365a0a1"
    },
    {
      name: "Thingy 2",
      guid: "dd993ff7-d450-4352-86b7-f1e620431942"
    }
  ]
};

function rootReducer(state, action) {
  console.log('action.type', action.type);
  switch(action.type) {
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}


# Then we set up our HelloWorld to display state from props like so:

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'Get_Things';

function getThings() {
  console.log('get things action');
  return {
    type: GET_THINGS_REQUEST
  };
};

class HelloWorld extends React.Component {

  render () {
    const { things } = this.props;

    const thingsList = things.map((thing) => {
      return <li>{thing.name} {thing.guid}</li>
    })

    console.log('Hello world component rendering...', this.props.greeting);

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingButton" onClick={ () => this.props.getThings() }>Get Things</button>
        <br />
        <ul>{ thingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);

# now we install redux-thunk - which will allow async workflows like HTTP requests to dispatch actions.

npm install --save redux-thunk yarn install

# next we import hunk and this thing called "applyMiddleware" from redux, and set up our configureStore function:

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
  things: [
    {
      name: "Thingy 1",
      guid: "0b314c33-4869-48d8-a8c4-30221365a0a1"
    },
    {
      name: "Thingy 2",
      guid: "dd993ff7-d450-4352-86b7-f1e620431942"
    }
  ]
};

function rootReducer(state, action) {
  switch(action.type) {
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialstate,
    applyMiddleware(thunk)
  );
  return store;
}
