import React, { Component } from 'react';

class Tweet extends Component {

    state = {
        avatar:this.props.value.avatar,
        first_name:this.props.value.first_name,
        last_name:this.props.value.last_name,
        nick:this.props.value.nick,
        date:this.props.value.date,
        content:this.props.value.content,
        retweets:this.props.value.retweets
    }

    render() {
        return (
            <div>
                <strong>{this.state.avatar}</strong>
                <p>{this.state.first_name}</p>
                <strong>{this.state.last_name}</strong>
                <p>{this.state.nick}</p>
                <p>{this.state.date}</p>
                <strong>{this.state.content}</strong>
                <p>{this.state.retweets}</p>
            </div>
        );
    }
}

export default Tweet;