import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styledcomponents from "styled-components";gi


export default class YNavbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-primary  navbar-dark px-sm-5">
<Link to="/">
    <img src= {logo} alt="store " className="navbar-brand"/>

</Link>
<ul className= "navbar-nav align-item-center">
    <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
            products
        </Link>
    </li>
</ul>
<Link to ="/cart" className="ml-auto">
    <button>
        <i className = "fas fa-cart-plus"/>
        My Cart
    </button>
</Link>
           </nav>
        );
    }
}
