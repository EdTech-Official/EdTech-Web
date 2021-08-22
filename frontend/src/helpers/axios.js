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