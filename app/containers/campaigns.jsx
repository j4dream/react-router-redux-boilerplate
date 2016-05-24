import React from 'react';
import { AddCampaigns, CampaignLists } from '../components/campaigns';
import { addCampaign } from '../actions';
import {connect} from 'react-redux'

@connect(store => ({
    campaigns: store.campaigns
}), {
    addCampaign
})
export default class Campaigns extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Campaigns';
	}
	render() {
		const { campaigns, addCampaign } = this.props;
		return (
			<div>
				<h1>Campaigns</h1>
				<AddCampaigns onAddCampaign={ name =>
					addCampaign(name)
				 }/> 
				<CampaignLists campaigns={campaigns}/>
			</div>
		);
	}
}