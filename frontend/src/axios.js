import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`
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
    await api
      .put(`/auth/profile/me/`, data)
      .then(window.location.href = "/timetable");
}