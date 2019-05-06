import * as ActionTypes from './ActionTypes';

export const updateUserAuth = isUserAuthenticated => {
    return {
        type: ActionTypes.updateUserAuth,
        isUserAuthenticated: isUserAuthenticated
    }
}

export const reinitializeCentralState = () => {
    return {
        type: ActionTypes.reinitializeCentralState
    }
}