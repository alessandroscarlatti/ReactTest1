import { createStore, combineReducers } from 'redux';
import App from './App';
import boardReducer from '../board/boardReducer';
import { squareReducer } from '../square/squareReducer';
import ReactDOM from 'react-dom';
import React from 'react';

console.log("index.js loaded!");

// Here we create the Redux store.
// This is the only way that the store
// ever knows about each reducer.
// In this case, I don't need to combine reducers
// because the Square reducer is nested inside
// the BoardReducer.
// In addition, connect the store to the Redux devTools Chrome extension.
const store = createStore(
  boardReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const renderApp = () => {
  console.log("renderApp() called");
  ReactDOM.render(<App boardState={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));  
}

// now we connect React to Redux.
// This means that React will be
// told to renderApp() AFTER Redux
// has updated the state of the store.
// This means we will have to render
// the React app initially even after we
// set up the subscription, because there
// is no initial Redux action.
store.subscribe(() => {
  console.log("updating react DOM with:"); console.log(store.getState());
  renderApp();
})

typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
? window.devToolsExtension()
: f => f

console.log("about to render...")
console.log("App is:");
console.log(App);
renderApp();
