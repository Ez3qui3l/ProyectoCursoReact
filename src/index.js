import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import departments from './components/reducers'
import  { createStore } from 'redux'
import { Provider } from 'react-redux'



ReactDOM.render(
  <Provider store={createStore(departments)}>
  <App/>
</Provider>,
 
 
  document.getElementById('root')
);