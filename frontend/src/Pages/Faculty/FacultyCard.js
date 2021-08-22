import React from "react";
import person_photo from "./Waimakariri.png";

const FacultyCard = ({personDetail}) => {
  function arrow(name) {
    document.getElementById(name).classList.add("active_arr");
    if (document.getElementById(name+'left').classList.contains("off")) {
      document.getElementById(name+'left').classList.remove("off");
      document.getElementById(name+'left').classList.add("active");
    }
  }

  function arr_cancel(name) {
    document.getElementById(name).classList.remove("active_arr");
    if (
      document.getElementById(name+'left').classList.contains("active")
    ) {
      document.getElementById(name+'left').classList.remove("active");
      document.getElementById(name+'left').classList.add("off");
    }
  }

  return (
      <div className="box center">
        <img src={person_photo} alt="Person's profile" />
        <div>
          <p className="person_name">{personDetail.name}</p>
          <p className="person_designation">{personDetail.designation}</p>
        </div>
        <div
          className="arr_container center"
          // id="arr_container"
          id={personDetail.name}
          onClick={() => arrow(personDetail.name)}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </div>
        <div 
          className="left_container off" 
          // id="left_container"
          id={personDetail.name+'left'}
        >
          <p>Social</p>
          <div className="icons">
            <a href="http://www.google.com">
              <i className="bx bx-mail-send" style={{ color: "#ffffff" }}></i>
            </a>
            <i className="bx bxs-phone" style={{ color: "#ffffff" }}></i>
            <i className="bx bxl-linkedin" style={{ color: "#ffffff" }}></i>
            <i className="bx bxl-twitter" style={{ color: "#ffffff" }}></i>
          </div>
          <div className="cancel center" id="cancel" onClick={() => arr_cancel(personDetail.name)}>
            <i className="bx bx-x"></i>
          </div>
        </div>
      </div>
  );
};

export default FacultyCard;
