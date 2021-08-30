import React from "react";
import useSWR from "swr";
import axiosInstance from "../../axios";

const Portion = () => {

  const fetchWithToken = url => axiosInstance.get(url).then(res => res.data)

  const { data, error } = useSWR(`/api/portion/`, fetchWithToken)

  if (error) {
    return <div className="main_content_body">Error while Fetching Data...</div>;
  }

  if(!data){
    return <div className="main_content_body" >Loading...</div>
  }
  
  return (
    <div className="main_content_body">
        <div id="textbook-block">
          <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
            SUBJECTS
            <hr style={{ marginTop: "7px" }} />
          </h6>
          {data.map((subjects) => {
            return subjects.subjects.map((subject) => {
              return (
                <random key={subject} className="gd-fs-elm">
                  <a
                    // href={`https://drive.google.com/file/d/${subjects.link}/view?usp=sharing`}
                    href={`${subjects.link}`}
                    target="_blank"
                    key={subject}
                    rel="noopener noreferrer"
                  >
                    <div className="gd-fs gd-fs-elm">
                      <i className="bx bxs-folder"></i>
                      <span
                        className="gd-fs-n gd-fs-elm"
                        style={{ marginLeft: "10px" }}
                      >
                        {subject[0]}
                      </span>
                    </div>
                  </a>
                  <span className="tooltip" >{subject[1]}</span>
                </random>
              );
            });
          })}
        </div>
    </div>
  );
};

export default Portion;
