import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useSelector } from "react-redux";

const Timetable = () => {
    const accessToken = useSelector((state) => state.auth.access);

    const axiosInstance = axios.create({
        baseURL: "https://edtech1.herokuapp.com",
        headers: {
            "Content-type": "application/json",
            Authorization: `JWT ${accessToken}`,
        },
    });

    const fetchWithToken = (url) => axiosInstance.get(url).then((res) => res.data);

    const { data, error } = useSWR(`/api/gtimetable/`, fetchWithToken);

    if (error) {
        return <div className='main_content_body'>Error while Fetching...</div>;
    }

    if (!data) {
        return (
            <div className='main_content_body' style={{ marginTop: "5px" }}>
                Loading
            </div>
        );
    }

    return (
        <div className='main_content_body' style={{ display: "flex", justifyContent: "center" }}>
            <iframe
                title='Timetable Frame'
                src={`https://docs.google.com/spreadsheets/d/e/${data.gsheet_src}/pubhtml?widget=true&amp;headers=false`}
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
