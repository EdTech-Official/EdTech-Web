import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import useSWR from "swr";

const Recommendation = () => {

  const [books, setBooks] = useState([]);
  const [bookLoad, setBookLoad] = useState(true);
  const { path, url } = useRouteMatch();
  const [storedSubject, setStoredSubject] = useState("DEFAULT");

  return (
    <div>Hi</div>
  )

  // const { data, error } = useSWR(
  //   `${process.env.REACT_APP_API_URL}/api/subject-list/?years__year=${currentUserData[2].value}&branches__branch_code=${currentUserData[1].value}&colleges__college_code=${currentUserData[0].value}&page=1&page_size=100&fields=subject_code,name`,
  //   {revalidateOnFocus: false}
  // );

  // if (error) {
  //   return <div className="main_content_body">Error while Fetching Data...</div>;
  // }

  // if(!data){
  //   return <div className="main_content_body" >Loading...</div>
  // }

  // return (
  //   <div className="main_content_body">
  //       <div id="textbook-block">
  //         <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
  //           SUBJECTS
  //           <hr style={{ marginTop: "7px" }} />
  //         </h6>
  //         {data.results.map((subject) => (
  //           <random className="gd-fs-elm">
  //             <div className="gd-fs" key={subject.subject_code}>
  //               <i className="bx bxs-folder"></i>
  //               <span
  //                 className="gd-fs-n"
  //                 style={{ marginLeft: "10px" }}
  //                 className="gd-fs-elm"
  //               >
  //                 {subject.subject_code}
  //               </span>
  //             </div>
  //             <span className="tooltip" >{subject.name}</span>
  //           </random>
  //         ))}
  //       </div>
  //   </div>
  // );




























  // const getBooks = (key) => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}material-list/?subject=${key}`,
  //       {
  //         params: {
  //           page: 1,
  //           page_size: 100,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const results = res.data.results;
  //       setBooks(results);
  //       setBookLoad(false);
  //     });
  // };

  // const Books = () => {
  //   const { subjectCode } = useParams();
  //   const { path, url } = useRouteMatch();
  //   if (books.length == 0 || `${subjectCode}` != storedSubject) {
  //     setStoredSubject(`${subjectCode}`);
  //     getBooks(`${subjectCode}`);
  //   }
  //   return (
  //     <div>
  //       {bookLoad ? (
  //         <h1
  //           style={{
  //             display: "flex",
  //             justifyContent: "center",
  //             height: "inherit",
  //             alignItems: "center",
  //           }}
  //         >
  //           Loading.....
  //         </h1>
  //       ) : (
  //         <div>
  //           <h5
  //             style={{ margin: "35px 0 10px 20px", color: "rgb(32, 31, 33)" }}
  //           >
  //             {subjectCode} <hr style={{ margin: "10px 20px 15px 0px" }} />
  //           </h5>
  //           {books.map((book) => (
  //             <a
  //               href={book.link}
  //               target="_blank"
  //               style={{ textDecoration: "none" }}
  //             >
  //               <div
  //                 className="tx-bk"
  //                 style={{
  //                   textDecoration: "none",
  //                   width: "200px",
  //                   height: "55px",
  //                 }}
  //               >
  //                 <h6
  //                   className="gd-fs-n"
  //                   style={{ marginLeft: "10px" }}
  //                   style={{
  //                     textDecoration: "none",
  //                     color: "#5f6368",
  //                     marginLeft: "3px",
  //                     marginTop: "3px",
  //                     height: "26px",
  //                     overflow: "hidden",
  //                   }}
  //                 >
  //                   {book.title}
  //                 </h6>
  //                 <p style={{ marginLeft: "3px" }}>{book.author}</p>
  //               </div>
  //             </a>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // return (
  //   <div className="main_content_body">
  //     {loading ? (
  //       <h1
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           height: "inherit",
  //           alignItems: "center",
  //         }}
  //       >
  //         Loading.....
  //       </h1>
  //     ) : (
  //       <div>
  //         {
  //           <Router>
  //             <div id="textbook-block">
  //               <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
  //                 SUBJECTS
  //                 <hr style={{ marginTop: "7px" }} />
  //               </h6>
  //               {subjects.map((subject) => (
  //                 <Link
  //                   to={`${url}/${subject.subject_code}`}
  //                   className="gd-fs-elm"
  //                 >
  //                   <div className="gd-fs" key={subject.subject_code}>
  //                     <i className="bx bxs-folder"></i>
  //                     <span
  //                       className="gd-fs-n"
  //                       style={{ marginLeft: "10px" }}
  //                       className="gd-fs-elm"
  //                     >
  //                       {subject.subject_code}
  //                     </span>
  //                   </div>
  //                 </Link>
  //               ))}
  //             </div>
  //             <Route path={`${url}/:subjectCode`}>
  //               <div>
  //                 <Books />
  //               </div>
  //             </Route>
  //           </Router>
  //         }
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Recommendation;
