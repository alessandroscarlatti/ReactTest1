import { createStore } from 'redux';
import App from './App.jsx';
import boardReducer from '../board/boardReducer.js';
import ReactDOM from 'react-dom';
import React from 'react';

console.log("index.js loaded!");

const store = createStore(boardReducer);

store.subscribe(() => {
  console.log("updating react DOM with:"); console.log(store.getState());
  ReactDOM.render(<App boardState={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));
})

console.log("about to render...")
console.log("App is:");
console.log(App);
ReactDOM.render(<App boardState={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));
