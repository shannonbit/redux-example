import React from "react";
import { Navbar, Grid, Row, Col } from "react-bootstrap";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const App = () => (
    <div>
        <Navbar inverse staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Ecommerce</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        <Grid>
            <Row>
                <Col sm={8}>
                    <ProductList />
                </Col>
                <Col sm={4}>
                    <ShoppingCart />
                </Col>
            </Row>
        </Grid>
    </div>
);

export default App;
