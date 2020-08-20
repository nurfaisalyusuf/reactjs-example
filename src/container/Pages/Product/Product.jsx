import React, { Component, Fragment } from "react";
import "./Product.css";
import CartProduct from "./CartProduct/CartProduct";

export default class Product extends Component {
    state = {
        order: 0,
    };

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue,
        });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <h2>Product Component</h2>
                </div>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/etanee-white.c703d454.svg" />
                    </div>
                    <div className="trolley">
                        <img src="https://etanee.id/static/media/etanee-white.c703d454.svg" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CartProduct
                    onCounterChange={(value) => this.handleCounterChange(value)}
                />
            </Fragment>
        );
    }
}
