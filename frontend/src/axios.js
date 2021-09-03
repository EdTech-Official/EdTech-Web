import axios from 'axios';

const token = localStorage.getItem('access');

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `JWT ${token}`
    }
})

export const getCollegeList = async () => {
    let result;
    await axios
      .get(`/api/college/`, {
        params: {
          fields: "value,label"
        },
      })
      .then((res) => {
        result = res.data.results;
    });
    return result;
};

export const getBranchList = async (college) => {
    let result;
    await axios
      .get(`/api/college/${college}/`)
      .then((res) => {
        result = res.data;
    });
    return result;
};

export const getYearList = async (college) => {
  let result;
  await axios
    .get(`/api/college/${college}/`)
    .then((res) => {
      result = res.data;
  });
  return result;
};

export const updateUserProfile = async (data) => {
    await axiosInstance
      .put(`/auth/profile/me/`, data)
}

export const getBooks = async (book) => {
  let result;
  return result = await axiosInstance
  .get(`/api/textbook/${book}`)
}

export const getMaterials = async (book) => {
  let result;
  return result = await axiosInstance
  .get(`/api/material/${book}`)
}

export default axiosInstance