import React, { Component } from 'react';

class Back extends Component {
	constructor(props) {
		super(props);
		this.app = this.props.app;
	}
	render() {
		return (
			<div className="back card" onClick={this.app.goToHome}>
				<img src={"https://upload.wikimedia.org/wikipedia/commons/" + 
					"thumb/4/4c/Ic_arrow_back_48px.svg/1024px-Ic_arrow_back" + 
					"_48px.svg.png"} alt="go back"></img>
			</div>
		);
	}
}

export default Back;