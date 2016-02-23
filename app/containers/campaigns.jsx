import React from 'react';
import { AddCampaigns, CampaignLists } from '../components/campaigns';
import { addCampaign } from '../actions';
import {connect} from 'react-redux'

class Campaigns extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Campaigns';
	}
	render() {
		const { dispatch, campaigns } = this.props
		return (
			<div>
				<h1>Campaigns</h1>
				<AddCampaigns onAddCampaign={ name =>
					dispatch(addCampaign(name))
				 }/> 
				<CampaignLists campaigns={campaigns}/>
			</div>
		);
	}
}

function getCampaigns(state) {
	return {
		campaigns: state.campaigns
	}
}

export default connect(getCampaigns)(Campaigns);