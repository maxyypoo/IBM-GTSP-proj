import React, { Component } from 'react';

class Efficiency extends Component {
	constructor(props) {
		super(props);
		/* todo: color rating based on efficiency score */
		this.score = this.score.bind(this);
	}
	score() {
		return this.props.score;
	}
	getScoreRange(score) {
		if (score < 1) {
			return "bad";
		} else if (score < 2) {
			return "good";
		} else {
			return "very good";
		}
	}
	scale(score) {
		const totalLen = 100;
		const maxScore = 3;
		return score/maxScore * totalLen + "px";
	}
	render() {
		return (
			<div className="product-effScore flex-row">
				<p>Efficiency Score: {this.score()}</p>
				<div className="flex-col-left">
					<p>Level: {this.getScoreRange(this.score())}</p>
					<div className="eff-color-box"></div>
				</div>
			</div>
		);
	}
}

export default Efficiency;