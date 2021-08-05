import React, { Component } from 'react';

class DropDown extends Component {
	getList(items) {
		return items.map(e => this.getItem(e));
	}

	getItem(item) {
		return (<option value={item} key={item}>{item}</option>);
	}

	render() {
		const { name, id, itemList } = this.props;
		return (
			<select name={name} id={id}>{this.getList(itemList)}</select>
		);
	}
}

export default DropDown;
