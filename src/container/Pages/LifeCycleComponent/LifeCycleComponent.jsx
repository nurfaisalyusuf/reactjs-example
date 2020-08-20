import React, { Component } from "react";
import "./LifeCycleComponent.css";

class LifeCycleComponent extends Component {
    constructor(props) {
        // fungsi ini di panggil di awal
        super(props);
        this.state = {
            count: 1,
        };
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        // ini dipanggil kedua setelah constructor
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        // ini di panggil terakhir saat semua ter-render
        console.log("componentDidMount");
        // setTimeout(() => {
        //     this.setState({
        //         count: 5,
        //     });
        // }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // fungsi ini digunakan jika kita menambahkan perubahan/setState di fungsi componentDidMount harus direturn true untuk menjalakan prosesnya
        // fungsi ini digunakan untuk mengahruskan atau tidak mengahruskan di update atau tidaknya state/props
        // fungsi ini bisa menghentikan jika stok kurang bisa berhenti menambah barang
        console.group("shouldComponentUpdate");
        // console.log("nextProps :", nextProps);
        console.log("nextState :", nextState);
        console.log("thisState :", this.state);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        // fungsi ini digunakan jika kita menambahkan perubahan/setState di fungsi componentDidMount harus direturn true untuk menjalakan prosesnya
        console.log("getSnapshotBeforeUpdate");
        return null;
    };

    componentDidUpdate(prevProps, prevState) {
        // fungsi ini dipanggil jika componentDidMount mengalami perubahan state
        console.group("componentDidUpdate");
        console.log("prevProps : ", prevProps);
        console.log("prevState : ", prevState);
        console.groupEnd();
    }

    componentWillUnmount() {
        // fungsi ini digunakan ketika componentnya tidak panggil atau di hilangkan dari parent component nya
        console.log("componentWillUnmount");
    }
    changedCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    render() {
        // fungsi ini di panggil ketiga saat pertama refresh
        console.log("render");
        return (
            <>
            <div>
                    <h2>LifeCycle Component</h2>
                </div>
                <hr />
                <button className="btn" onClick={this.changedCount}>
                    Commponnent Button {this.state.count}
                </button>
            </>
        );
    }
}

export default LifeCycleComponent;
