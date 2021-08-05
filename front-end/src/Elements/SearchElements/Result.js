import React, { Component } from 'react';
import Efficiency from './Efficiency.js';

class Result extends Component {
	render() {
		const {
			energy_usage,
			modelNumber,
			most_efficient,
			name,
			regularPrice,
			url // a link where the product can be purchased
		} = this.props.item;
		return (
			<div>
				<div className="result modal flex-col-left card">
					<h2>{name}</h2>
					<h3>model: {modelNumber}</h3>
					<br /><br />
					<p className="product-price">${regularPrice}</p>
					<p className="product-link">{'Link to product: '}
						<a href={url} target="_blank" rel="noreferrer">{url}</a>
					</p>
				</div>
				<Efficiency usage={energy_usage} mostEff={most_efficient}>
				</Efficiency>
			</div>
		);
	}
}

export default Result;
