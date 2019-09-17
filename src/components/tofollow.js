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
                
            </div>
        );
    }
}

export default ToFollow;