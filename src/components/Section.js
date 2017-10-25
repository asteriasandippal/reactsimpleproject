import React, { Component, PropTypes } from 'react';

class Section extends Component {

    render() {
        return (
        <section className={this.props.className} 
        		 id={this.props.id}>
		      <div className="container">
		        <h2 className="text-center">{this.props.title}</h2>
		        <hr className={`star-${this.props.titlebarcolor}`}/>
		        <div className="row">
		          {this.props.children}
		        </div>
		      </div>
		    </section>
        );
    }
}

export default Section;
