import axios from 'axios';
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
} from './types';

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/users/me/`, config);
    
            if(res.data.profile.college === null || res.data.profile.college === null || res.data.profile.college === null) {
                dispatch({
                    type: USER_ACTIVATED_FAIL,
                })
            } else {
                dispatch({
                    type: USER_ACTIVATED_SUCCESS,
                })
            }
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
    
        } catch (error) {
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        })
    }
};

export const googleAuthenticate = (state, code) => async dispatch => {
    if(state && code && !localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const details = {
            'state': state,
            'code': code
        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/o/google-oauth2/?${formBody}`, config);
            console.log(res)

            dispatch({
                type: GOOGLE_AUTH_SUCCESS,
                payload: res.data
            })

            dispatch(load_user());
        } catch (error) {
            dispatch({
                type: GOOGLE_AUTH_FAIL
            })
        }
    }
}

export const check_authenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const body = JSON.stringify({ token: localStorage.getItem('access')});

        try {

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/jwt/verify/`, body, config );

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATION_SUCCESS
                });
            }

        } catch (error) {

            const body = JSON.stringify({ refresh: localStorage.getItem('refresh')});

            try {
                const new_access_token = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/jwt/refresh/`, body, config );

                dispatch({
                    type: NEW_ACCESS_TOKEN_FETCHED,
                    payload: new_access_token.data
                })
            } catch (error) {     
                dispatch({
                    type: AUTHENTICATION_FAIL
                });
            }
        }

    } else {
        dispatch({
            type: AUTHENTICATION_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
            headers: {
                'Content-Type': 'application/json'
            }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user());

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const signup = (first_name, email, password, re_password) => async dispatch => {
    const config = {
            headers: {
                'Content-Type': 'application/json'
            }
    };

    const body = JSON.stringify({ first_name, email, password, re_password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        })
    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        })
    }

}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};