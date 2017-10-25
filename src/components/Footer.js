import React, { Component, PropTypes } from 'react';


const footerData = [
	{title: "Location", 
	content: "3481 Melrose Place <br/>Beverly Hills, CA 90210"},
	{title: "Around the Web", content: [
		{url: "#", key: "facebook"},
		{url: "#", key: "google-plus"},
		{url: "#", key: "twitter"},
		{url: "#", key: "linkedin"},
		{url: "#", key: "dribbble"}
	]},
	{title: "About Freelancer", 
	content: "Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap."}
]

class Element extends Component {
	render() {
		return (
			<div className="footer-col col-md-4">
				<h3>{this.props.title}</h3>
			    <p>{this.props.content}</p>
			</div>
		);
	}
}

class TextFooter extends Component {
	render() {
		return (
			<Element title={this.props.title} 
					 content={this.props.content}/>
		);
	}
}

class Footer extends Component {
    
    render() {
        return (
            <footer className="text-center">
		      <div className="footer-above">
		        <div className="container">
		          <div className="row">
		          	<TextFooter {...footerData[0]} />
		          	<TextFooter title="Around the Web" 
		          				content="Hello Content..." />
		          	<TextFooter {...footerData[2]} />
		            <div className="footer-col col-md-4">
		              <h3>Around the Web</h3>
		              <ul className="list-inline">
		                <li className="list-inline-item">
		                  <a className="btn-social btn-outline" 
		                  	 href="#">
		                    <i className="fa fa-fw fa-facebook"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a className="btn-social btn-outline" 
		                  	 href="#">
		                    <i className="fa fa-fw fa-google-plus"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a className="btn-social btn-outline" 
		                  	 href="#">
		                    <i className="fa fa-fw fa-twitter"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a className="btn-social btn-outline" 
		                  	 href="#">
		                    <i className="fa fa-fw fa-linkedin"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a className="btn-social btn-outline" 
		                  	 href="#">
		                    <i className="fa fa-fw fa-dribbble"></i>
		                  </a>
		                </li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="footer-below">
		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12">
		              Copyright &copy; Your Website 2017
		            </div>
		          </div>
		        </div>
		      </div>
		    </footer>
        );
    }
}

export default Footer;
