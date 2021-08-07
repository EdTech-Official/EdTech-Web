import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Auth";
import { getTimetable } from "../../http"

const Timetable = () => {
  const { currentUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [tturl, setTturl] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getTimetable(currentUserData);
      console.log(result)
      setTturl(result)
      setLoading(false);
    })()
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
