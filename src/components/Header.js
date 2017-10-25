import React, { Component, PropTypes } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
	          <div className="container">
	            <img className="img-fluid" 
	            	 src="img/profile.png" 
	            	 alt=""/>
	            <div className="intro-text">
	              <span className="name">{this.props.title}</span>
	              <hr className="star-light"/>
	              <span className="skills">{this.props.caption}</span>
	            </div>
	          </div>
	        </header>
        );
    }
}

export default Header;
