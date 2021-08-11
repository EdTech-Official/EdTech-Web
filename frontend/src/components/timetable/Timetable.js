import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import useSWR from "swr";

const Timetable = () => {
  const { currentUserData } = useContext(AuthContext);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/gtimetable-list/?college__college_code=${currentUserData[0].value}&branch__branch_code=${currentUserData[1].value}&year__year=${currentUserData[2].value}`,
    { revalidateOnFocus: false }
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
    <div
      className="main_content_body"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <iframe
        title="Timetable Frame"
        src={`https://docs.google.com/spreadsheets/d/e/${data.results[0].gsheet_src}/pubhtml?widget=true&amp;headers=false`}
        style={{
          height: "50%",
          width: "70%",
          border: "0.5px solid var(--first-color)",
        }}
      />
    </div>
  );
};

export default Timetable;
