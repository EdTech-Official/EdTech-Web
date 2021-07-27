import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth";
import Select from "react-select";
import { db, auth } from '../../firebase'

const yearOptions = [
  { value: "FIRST", label: "First" },
  { value: "SECOND", label: "Second" },
  { value: "THIRD", label: "Third" },
  { value: "FOURTH", label: "Fourth" },
];

const User = () => {

    const {
        setDataFetched,
        currentUserData,
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

      useEffect(() => {
        if(collegeOptions[0] === undefined){
          db.collection("colleges")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              collegeOptions.push(doc.data());
            });
          })
          .then(() => {
            
          });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    function onCollegeInputChange(value) {
        setSelectedCollege(value);
    
        if(branchOptions[0] === undefined){
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
              alert("User data updated")
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        } else {
          alert("Please fill in all details");
        }
      }

  return (
    <div className="main_content_body" style={{marginTop: '0'}}>
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
            <h3 style={{ color: "rgba(0,0,100,1)" }}>Select Your College</h3>
            <Select defaultValue={currentUserData[0]} onChange={onCollegeInputChange} options={collegeOptions} />
          </div>
          <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>Select Your Branch</h3>
            <Select defaultValue={currentUserData[1]} onChange={onBranchInputChange} options={branchOptions} />
          </div>
          <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>Select Your Year</h3>
            <Select defaultValue={currentUserData[2]} onChange={onYearInputChange} options={yearOptions} />
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
