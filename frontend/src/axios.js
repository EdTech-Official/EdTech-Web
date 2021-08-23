import axios from 'axios';

export default (history = null) => {
const baseURL = `${process.env.REACT_APP_BASE_URL}/api`;

  let headers = {
	'Content-Type': 'application/json',
	accept: 'application/json',
  };

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.access_token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
	timeout: 5000,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("token");

        if (history) {
          history.push("/auth/login");
        } else {
          window.location = "/auth/login";
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return axiosInstance;
};

















import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/api`;

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
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
			originalRequest.url === baseURL + 'auth/refresh/'
		) {
			window.location.href = '/auth';
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
						.post('/auth/refresh/', { refresh: refreshToken })
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
					window.location.href = '/auth';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/auth';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;





















import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

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

export const getBooks = async (subjectCode, currentUserData) => {
    let result;
    await api
      .get(`/api/subject-list/${currentUserData[0].value}/`, {
        params: {
          page: 1,
          page_size: 100,
          subject_code: subjectCode,
          year: currentUserData[2].value,
          branch__branch_code: currentUserData[1].value,
          fields: "textbooks"
        },
      })
      .then((res) => {
        result = res.data.results[0].textbooks;
    });
    return result;
};

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