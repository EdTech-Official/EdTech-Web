import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Auth";
import { firebaseApp } from "../firebase";
import logo from "../whitelogo.png";

const NavBar = () => {
  
  let history = useHistory();

  const {
    setCurrentUser,
    setGetFireAuthUser,
    setDataFetched,
    setCurrentUserData,
    setCollegeOptions,
    setBranchOptions,
    setYearOptions,
    setSelectedCollege,
    setSelectedBranch,
    setSelectedYear,
  } = useContext(AuthContext);

  const handleSignOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser([]);
        setCurrentUserData([]);
        setDataFetched(false);
        setGetFireAuthUser(false);
        setCollegeOptions([]);
        setBranchOptions([]);
        setYearOptions([]);
        setSelectedCollege(null);
        setSelectedBranch(null);
        setSelectedYear(null);
      });
    history.push("/");
  };

  function colorLink(e) {
    var elems = Array.from(document.getElementsByClassName("nav_link"));
    elems.forEach((el) => {
      el.classList.remove("active");
    });
    e.nativeEvent.target.parentNode.className = "nav_link active";  
  }

  function handleClick(e) {
    e.preventDefault();
    document.getElementById("navbar").classList.toggle("show");
    if (document.getElementById("btn").classList.contains("bx-menu")) {
      document.getElementById("btn").classList.replace("bx-menu", "bx-x");
    } else {
      document.getElementById("btn").classList.replace("bx-x", "bx-menu");
    }
  }

  return (
    <div className="l_navbar" id="navbar">
      <div className="logo_content">
        <div className="logo" as={Link} to="/creator">
          <i className="bx bxs-backpack" as={Link} to="/creator"></i>
          <img
            alt="Logo"
            src={logo}
            style={{ height: "30px", paddingLeft: "10px" }}
            className="logo_name"
          ></img>
        </div>
        <i className="bx bx-menu" id="btn" onClick={handleClick}></i>
      </div>

      <ul className="nav_list">
        <li>
          <Link to="/" className="nav_link active" onClick={colorLink}>
            <i className="bx bx-table"></i>
            <span className="nav_name">Timetable</span>
          </Link>
          <span className="tooltip">Timetable</span>
        </li>
        <li>
          <Link to="/portion" className="nav_link" onClick={colorLink}>
            <i className="bx bx-list-check"></i>
            <span className="nav_name">Portion</span>
          </Link>
          <span className="tooltip">Portion</span>
        </li>
        <li>
          <Link to="/textbook" className="nav_link" onClick={colorLink}>
            <i className="bx bxs-book"></i>
            <span className="nav_name">TextBook</span>
          </Link>
          <span className="tooltip">TextBook</span>
        </li>
        <li>
          <Link to="/notes" className="nav_link" onClick={colorLink}>
            <i className="bx bx-book-open"></i>
            <span className="nav_name">Notes</span>
          </Link>
          <span className="tooltip">Notes</span>
        </li>
        <li>
          <Link to="/recommendation" className="nav_link" onClick={colorLink}>
            <i className="bx bx-library"></i>
            <span className="nav_name">Recommendation</span>
          </Link>
          <span className="tooltip">Recommendation</span>
        </li>
        <li>
          <Link to="/faculty" className="nav_link" onClick={colorLink}>
            <i className="bx bx-group"></i>
            <span className="nav_name">People</span>
          </Link>
          <span className="tooltip">People</span>
        </li>
        <li>
          <Link to="/about" className="nav_link" onClick={colorLink}>
            <i className="bx bxs-school"></i>
            <span className="nav_name">About</span>
          </Link>
          <span className="tooltip">About</span>
        </li>
        <li>
          <Link to="/user" className="nav_link" onClick={colorLink}>
            <i className="bx bx-user"></i>
            <span className="nav_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
      </ul>

      <div
        style={{}}
        className="nav_link log-out-btn nav_list"
        onClick={handleSignOut}
      >
        <i className="bx bx-log-out " style={{ color: "white" }}></i>
        <span className="nav_name">Log Out</span>
      </div>
      <span className="tooltip">Log Out</span>
    </div>
  );
};

export default NavBar;
