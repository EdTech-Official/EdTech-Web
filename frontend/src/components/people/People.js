import React, { useState, useEffect, useContext } from 'react';
import FacultyCard from './FacultyCard';
import { AuthContext } from "../../Auth";
import { getFacultyDetails } from '../../http';

const People = () => {

    const { currentUserData } = useContext(AuthContext);
    const [facultyDetails, setFacultyDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await getFacultyDetails(currentUserData);
            setFacultyDetails(result)
            setLoading(false);
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return (
        <div className="main_content_body">
            <FacultyCard />
        </div>
    )
}

export default People
