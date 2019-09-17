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
                
            </div>
        );
    }
}

export default Tweet;