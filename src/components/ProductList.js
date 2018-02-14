import React from "react";
import PropTypes from "prop-types";
import { Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../actionCreators";

const styles = {
    products: {
        display: "flex",
        alignItems: "stretch",
        flexWrap: "wrap",
    },
    product: {
        width: "220px",
        marginLeft: 10,
        marginRight: 10,
    },
};

export const ProductList = ({ products }) => (
    <div style={styles.products}>
        {products.map(product => (
            <div className="thumbnail product" style={styles.product} key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="caption">
                    <h4>{product.name}</h4>
                    <p>
                        <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
                    </p>
                </div>
            </div>
        ))}
    </div>
);

const mapStateToProps = state => (
    { products: state.products }
);

const mapDispatchToProps = dispatch => (
    { addToCart(product) { dispatch(addToCart(product)); } }
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
