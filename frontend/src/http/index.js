import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export const getSubjectsWithPortion = async (currentUserData) => {
    let result;
    await api
      .get(
        `/api/subject-list/${currentUserData[0].value}/`,
        {
          params: {
            page: 1,
            page_size: 100,
            year: currentUserData[2].value,
            branch__branch_code: currentUserData[1].value,
            fields: "subject_code,portion_link"
          },
        }
      )
      .then((res) => {
        result = res.data.results;
      });
    return result;
};

export const getSubjects = async (currentUserData) => {
    let result;
    await api
      .get(
        `/api/subject-list/${currentUserData[0].value}/`,
        {
          params: {
            page: 1,
            page_size: 100,
            year: currentUserData[2].value,
            branch__branch_code: currentUserData[1].value
          },
        }
      )
      .then((res) => {
        result = res.data.results;
      });
    return result;
};

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

export const getTimetable = async (currentUserData) => {
    let result;
    await api
      .get(`/api/gtimetable-detail/${currentUserData[0].value}/${currentUserData[1].value}/${currentUserData[2].value}/`, {
        params: {
          page: 1,
          page_size: 100
        },
      })
      .then((res) => {
        result = res.data.gsheet_src;
      });
    return result;
};

export const getCollegeDetails = async (currentUserData) => {
    let result;
    await api
      .get(`/api/college-list/`, {
        params: {
          college_code: currentUserData[0].value,
        },
      })
      .then((res) => {
        result = res.data.results;
      });
    return result;
};

export const getFacultyDetails = async (currentUserData) => {
    let result;
    await api
      .get(`/api/faculty-list/${currentUserData[0].value}`, {
        params: {
          page: 1,
          page_size: 100
        },
      })
      .then((res) => {
        result = res.data.results;
        console.log(result)
      });
    return result;
};

export default api;