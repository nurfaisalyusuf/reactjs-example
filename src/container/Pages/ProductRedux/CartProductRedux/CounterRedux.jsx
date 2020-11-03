import React, { Component } from "react";
import { connect } from "react-redux";

class CounterRedux extends Component {
    // state = {
    //     order: 0,
    //     price: 40000,
    //     sumaryPrice: 0,
    // };

    handleCunterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    };

    // summarySum = (newOrder) => {
    //     this.setState({
    //         sumaryPrice: this.state.price * newOrder,
    //     });
    // };

    handlePlus = () => {
        this.setState(
            {
                order: this.state.order + 1,
            },
            () => {
                this.handleCunterChange(this.state.order);
                // this.summarySum(this.state.order);
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
                    // this.summarySum(this.state.order);
                }
            );
        }
    };
    render() {
        console.log("list props : ", this.props)
        return (
            <>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>
                        -
                    </button>
                    <input type="text" value={this.props.order} readOnly />
                    <button className="plus" onClick={this.handlePlus}>
                        +
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    // memanggil global state
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(CounterRedux);
