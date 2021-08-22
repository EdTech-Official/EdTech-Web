import React, { useContext } from "react";
// import { AuthContext } from "../../Auth";
// import useSWR from "swr";

const Portion = () => {
  // const { currentUserData } = useContext(AuthContext);

  // const { data, error } = useSWR(
  //   `${process.env.REACT_APP_API_URL}/api/portion-list/?page=1&page_size=100&years__year=${currentUserData[2].value}&branches__branch_code=${currentUserData[1].value}&colleges__college_code=${currentUserData[0].value}&fields=subjects,link`,
  //   {revalidateOnFocus: false}
  // );

  return (
    <h1>hi</h1>
  )

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
  //         {data.results.map((subjects) => {
  //           return subjects.subjects.map((subject) => {
  //             return (
  //               <random className="gd-fs-elm">
  //                 <a
  //                   // href={`https://drive.google.com/file/d/${subjects.link}/view?usp=sharing`}
  //                   href={`${subjects.link}`}
  //                   target="_blank"
  //                   key={subject}
  //                   rel="noopener noreferrer"
  //                 >
  //                   <div className="gd-fs gd-fs-elm">
  //                     <i className="bx bxs-folder"></i>
  //                     <span
  //                       className="gd-fs-n gd-fs-elm"
  //                       style={{ marginLeft: "10px" }}
  //                     >
  //                       {subject[0]}
  //                     </span>
  //                   </div>
  //                 </a>
  //                 <span className="tooltip" >{subject[1]}</span>
  //               </random>
  //             );
  //           });
  //         })}
  //       </div>
  //   </div>
  // );
};

export default Portion;
