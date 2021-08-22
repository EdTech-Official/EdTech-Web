import axios from 'axios';

export const facebookLogin = (accesstoken) => {
	axios
		.post(`${process.env.REACT_APP_BASE_URL}/auth/convert-token`, {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: process.env.REACT_APP_CLIENT_ID,
			client_secret: process.env.REACT_APP_CLIENT_SECRET,
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};