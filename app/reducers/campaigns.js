import CONST from '../constants'

export default function campaigns(state=[], action) {
	switch (action.type) {
		case CONST.CAMPAIGN_ADD: 
			return [...state,
				{
					name: action.name,
					status: 'DRAFT'
				}
			];
		default:
			return state;
	}
}