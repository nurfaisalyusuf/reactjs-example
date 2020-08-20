import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
    return (
        <>
            <div className="youtube-wraper">
                <div className="img-thumb">
                    <img
                        src="https://i.ytimg.com/vi/CZKcmzNs5Jw/mqdefault.jpg"
                        alt=""
                    />
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </>
    );
};

YoutubeComponent.defaultProps = {
    time: "0:00",
    title: "Default Titile",
    desc: "Dfault Desc",
};
export default YoutubeComponent;
