import React, { Component } from 'react';
// import Efficiency from './Efficiency.js';

class Result extends Component {
	render() {
		const { 
			modelNumber,
			name,
			regularPrice,
			url // a link where the product can be purchased
		} = this.props.item;
		return (
			<div className="result modal flex-col-left">
				<h2>{name}</h2>
				<h3>model: {modelNumber}</h3>
				<br />
				{/*<Efficiency score={effScore}></Efficiency>*/}
				<br />
				<p className="product-price">${regularPrice}</p>
				<p className="product-link">{'Link to product: '}
					<a href={url} target="_blank" rel="noreferrer">{url}</a>
				</p>
			</div>
		);
	}
}

export default Result;
