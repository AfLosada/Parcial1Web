import React, { Component } from 'react';
import MenuObj from "./menuObj";

class Menu extends Component {

    state = {
        objetos: this.props.menu
    }

    render() {

        console.log(this);
        return (
            <div>
                <ul>
                    {this.state.objetos.map(e=> <MenuObj value = {e}/>)}
                </ul>
            </div>
        );
    }

}

export default Menu;