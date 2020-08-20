import React, { Component, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./BlogPost.css";
import Post from "../../../components/Post/Post";
import axios from "axios";

class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            formBloPost: {
                userId: 1,
                id: 1,
                title: "",
                body: "",
            },
            isUpdate: false,
        };
    }
    getApi = () => {
        axios
            .get("http://localhost:3004/posts?_sort=id&_order=desc")
            .then((res) => {
                this.setState({
                    post: res.data,
                });
            });
    };
    postAPi = () => {
        axios.post("http://localhost:3004/posts", this.state.formBloPost).then(
            (res) => {
                this.setState({
                    isUpdate: false,
                    formBloPost: {
                        userId: 1,
                        id: 1,
                        title: "",
                        body: "",
                    },
                });
                this.getApi();
            },
            (err) => {
                console.log("errr : ", err);
            }
        );
    };
    putApi = () => {
        axios
            .put(
                `http://localhost:3004/posts/${this.state.formBloPost.id}`,
                this.state.formBloPost
            )
            .then((res) => {
                console.log(res);
                this.setState({
                    isUpdate: false,
                    formBloPost: {
                        userId: 1,
                        id: 1,
                        title: "",
                        body: "",
                    },
                });
                this.getApi();
            });
    };
    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            console.log(res);
            this.getApi();
        });
    };

    handleUpdate = (data) => {
        // console.log(data);
        this.setState(
            {
                formBloPost: data,
                isUpdate: true,
            },
            () => {
                // console.log(this.state.formBloPost);
                console.log(this.state);
            }
        );
    };

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this.setState({
        //             post: json,
        //         });
        //     });
        this.getApi();
    }

    handleFormChange = (event) => {
        // console.log("handleFormChange", event.target);
        let fromBlogPostNew = { ...this.state.formBloPost };
        // console.log("event name : ", event.target.name);
        let ts = new Date().getTime();
        if (!this.state.isUpdate) {
            fromBlogPostNew["id"] = ts;
        }
        fromBlogPostNew[event.target.name] = event.target.value;
        this.setState(
            {
                formBloPost: fromBlogPostNew,
            },
            () => {
                // console.log("Value obj Blogpost", this.state.formBloPost);
            }
        );
    };

    handleSubmit = () => {
        console.log(this.state.formBloPost);
        if (this.state.isUpdate) {
            this.putApi();
        } else {
            this.postAPi();
        }
    };

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h2>BlogPost Component</h2>
                </div>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label className="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="add title"
                        value={this.state.formBloPost.title}
                        onChange={this.handleFormChange}
                    />
                    <label className="body">Body</label>
                    <textarea
                        name="body"
                        placeholder="add title"
                        onChange={this.handleFormChange}
                        value={this.state.formBloPost.body}
                    />
                    {/* untuk di jsx pembanggilan function tanpa () */}
                    <button className="btn-submit" onClick={this.handleSubmit}>
                        Simpan
                    </button>
                </div>
                {this.state.post.map((post, index) => {
                    return (
                        // untuk di jsx pembanggilan function tanpa ()
                        <Post
                            data={post}
                            onDelete={this.handleRemove}
                            onUpdate={this.handleUpdate}
                            getDetail={this.handleDetail}
                            key={post.id}
                        />
                    );
                })}
            </Fragment>
        );
    }
}

export default BlogPost;
