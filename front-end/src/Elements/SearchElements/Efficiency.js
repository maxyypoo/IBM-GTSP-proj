import React, { Component } from 'react';

class Efficiency extends Component {
	/* todo: color rating based on efficiency score */
	render() {
		const { usage, mostEff } = this.props;
		return (
			<div className="product-eff">
				<div className="energy-info dark card">Energy Usage: {usage} kWh/y</div>
				<div className="energy-info card">
					<a href="https://www.energystar.gov/products/most_efficient">
					Most Efficient (Energy Star)</a>: {mostEff}
				</div>
				<div className="energy-info card">
					Estimated Annual <a target="_blank" href="https://www.energystar.gov/products/appliances/refrigerators/flip-your-fridge" rel="noreferrer">Bill Savings</a>: $240
				</div>
			</div>
		);
	}
}

export default Efficiency;