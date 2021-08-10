import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Auth";
import { getSubjectsWithPortion } from "../../http";

const Portion = () => {
  const { currentUserData } = useContext(AuthContext);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getSubjectsWithPortion(currentUserData);
      setResult(result);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main_content_body">
      {loading ? (
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
        <div id="textbook-block">
          <h6 style={{ margin: "15px 20px", color: "rgb(32 31 33)" }}>
            SUBJECTS
            <hr style={{ marginTop: "7px" }} />
          </h6>
          {result.map((subjects) => {
            return subjects.subjects.map((subject) => {
              return (
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
                      {subject}
                    </span>
                  </div>
                </a>
              );
            });
          })}
        </div>
      )}
    </div>
  );
};

export default Portion;
