import React, { Component } from 'react';
import Result from './Elements/SearchElements/Result.js';
import Back from './Elements/Back.js';

class Search extends Component {
	constructor(props) {
		super(props);
		this.app = this.props.App;
	}
	render() {
		const { product } = this.app.state;
		if (Object.entries(product).length !== 0) {
			return (
			<div className="search flex-col">
				<Back app={this.app}></Back>
				<h1>Our Recommendation</h1>
				<div>
					<Result item={product} key={product}></Result>
				</div>
			</div>
		);
		} else {
			return (
				<div>
					<Back app={this.app}></Back>
					<div className="search modal card">
						<p>Unfortunately, we couldn't find anything with your specifications.</p>	
					</div>
				</div>
			);
		}
	}
}

export default Search;
