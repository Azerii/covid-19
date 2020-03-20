import {
    FETCH_TOKEN,
    SAVE_POST,
    UPLOAD_IMAGE,
    GET_POSTS,
    SET_LOADING,
    SET_AUTH_ROUTE
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
        case UPLOAD_IMAGE: {
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        }
        case GET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_AUTH_ROUTE: {
            return {
                ...state,
                authRoute: 'localhost:3000/dashboard'
            }
        }
        default:
            return state;
    }
}