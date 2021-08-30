import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    LOGOUT,
    NEW_ACCESS_TOKEN_FETCHED,
    USER_ACTIVATED_SUCCESS,
    USER_ACTIVATED_FAIL,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: false,
    isActivated: false,
    user: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }

        case NEW_ACCESS_TOKEN_FETCHED:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }

        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }

        case USER_ACTIVATED_SUCCESS:
            return {
                ...state,
                isActivated: true
            }

        case USER_ACTIVATED_FAIL:
            return {
                ...state,
                isActivated: false
            }

        case AUTHENTICATION_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false
            }

        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }

        case GOOGLE_AUTH_SUCCESS:
            localStorage.setItem('access', payload.access);

            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }

        case GOOGLE_AUTH_FAIL:
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null, 
                isAuthenticated: false,
                user: null
            }

        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
    
        default:
            return state;
    }
}