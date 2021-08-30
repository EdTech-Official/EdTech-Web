import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import useSWR from "swr";
import axiosInstance, { getBooks } from "../../axios";

const Textbook = () => {
  const [books, setBooks] = useState([]);
  const [bookLoad, setBookLoad] = useState(true);
  const { url } = useRouteMatch();
  const [storedSubject, setStoredSubject] = useState("DEFAULT");

  const fetchWithToken = (url) =>
    axiosInstance.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `/api/subject/`,
    fetchWithToken
  );

  if (error) {
    return (
      <div className="main_content_body">Error while Fetching Data...</div>
    );
  }

  if (!data) {
    return <div className="main_content_body">Loading...</div>;
  }

  const Books = () => {

    const { subjectCode } = useParams();
    if (`${subjectCode}` !== storedSubject) {
      (async () => {
        setStoredSubject(`${subjectCode}`);
        const result = await getBooks(subjectCode);
        setBooks(result.data);
        setBookLoad(false);
      })();
    }
    
    return (
      <div>
        {bookLoad ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              height: "inherit",
              alignItems: "center",
            }}
          >
            Loading.....
          </h1>
        ) : (
          <div>
            <h5
              style={{ margin: "35px 0 10px 20px", color: "rgb(32, 31, 33)" }}
            >
              {subjectCode} <hr style={{ margin: "10px 20px 15px 0px" }} />
            </h5>
            {books?.map((book) => (
              <div className="tx-bk" style={{ textDecoration: "none" }}>
                <a
                  href={book.link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noopener noreferrer"
                >
                  <div className="tx-bk-img">
                    <img
                      alt="cover_image"
                      src={`${book.cover_image}`}
                      style={{
                        height: "inherit",
                        width: "inherit",
                        borderRadius: "10px",
                        border: "1px solid rgb(218, 218, 218)",
                      }}
                    ></img>
                  </div>
                  <h6
                    className="gd-fs-n"
                    style={{
                      textDecoration: "none",
                      color: "#5f6368",
                      textAlign: "center",
                      marginTop: "10px",
                      height: "33px",
                      fontSize: "15px",
                      overflow: "hidden",
                    }}
                  >
                    {book.title}
                  </h6>
                  <p style={{ marginLeft: "5px", textAlign: "center" }}>
                    {book.author}
                  </p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="main_content_body">
      {
        <Router>
          <div id="textbook-block">
            <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
              SUBJECTS
              <hr style={{ marginTop: "7px" }} />
            </h6>
            {data.map((subject) => (
              <random className="gd-fs-elm" key={subject.subject_code}>
                <Link
                  to={`${url}/${subject.subject_code}`}
                  // className="gd-fs-elm"
                  key={subject.subject_code}
                >
                  <div className="gd-fs">
                    <i className="bx bxs-folder"></i>
                    <span
                      className="gd-fs-n gd-fs-elm"
                      style={{ marginLeft: "10px" }}
                    >
                      {subject.subject_code}
                    </span>
                  </div>
                </Link>
                <span className="tooltip">{subject.name}</span>
              </random>
            ))}
          </div>
          <Route path={`${url}/:subjectCode`}>
            <div>
              <Books />
            </div>
          </Route>
        </Router>
      }
    </div>
  );
};

export default Textbook;
