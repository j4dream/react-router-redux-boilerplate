import chai from 'chai'
import * as actions from '../../app/actions'

let expect = chai.expect

describe('actions', () => {
	it('should create an action to add a campaign', () => {
		const name = 'First Name'
		const expectedAction = {
			type: actions.ADD_CAMPAIGN,
			name
		}
		expect(actions.addCampaign(name)).to.deep.equal(expectedAction)
	})
})