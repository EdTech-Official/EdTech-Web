import React from 'react';
import FacultyCard from './FacultyCard';
import useSWR from "swr";
import axiosInstance from "../../axios";

const People = () => {

    const fetchWithToken = (url) =>
    axiosInstance.get(url).then((res) => res.data);

    const { data, error } = useSWR(
        `/api/faculty/`,
        fetchWithToken
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
        <div className="main_content_body">
            {
                data.map( person => (
                    <div key={person.name} style={{display: 'inline-block'}}>
                        <FacultyCard personDetail={person} />
                    </div>
                ))
            }
        </div>
    )
}

export default People
