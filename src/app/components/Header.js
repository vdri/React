import React, {Component} from "react";

import {NavLink} from "react-router-dom";

export class Header extends Component {
        render() {
                console.log("header rendered called");
            return (
<div>
    <h2>{this.props.title}</h2>

    <span>  {this.props.offer.name}-{this.props.offer.price}</span>
    <br />

    <div>
          <NavLink to="/" exact 
                            className="button" 
                            activeClassName="success">Home</NavLink>    
          <NavLink to="/about" 
                  className="button" 
                  activeClassName="success">About</NavLink>  
          <NavLink to="/contact/blr" 
                  className="button" 
                  activeClassName="success">Contact</NavLink>  
          <NavLink to="/cart" 
                  className="button" 
                  activeClassName="success"
                  > Cart [{this.props.cartLength}]</NavLink>  
          <NavLink to="/products" 
                  className="button" 
                  activeClassName="success">Products</NavLink>  
    </div>
</div>
            )
        }

}