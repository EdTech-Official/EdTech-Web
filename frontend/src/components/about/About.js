import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import { getCollegeDetails } from "../../http";

const About = () => {
  const { currentUserData } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [collegeResult, setCollegeResult] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getCollegeDetails(currentUserData);
      setCollegeResult(result[0]);
      setLoading(false);
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main_content_body" style={{marginTop: '5px'}}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img alt="College Logo" src={collegeResult.link_image} />
          <div
            style={{
              marginTop: "10px",
              fontSize: "x-large",
              textAlign: "center",
            }}
          >
            {collegeResult.name}
          </div>
          <h5>EST. {collegeResult.established}</h5>
          <div style={{ marginTop: "5px" }}>{collegeResult.location}</div>
          <div style={{ marginTop: "20px" }}>
            <a href={collegeResult.website_link} target="_blank" rel="noopener noreferrer">
              <i
                className="bx bx-link"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${collegeResult.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bx-mail-send"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a href={collegeResult.linkedin} target="_blank" rel="noopener noreferrer">
              <i
                className="bx bxl-linkedin"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a href={collegeResult.instagram} target="_blank" rel="noopener noreferrer">
              <i
                className="bx bxl-instagram"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a href={collegeResult.facebook} target="_blank" rel="noopener noreferrer">
              <i
                className="bx bxl-facebook"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a href={collegeResult.twitter} target="_blank" rel="noopener noreferrer">
              <i
                className="bx bxl-twitter"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
            <a
              href={collegeResult.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-youtube"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  padding: "0 10px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              width: "100%",
              height: "50vh",
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
            title="Google map link for college"
              src={collegeResult.static_map_src}
              style={{
                width: "85%",
                height: "85%",
                border: "0",
                loading: "lazy",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
