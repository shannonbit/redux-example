import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import './index.css';
import { loadProducts } from "./actionCreators";

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
