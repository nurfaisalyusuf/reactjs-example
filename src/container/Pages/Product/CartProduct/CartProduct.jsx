import React, { Component, Fragment } from "react";

export default class CartProduct extends Component {
    state = {
        order: 0,
        price: 40000,
        sumaryPrice: 0,
    };

    handleCunterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    };

    summarySum = (newOrder) => {
        this.setState({
            sumaryPrice: this.state.price * newOrder
        })
    }

    handlePlus = () => {
        this.setState(
            {
                order: this.state.order + 1,
            },
            () => {
                this.handleCunterChange(this.state.order);
                this.summarySum(this.state.order);
            }
        );
    };

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState(
                {
                    order: this.state.order - 1,
                },
                () => {
                    this.handleCunterChange(this.state.order);
                    this.summarySum(this.state.order);
                }
            );
        }
    };
    render() {
        return (
            <>
                <div className="card">
                    <div className="product-img">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Bumbu/Kaldu+Jamur+Ayam.jpeg" />
                    </div>
                    <p className="product-title">Daging Ayam</p>
                    <p className="product-price">
                        Rp. {this.state.price} x {this.state.order} = 
                        {this.state.sumaryPrice}
                    </p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>
                            -
                        </button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>
                            +
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
