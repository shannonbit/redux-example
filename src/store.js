import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const products = (products = [], action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        return action.products;
    }
    return products;
}

const cart = (cart = [], action) => {
    if (action.type === "ADD_TO_CART") {
        return cart.concat(action.product);
    } else if (action.type === "REMOVE_FROM_CART") {
        return cart.filter(product => product.id !== action.product.id);
    }
    return cart;
}

const logger = store => next => action => {
    console.log("dispatching", action);
    const RESULT = next(action);
    console.log("next state", store.getState());
    return RESULT;
}

export default createStore(combineReducers({ cart, products }), applyMiddleware(logger, thunk));