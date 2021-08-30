import React from "react";
import useSWR from "swr";
import { connect } from "react-redux";
import axiosInstance from "../../axios";

const About = () => {

  const fetchWithToken = (url) =>
    axiosInstance.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `/api/user/college/`,
    fetchWithToken
  );

  if (error) {
    return <div className="main_content_body">Error while Fetching...</div>;
  }

  if (!data) {
    return (
      <div className="main_content_body" style={{ marginTop: "5px" }}>
        Loading
      </div>
    );
  }

  return (
    <div className="main_content_body" style={{ marginTop: "5px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="College Logo" src={data?.link_image} />
        <div
          style={{
            marginTop: "10px",
            fontSize: "x-large",
            textAlign: "center",
          }}
        >
          {data?.name}
        </div>
        <h5>EST. {data?.established}</h5>
        <div style={{ marginTop: "5px" }}>{data?.location}</div>
        <div style={{ marginTop: "20px" }}>
          <a
            href={data?.website_link}
            target="_blank"
            rel="noopener noreferrer"
          >
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
            href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${data?.email}`}
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
          <a href={data?.linkedin} target="_blank" rel="noopener noreferrer">
            <i
              className="bx bxl-linkedin"
              style={{
                color: "black",
                fontSize: "1.5rem",
                padding: "0 10px",
              }}
            />
          </a>
          <a href={data?.instagram} target="_blank" rel="noopener noreferrer">
            <i
              className="bx bxl-instagram"
              style={{
                color: "black",
                fontSize: "1.5rem",
                padding: "0 10px",
              }}
            />
          </a>
          <a href={data?.facebook} target="_blank" rel="noopener noreferrer">
            <i
              className="bx bxl-facebook"
              style={{
                color: "black",
                fontSize: "1.5rem",
                padding: "0 10px",
              }}
            />
          </a>
          <a href={data?.twitter} target="_blank" rel="noopener noreferrer">
            <i
              className="bx bxl-twitter"
              style={{
                color: "black",
                fontSize: "1.5rem",
                padding: "0 10px",
              }}
            />
          </a>
          <a href={data?.youtube} target="_blank" rel="noopener noreferrer">
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
            src={data?.static_map_src}
            style={{
              width: "85%",
              height: "85%",
              border: "0",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateProps, {})(About);
