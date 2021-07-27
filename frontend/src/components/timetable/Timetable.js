import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";
const axios = require("axios");

const Timetable = () => {
  const { currentUserData } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [tturl, setTturl] = useState(null);

  const getTimetable = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}gtimetable-detail/${currentUserData[0].value}/${currentUserData[1].value}/${currentUserData[2].value}/`, {
        params: {
          page: 1,
          page_size: 100
        },
      })
      .then((res) => {
        const results = res.data;
        setTturl(results.gsheet_src);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTimetable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="main_content_body"
      style={{ display: "flex", justifyContent: "center" }}
    >
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
        <iframe
          title="Timetable Frame"
          src={`https://docs.google.com/spreadsheets/d/e/${tturl}/pubhtml?widget=true&amp;headers=false`}
          style={{
            height: "50%",
            width: "70%",
            border: "0.5px solid var(--first-color)",
          }}
        />
      )}
    </div>
  );
};

export default Timetable;
