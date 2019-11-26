import React, {Component} from 'react';
import {Link, NavLink, Redirect} from "react-router-dom";

class District extends Component {

    handleClick(district) {
        this.props.handleClick(district);
    }

    render() {
        let item  = this.props.item;
        return (
            <li>
                <NavLink activeClassName="active" to={`/districts/${item.id}/sub-counties`} id={item.id} style={{textDecoration:'none'}}  onClick={this.handleClick.bind(this, item)}>{item.name}
                </NavLink>
            </li>
        );
    }
}

export default District;

