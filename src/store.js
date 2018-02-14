import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const PRODUCTS = (products = [], action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        return action.products;
    }
    return products;
};

const CART = (cart = [], action) => {
    if (action.type === "ADD_TO_CART") {
        return cart.concat(action.product);
    } else if (action.type === "REMOVE_FROM_CART") {
        return cart.filter(product => product.id !== action.product.id);
    }
    return cart;
};

export default createStore(
    combineReducers({ cart: CART, products: PRODUCTS }),
    applyMiddleware(thunk),
);
