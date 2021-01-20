import { SIGN_IN, SIGN_OUT } from '../actions/types';
// 1.1
const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case SIGN_OUT:
            return { ...state, isSignedIn: false };
        default:
            return state;
    };
};



/*
Capital letters indicate that this is supposed to be a true constant object and the values inside should not be changed. 
*/