import React, { Component } from 'react';

class Trend extends Component {

    state = {
        hashtag:this.props.value.hashtag,
        teweets:this.props.value.teweets
    }

    render() {
        return (
            <div>
                <strong>{this.state.hashtag}</strong>
                <p>{this.state.teweets}</p>
            </div>
        );
    }
}

export default Trend;