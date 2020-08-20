import React, { Component } from "react";
import YoutubeComponent from "../../../components/YoutubeComp/YoutubeComponent";

class Youtube extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>Yourtube Component</h2>
                </div>
                <hr />
                <YoutubeComponent />
                <YoutubeComponent
                    time="12:00"
                    title="Title 1"
                    desc="Description 1"
                />
                <YoutubeComponent
                    time="12:00"
                    title="Title 1"
                    desc="Description 1"
                />
            </>
        );
    }
}

export default Youtube;
