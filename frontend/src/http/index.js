import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
    // Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			window.location.href = '/login/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				// console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('/token/refresh/', { refresh: refreshToken })
						.then((response) => {
							localStorage.setItem('access_token', response.data.access);
							localStorage.setItem('refresh_token', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/login/';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//     }
// })

// export const getSubjects = async (currentUserData) => {
//     let result;
//     await api
//       .get(
//         `/api/subject-list/${currentUserData[0].value}/`,
//         {
//           params: {
//             page: 1,
//             page_size: 100,
//             year: currentUserData[2].value,
//             branch__branch_code: currentUserData[1].value
//           },
//         }
//       )
//       .then((res) => {
//         result = res.data.results;
//       });
//     return result;
// };

// export const getBooks = async (subjectCode, currentUserData) => {
//     let result;
//     await api
//       .get(`/api/subject-list/${currentUserData[0].value}/`, {
//         params: {
//           page: 1,
//           page_size: 100,
//           subject_code: subjectCode,
//           year: currentUserData[2].value,
//           branch__branch_code: currentUserData[1].value,
//           fields: "textbooks"
//         },
//       })
//       .then((res) => {
//         result = res.data.results[0].textbooks;
//     });
//     return result;
// };

// export const getFacultyDetails = async (currentUserData) => {
//   let result;
//   await api
//     .get(`/api/faculty-list/${currentUserData[0].value}`, {
//       params: {
//         page: 1,
//         page_size: 100
//       },
//     })
//     .then((res) => {
//       result = res.data.results;
//       console.log(result)
//     });
//   return result;
// };

// export default api;