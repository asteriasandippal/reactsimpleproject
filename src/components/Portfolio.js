import React from 'react';

import Section from './Section';

class PortfolioItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasImage: true
		}

		this.onUpdateImageSate = this.onUpdateImageSate.bind(this);
	}

	onUpdateImageSate(event) {
		console.log(event);
		console.log(this);
		this.setState({
			hasImage: false
		});
	}

	render() {
		const img = this.props.data.img;
		const link = this.props.data.link;

		return (
			<div className="col-sm-4 portfolio-item" 
				 onClick={this.onUpdateImageSate}>
		        <a className="portfolio-link" 
		           href={link} 
		           data-toggle="modal">
		          <div className="caption">
		            <div className="caption-content">
		              <i className="fa fa-search-plus fa-3x"></i>
		            </div>
		          </div>
		          {this.state.hasImage ? <img className="img-fluid" 
		          src={`../src/img/portfolio/${img}.png`} 
		          alt=""/> : null}
		        </a>
		    </div>
		);
	}
}

const portfolioModel = [
	{img: 'cake', link: 'https:google.co.in'},
	{img: 'circus', link: 'https://www.safaribooksonline.com'},
	{img: 'game', link: 'https://reactjs.org'},
	{img: 'safe', link: 'http://redux.js.org'},
	{img: 'submatine', link: 'https://redux-form.com/7.1.1/'},
	{img: 'cabin', link: 'https://en.bem.info/methodology/'},
];

export default class Portfolio extends React.Component {
  
	constructor(props) {
		super(props);
	}

  render() {

  	const children =[];
  	for (const item of portfolioModel) {
  		children.push(<PortfolioItem data={item} 
  									 key={children.length}/>);
  	}

    return (
      	<Section id="portfolio" 
      			 title="Portfolio" 
      			 titlebarcolor="primary">
	        {children}
		</Section>
    );
  }
}
