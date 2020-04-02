import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

// STORE => is a Globalize State

// ACTION => describes what you want to do. 
//Like: You want to add a counter, you will name it as INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER => describes how your actions tranform state to the next state
// Example flow: ACTION (called) => REDUCER (check which action you did and based on the action modify STORE) => STORE
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

let store = createStore(counter);
// Display it in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH => dispacth action to the reducer, and reducer checkes and change store.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
