import React, { useEffect, useState } from 'react';
import Select from "react-select";
import { getBranchList, getCollegeList, updateUserProfile } from '../../axios';

const yearOptions = [
    { value: "FIRST", label: "First" },
    { value: "SECOND", label: "Second" },
    { value: "THIRD", label: "Third" },
    { value: "FOURTH", label: "Fourth" },
];

const PreferenceSelector = () => {

    const [collegeOptions, setCollegeOptions] = useState([])
    const [branchOptions, setBranchOptions] = useState([])
    const [selectedCollege, setSelectedCollege] = useState(null)
    const [selectedBranch, setSelectedBranch] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)

    const data = {
        "profile": {
            "college": null,
            "branch": null,
            "year": null
        }
    }

    useEffect(() => {
        async function fetchCollegeList() {
            const res = await getCollegeList();
            console.log(res);
            setCollegeOptions(res)
        }
        fetchCollegeList();
    }, [])

    async function onCollegeInputChange(value) {
        setBranchOptions([]);
        data.profile.college = value.value;
        // setSelectedCollege(value.value);
        const res = await getBranchList(value.value);
        setBranchOptions(res.branches)
    }
    
    function onBranchInputChange(value) {
        data.profile.branch = value.value;
        // setSelectedBranch(value.value);
    }
    
    function onYearInputChange(value) {
        data.profile.year = value.value;
        // setSelectedYear(value.value);
    }
    
    function onSubmitButton() {
        if (
            data.profile.college != null &&
            data.profile.branch != null &&
            data.profile.year != null
        ) {
            updateUserProfile(data);
        } else {
            alert("Please fill in all details");
        }
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
    )
}

export default PreferenceSelector
