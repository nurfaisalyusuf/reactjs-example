import React, { Component } from 'react'
import axios from 'axios'

class DetailPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post: {
                 title: '',
                 body: ''
             }
        }
    }
    
    componentDidMount() {
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id;
        axios
            .get(`http://localhost:3004/posts/${id}`)
            .then((res) => {
                this.setState({
                    post: {
                        title: res.data.title,
                        body: res.data.body,
                    }
                })
            });
    }
    
    render() {
        return (
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost
