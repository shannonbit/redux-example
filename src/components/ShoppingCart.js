import React from "react";
import PropTypes from "prop-types";
import { Panel, Table, Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../actionCreators";

const styles = {
    footer: {
        fontWeight: "bold",
    },
};


const ShoppingCart = ({ cart }) => (
    <Panel header="Shopping Cart">
        <Table fill>
            <tbody>
                {cart.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td className="text-right">${product.price}</td>
                        <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" style={styles.footer}>
                        Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
                    </td>
                </tr>
            </tfoot>
        </Table>
    </Panel>
);

const mapStateToProps = state => (
    { cart: state.cart }
);

const mapDispatchToProps = dispatch => (
    { removeFromCart(product) { dispatch(removeFromCart(product)); } }
);

ShoppingCart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
