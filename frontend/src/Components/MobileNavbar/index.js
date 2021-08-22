import React, { useState, useContext } from "react";
// import { AuthContext } from "../Auth";
// import { firebaseApp } from "..//firebase";
// import axiosInstance from "../../axios";
import { Link, useHistory } from "react-router-dom";

const MobileNavbar = () => {

  let history = useHistory();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // const {
  //   setCurrentUser,
  //   setGetFireAuthUser,
  //   setDataFetched,
  //   setCurrentUserData,
  //   setCollegeOptions,
  //   setBranchOptions,
  //   setYearOptions,
  //   setSelectedCollege,
  //   setSelectedBranch,
  //   setSelectedYear,
  // } = useContext(AuthContext);

  const handleSignOut = () => {
  //   const response = axiosInstance.post('user/logout/blacklist/', {
	// 		refresh_token: localStorage.getItem('refresh_token'),
	// 	});
	// 	localStorage.removeItem('access_token');
	// 	localStorage.removeItem('refresh_token');
	// 	axiosInstance.defaults.headers['Authorization'] = null;
  //   setCurrentUser([]);
  //   setCurrentUserData([]);
  //   setDataFetched(false);
  //   setGetFireAuthUser(false);
  //   setCollegeOptions([]);
  //   setBranchOptions([]);
  //   setYearOptions([]);
  //   setSelectedCollege(null);
  //   setSelectedBranch(null);
  //   setSelectedYear(null);
  //   history.push("/")



    // firebaseApp
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //   });
  };

  return (
    <div>
      <div className="top-navbar">
        <i
          className="bx bx-menu"
          style={{
            color: "var(--first-color)",
            fontSize: "40px",
            marginLeft: "11px",
            cursor: "pointer",
          }}
          onClick={showSidebar}
        ></i>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar} style={{overflow:'scroll'}}>
          <li className="navbar-toggle">
            <div to="#" className="menu-bars bx bx-x"></div>
          </li>
          <ul className="news_category_list">
            <li className="category-list-item">
              <Link to="/" className="nav_link">
                <i className="bx bx-table"></i>
                <span className="nav_name">Timetable</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/portion" className="nav_link">
                <i className="bx bx-list-check"></i>
                <span className="nav_name">Portion</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/textbook" className="nav_link">
                <i className="bx bxs-book"></i>
                <span className="nav_name">TextBook</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/notes" className="nav_link">
                <i className="bx bx-book-open"></i>
                <span className="nav_name">Notes</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/recommendation" className="nav_link">
                <i className="bx bx-library"></i>
                <span className="nav_name">Recommendation</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/faculty" className="nav_link">
                <i className="bx bx-user"></i>
                <span className="nav_name">People</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/about" className="nav_link">
                <i className="bx bxs-school"></i>
                <span className="nav_name">About</span>
              </Link>
            </li>
            <li className="category-list-item">
              <Link to="/user" className="nav_link">
                <i className="bx bx-user"></i>
                <span className="nav_name">User</span>
              </Link>
            </li>
            <li className="category-list-item">
              <div
                style={{}}
                className="nav_link log-out-btn nav_list"
                onClick={handleSignOut}
              >
                <i className="bx bx-log-out " style={{ color: "white" }}></i>
                <span className="nav_name">Log Out</span>
              </div>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
