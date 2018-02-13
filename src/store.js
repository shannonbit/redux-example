import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const products = (state = [], action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return action.products;
  }
  return state;
}

const cart = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return state.concat(action.product);
  } else if( action.type === "DELETE_FROM_CART") {
    return state.filter((product) => product.id !== action.product.id );
  }
  return state;
}

const logger = store => next => action => {
  console.log("dispatch", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
}

export default createStore(combineReducers({ cart, products }), { cart: [], products: [] }, applyMiddleware(logger, thunk));
