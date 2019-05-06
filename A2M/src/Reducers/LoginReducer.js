import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    isUserAuthenticated: false,
    userName: '',
    logoutInitiated: false
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.updateUserAuth:
            return {
                ...state,
                isUserAuthenticated: action.isUserAuthenticated
            }
        case ActionTypes.updateUserName:
            return {
                ...state,
                userName: action.userName
            }
        case ActionTypes.reinitializeCentralState:
            return {
                ...initialState,
                logoutInitiated: true
            }
        default :
            return state;
    }

}

export default loginReducer;