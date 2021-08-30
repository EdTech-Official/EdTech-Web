import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import useSWR from "swr";
import axiosInstance, { getMaterials } from "../../axios";

const Notes = () => {

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
    return <div className="main_content_body">Error while Fetching Data...</div>;
  }

  if(!data){
    return <div className="main_content_body" >Loading...</div>
  }

  const Books = () => {

    const { subjectCode } = useParams();
    if (`${subjectCode}` !== storedSubject) {
      (async () => {
        setStoredSubject(`${subjectCode}`);
        const result = await getMaterials(subjectCode);
        console.log(result)
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
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="tx-bk"
                  style={{
                    textDecoration: "none",
                    width: "250px",
                    height: "55px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "inherit",
                    }}
                  >
                    <i
                      className="bx bxs-book"
                      style={{
                        height: "inherit",
                        display: "flex",
                        padding: "0 10px",
                        fontSize: "1.5em",
                        alignItems: "center",
                        color: "black",
                      }}
                    />
                    <div
                      style={{
                        width: '-webkit-fill-available',
                      }}
                    >
                      <h6
                        className="gd-fs-n"
                        style={{
                          textDecoration: "none",
                          color: "#5f6368",
                          marginLeft: "3px",
                          // marginLeft: "10px",
                          marginTop: "10px",
                          fontSize: '15px',
                          // height: "26px",
                          overflow: "hidden",
                        }}
                      >
                        {book.title}
                      </h6>
                      <a
                        href={book.contributor_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <p style={{ marginLeft: "3px" }}>
                          {book.contributor_name}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="main_content_body">
        <div>
          {
            <Router>
              <div id="textbook-block">
                <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
                  SUBJECTS
                  <hr style={{ marginTop: "7px" }} />
                </h6>
                {data.map((subject) => (
                  <random className="gd-fs-elm">
                    <Link
                      to={`${url}/${subject.subject_code}`}
                      className="gd-fs-elm"
                    >
                      <div className="gd-fs" key={subject.subject_code}>
                        <i className="bx bxs-folder"></i>
                        <span
                          className="gd-fs-n gd-fs-elm"
                          style={{ marginLeft: "10px" }}
                        >
                          {subject.subject_code}
                        </span>
                      </div>
                    </Link>
                  <span className="tooltip" >{subject.name}</span>
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
    </div>
  );
};

export default Notes;
