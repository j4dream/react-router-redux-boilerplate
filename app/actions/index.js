import CONST from '../constants'

export function addCampaign(name) {
	return { type: CONST.CAMPAIGN_ADD, name };
}

// async expample
export function getCampaigns() {
	return async (dispatch) => {
        try {
            const { code, message } = await wlogin(emai, passworld);
            if(code === 0) {
                router.push('/campaigns');
                dispatch({type: CONST.LOGIN});
            } else {
                alert(message);
            }
        } catch (error) {
            alert(message);
        }       
    }
}
