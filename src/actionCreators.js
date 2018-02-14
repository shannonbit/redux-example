import axios from "axios";

const loadProducts = () => (
    dispatch => (
        axios.get("http://localhost:3001/products")
            .then(response => (
                dispatch(
                    { type: "REPLACE_PRODUCTS", products: response.data },
                )))
    )
);

const addToCart = product => ({ type: "ADD_TO_CART", product });

const removeFromCart = product => ({ type: "REMOVE_FROM_CART", product });

export { addToCart, loadProducts, removeFromCart };
