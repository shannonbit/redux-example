import { createStore, applyMiddleware } from "redux";

const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return {
            ...state,
            cart: state.cart.concat(action.product),
        }
    }
    if (action.type === "REMOVE_FROM_CART") {
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

export default createStore(reducer, { cart: [] }, applyMiddleware(logger));