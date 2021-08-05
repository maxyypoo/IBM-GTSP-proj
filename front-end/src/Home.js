import React, { Component } from 'react';
import DropDown from './Elements/DropDown.js';

class Home extends Component {
	static updateHomeForm(data) {
		const { budgetHigh, product } = data;
		document.getElementById("budgetHigh").value = budgetHigh;
		document.getElementById("product").value = product;
	}

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			budgetLow: "",
			budgetHigh: "",
			product: "",
			volumeLow: "",
			volumeHigh: ""
		};

		this.products = ["fridge"];
		this.advanced = false;
		this.search = this.search.bind(this);
		this.toggleAdvanced = this.toggleAdvanced.bind(this);
		this.app = this.props.App;
	}

	search() {
		const nameVal = "blank";
		const budgetHighVal = document.getElementById("budgetHigh").value;
		const productVal = document.getElementById("product").value;
		if (!this.advanced) {
			if (!Number.isNaN(budgetHighVal) && Number(budgetHighVal) >= 500 && productVal) {
				const data = {
					name: nameVal,
					budget_low: 1,
					budget_high: budgetHighVal,
					product: productVal,
					volume_low: 1,
					volume_high: 1000000,
				}
				this.setState({
					name: data['name'],
					budgetLow: data['budget_low'],
					budgetHigh: data['budget_high'],
					product: data['product'],
					volumeLow: data['volume_low'],
					volumeHigh: data['volume_high'],
				});
				this.app.search(data);
			} else {
				alert("Please enter a budget (a number >= 500)");
			}
		} else {
			const budgetLowVal = document.getElementById('budgetLow').value;
			const volumeLowVal = document.getElementById('volumeLow').value;
			const volumeHighVal = document.getElementById('volumeHigh').value;
			if (!Number.isNaN(budgetHighVal) && Number(budgetHighVal) >= 500 
			&& !Number.isNaN(budgetLowVal) && Number(budgetLowVal) >= 1 
			&& Number(budgetHighVal) >= Number(budgetLowVal)
			&& productVal
			&& !Number.isNaN(volumeHighVal) && Number(volumeHighVal) >= 10
    		&& !Number.isNaN(volumeLowVal) && Number(volumeLowVal) >= 1
			&& Number(volumeHighVal) >= Number(volumeLowVal)) {
				const data = {
					name: nameVal,
					budget_low: budgetLowVal,
					budget_high: budgetHighVal,
					product: productVal,
					volume_low: volumeLowVal,
					volume_high: volumeHighVal,
				}
				this.setState({
					name: data['name'],
					budgetLow: data['budget_low'],
					budgetHigh: data['budget_high'],
					product: data['product'],
					volumeLow: data['volume_low'],
					volumeHigh: data['volume_high'],
				});
				this.app.search(data);
			} else {
				alert("Please enter valid values.");
			}
		}
	}

	toggleAdvanced() {
		const container = document.getElementById('home');
		const adv = document.getElementById('advanced-info');
		if (!this.advanced) {
			container.classList.add('longer');
			adv.classList.remove('do-not-render');
			this.advanced = true;
		} else {
			adv.classList.add('do-not-render');
			container.classList.remove('longer');
			this.advanced = false;
		}
	}
	
	render() {
		return (
			<div id="home" className="home modal flex-col card">
				<h1 id="welcome">Search Efficient Products</h1>
				<label htmlFor="budgetHigh">Budget (min 500)</label>
				<input type="number" id="budgetHigh" name="budgetHigh" required min="500" />
				<label htmlFor="product_type">product type</label>
				<DropDown name="product_type" id="product" itemList={this.products} />
				<button id="enable-advanced" onClick={this.toggleAdvanced}>Advanced</button>
				<div id="advanced-info" className="flex-col do-not-render">
					<label htmlFor="volumeHigh">Volume upper bound in ft<sup>3</sup> (min 10)
					</label>
					<input type="number" id="volumeHigh" name="volumeHigh" min="1" />
					<label htmlFor="volumeLow">Volume lower bound (min 1)
					</label>
					<input type="number" id="volumeLow" name="volumeLow" min="1" />
					<label htmlFor="budgetLow">Minimum Price (min 1)</label>
					<input type="number" id="budgetLow" name="budgetLow" min="1" />
				</div>
				<button id="submit" onClick={this.search}>Search</button>
			</div>
		);
	}
}

export default Home;
