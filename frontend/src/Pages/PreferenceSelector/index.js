import React from 'react';
import Select from "react-select";

const yearOptions = [
    { value: "FIRST", label: "First" },
    { value: "SECOND", label: "Second" },
    { value: "THIRD", label: "Third" },
    { value: "FOURTH", label: "Fourth" },
];

const PreferenceSelector = () => {

    function onCollegeInputChange(value) {
        // setSelectedCollege(value);
    }
    
    function onBranchInputChange(value) {
        // setSelectedBranch(value);
    }
    
    function onYearInputChange(value) {
        // setSelectedYear(value);
    }
    
    function onSubmitButton() {
        // if (
        //     // selectedCollege != null &&
        //     // selectedBranch != null &&
        //     // selectedYear != null
        // ) {
        //     console.log("Submit logic here")
        // } else {
        //     alert("Please fill in all details");
        // }
      }

    return (
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
                // onChange={onCollegeInputChange}
                // options={collegeOptions}
            />
            </div>
            <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>
                Select Your Branch
            </h3>
            <Select
                // onChange={onBranchInputChange}
                // options={branchOptions}
            />
            </div>
            <div>
            <h3 style={{ color: "rgba(0,0,100,1)" }}>
                Select Your Year
            </h3>
            <Select
                // onChange={onYearInputChange}
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
    )
}

export default PreferenceSelector