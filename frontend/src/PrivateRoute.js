import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./Auth";
import Login from "./components/Login";
import Select from "react-select";
import loading_logo from './EdTech.svg'
import { db, auth } from "./firebase";

const yearOptions = [
  { value: "FIRST", label: "First" },
  { value: "SECOND", label: "Second" },
  { value: "THIRD", label: "Third" },
  { value: "FOURTH", label: "Fourth" },
];

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {
    currentUser,
    dataFetched,
    setDataFetched,
    getFireAuthUser,
    collegeOptions,
    branchOptions,
    setSelectedCollege,
    setCurrentUserData,
    selectedCollege,
    setSelectedBranch,
    selectedBranch,
    setSelectedYear,
    selectedYear,
  } = useContext(AuthContext);

  function onCollegeInputChange(value) {
    setSelectedCollege(value);

    var docRef = db.collection("branches").doc(value.value);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          doc.data().list.forEach((branch) => {
            branchOptions.push(branch);
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function onBranchInputChange(value) {
    setSelectedBranch(value);
  }

  function onYearInputChange(value) {
    setSelectedYear(value);
  }

  function onSubmitButton() {
    if (
      selectedCollege != null &&
      selectedBranch != null &&
      selectedYear != null
    ) {
      setCurrentUserData([selectedCollege, selectedBranch, selectedYear]);
      db.collection("userPreference")
        .doc(auth.currentUser.uid)
        .set({
          college: selectedCollege,
          branch: selectedBranch,
          year: selectedYear,
        },{merge:true})
        .then(() => {
          setDataFetched(true);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } else {
      alert("Please fill in all details");
    }
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser != null ? (
          <div>
            {!getFireAuthUser ? (
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img alt="Loading Logo" src={loading_logo} style={{height: '100px'}} />
              </div>
            ) : (
              <div>
                {!dataFetched ? (
                  <div
                    style={{
                      display: "flex",
                      height: "100vh",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        height: "45vh",
                        width: "50vw",
                        alignItems: "center",
                        justifyContent: "unset",
                        gridTemplateRows: "1fr 1fr 1fr 1fr",
                      }}
                    >
                      <div>
                        <h3 style={{ color: "rgba(0,0,100,1)" }}>
                          Select Your College
                        </h3>
                        <Select
                          onChange={onCollegeInputChange}
                          options={collegeOptions}
                        />
                      </div>
                      <div>
                        <h3 style={{ color: "rgba(0,0,100,1)" }}>
                          Select Your Branch
                        </h3>
                        <Select
                          onChange={onBranchInputChange}
                          options={branchOptions}
                        />
                      </div>
                      <div>
                        <h3 style={{ color: "rgba(0,0,100,1)" }}>
                          Select Your Year
                        </h3>
                        <Select
                          onChange={onYearInputChange}
                          options={yearOptions}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={onSubmitButton}
                      >
                        <button
                          style={{
                            border: "none",
                            color: "rgba(0,0,100,1)",
                            background: "white",
                            padding: "10px 40px",
                            fontSize: "18px",
                            borderRadius: "25px",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <RouteComponent {...routeProps} />
                )}
              </div>
            )}
          </div>
        ) : (
          <Login />
        )
      }
    />
  );
};

export default PrivateRoute;
