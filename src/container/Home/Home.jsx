import React, { Component } from "react";
import YoutubeComponent from "../../components/YoutubeComp/YoutubeComponent";
import Product from "../Pages/Product/Product";
import LifeCycleComponent from "../Pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../Pages/BlogPost/BlogPost";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import Youtube from "../Pages/Youtube/Youtube";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import ProductRedux from "../Pages/ProductRedux/ProductRedux";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showComponents: true,
        };
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponents: false,
        //     });
        // }, 5000);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/product-redux">Product Redux</Link>
                        <Link to="/youtube">youtube</Link>
                        <Link to="/lifecycle">lifecycle</Link>
                    </div>
                    {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/product" component={Product} />
                        <Route path="/product-redux" component={ProductRedux} />
                        <Route path="/youtube" component={Youtube} />
                        <Route path="/lifecycle" component={LifeCycleComponent} />
                        <Route path="/detail-post/:id" component={DetailPost} />
                        <Route path="/" exact component={BlogPost} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
