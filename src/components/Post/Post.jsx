import React from "react";

const Post = (props) => {
    return (
        <>
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title" onClick={() => props.getDetail(props.data.id)}>{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    {/* pemnaggilan fungsi disini karena onclick merupakan fungsi yang mengembalikan data yg diterimanya */}
                    <button
                        className="remove"
                        onClick={() => props.onDelete(props.data.id)}
                    >
                        Remove
                    </button>
                    <button
                        className="update"
                        onClick={() => props.onUpdate(props.data)}
                    >
                        Update
                    </button>
                </div>
            </div>
        </>
    );
};

Post.defaultProps = {
    title: "This Is Title",
    desc: "This Is Description",
};

export default Post;
