import React, { Component, PropTypes } from 'react';

class NavItem extends Component {
	static get defaultProps() {
		return {
			className: "page-scroll nav-item"
		}
	}
	render() {
		return (
			<li {...this.props}>
              <a className="nav-link js-scroll-trigger" 
              	 href={this.props.link}>
              	 {this.props.name}</a>
            </li>
		);
	}
};

class Navigation extends Component {

    render() {
        return (
          	<nav className="navbar navbar-expand-lg navbar-light fixed-top" 
          		 id="mainNav">
	          <div className="container">
	            <a className="navbar-brand js-scroll-trigger" 
	               href="#page-top">
	               Start Bootstrap</a>
	            <button className="navbar-toggler navbar-toggler-right" 
	            		type="button" 
	            		data-toggle="collapse" 
	            		data-target="#navbarResponsive" 
	            		aria-controls="navbarResponsive" 
	            		aria-expanded="false" 
	            		aria-label="Toggle navigation">
	              Menu
	              <i className="fa fa-bars"></i>
	            </button>
	            <div className="collapse navbar-collapse" 
	            	 id="navbarResponsive">
	              <ul className="navbar-nav ml-auto">

	              	<NavItem link="#portfolio" name="Portfolio"/>
	              	<NavItem link="#about" name="About"/>
	              	<NavItem link="#contact" name="Contact"/>

	              </ul>
	            </div>
	          </div>
	        </nav>  
        );
    }
}

export default Navigation;
