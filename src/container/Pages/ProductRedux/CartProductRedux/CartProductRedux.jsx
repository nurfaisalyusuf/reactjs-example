import React, { Component, Fragment } from "react";
import CounterRedux from "./CounterRedux";

export default class CartProductRedux extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="product-img">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Bumbu/Kaldu+Jamur+Ayam.jpeg" />
                    </div>
                    <p className="product-title">Daging Ayam</p>
                    <p className="product-price">
                        Rp. 40.0000
                    </p>
                    <CounterRedux onCounterChange={(value) => this.props.onCounterChange(value)}/>
                </div>
            </>
        );
    }
}
