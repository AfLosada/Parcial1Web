import React, { Component } from 'react';

class MenuObj extends Component {

    state = {
        image: this.props.value.image,
        text: this.props.value.text
    }

    render() {

        console.log(this);

        return (
            <div>
                <img src={this.state.image} alt ="hola">{this.state.text}</img>
            </div>
        );
    }
}

export default MenuObj;