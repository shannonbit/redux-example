import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = (state, action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            products: action.products,
        }
    } else if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.product),
        }
    } else if (action.type === "REMOVE_FROM_CART") {
        const CART = state.cart.filter(product => product.id !== action.product.id);
        return {
            ...state,
            cart: CART,
        }
    }
    return state;
}

const logger = store => next => action => {
    console.log("dispatching", action);
    const RESULT = next(action);
    console.log("next state", store.getState());
    return RESULT;
}

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk));