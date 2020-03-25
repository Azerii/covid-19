import {
    FETCH_TOKEN,
    SAVE_POST,
    UPLOAD_IMAGE,
    GET_POSTS, 
    UPDATE_POST,
    SET_ACTIVE_U_STATE, SET_ACTIVE_P_STATE, SET_ACTIVE_A_STATE,
    SET_LOADING,
    SET_LOGGED_IN,
    SET_LOGGED_OUT
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FETCH_TOKEN: {
            return {
                ...state,
                token: action.payload,
                loading: false
            }
        }
        case SAVE_POST: {
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        }
        // case UPLOAD_IMAGE: {
        //     return {
        //         ...state,
        //         post: action.payload,
        //         loading: false
        //     }
        // }
        case GET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                post: action.payload
            }
        }
        case SET_ACTIVE_U_STATE: {
            return {
                ...state,
                activeU: true,
                activeP: false,
                activeA: false
            }
        }
        case SET_ACTIVE_P_STATE: {
            return {
                ...state,
                activeU: false,
                activeP: true,
                activeA: false
            }
        }
        case SET_ACTIVE_A_STATE: {
            return {
                ...state,
                activeU: false,
                activeP: false,
                activeA: true
            }
        }
        case SET_LOGGED_IN: {
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        }
        case SET_LOGGED_OUT: {
            return {
                ...state,
                loggedIn: false,
                loading: false
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}