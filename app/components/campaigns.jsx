import React from 'react';
import ReactDom from 'react-dom'

export class AddCampaigns extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Campaigns';
	}

	handleClick() {
		const node = ReactDom.findDOMNode(this.refs.input);
		const text = node.value.trim();
		this.props.onAddCampaign(text);
		node.value = '';
	}

	render() {
		return (
			<div>
				<input type='text' ref='input' />
				<button onClick={e => this.handleClick(e)}>
					Add
				</button>
			</div>
		);
	}
}

class Campaign extends React.Component {
	render() {
		return (
			<li >
				{this.props.name}
			</li>
		)
	}
}


export class CampaignLists extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'CampaignLists';
	}
	render() {
		return (
			<ul>{this.props.campaigns.map( (v, i) => 
				<Campaign key={i} {...v}/>
			 )}</ul>
		);
	}
}


