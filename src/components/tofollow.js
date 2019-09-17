import React, { Component } from 'react';

class ToFollow extends Component {

    state = {
        avatar: this.props.value.avatar,
        first_name: this.props.value.first_name,
        last_name: this.props.value.last_name,
        nick: this.props.value.nick
    }


    render() {
        return (
            <div>
                <strong>{this.state.avatar}</strong>
                <p>{this.state.first_name}</p>
                <strong>{this.state.last_name}</strong>
                <p>{this.state.nick}</p>
            </div>
        );
    }
}

export default ToFollow;