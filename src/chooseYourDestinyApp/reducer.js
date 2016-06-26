import * as Actions from "./actions/index";
import * as ReduxActions from "redux-actions"

const initialState = {
    destiny: {
        character: null,
        fightingStyle: null,
        weapon: null
    }
};

let reducer;
export default reducer = ReduxActions.handleActions({
    
    [Actions.SET_CHOSEN_DESTINY](state = initialState, action) {
        const {value} = action.payload;
        return Object.assign({}, state, {destiny: value})
    }
    
}, initialState);
