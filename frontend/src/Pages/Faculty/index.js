import React, { useContext } from 'react';
// import FacultyCard from './FacultyCard';
import useSWR from "swr";

const People = () => {

    // const { data, error } = useSWR(
    //     `${process.env.REACT_APP_API_URL}/api/faculty-list/?page=1&page_size=100&branch__branch_code=${currentUserData[1].value}&college__college_code=${currentUserData[0].value}`,
    //     {revalidateOnFocus: false}
    // );

    return (
        <div>Hi</div>
    )

    // if (error) {
    //     return <div className="main_content_body">Error while Fetching...</div>;
    // }

    // if (!data) {
    //     return (
    //     <div className="main_content_body" style={{ marginTop: "5px" }}>
    //         Loading
    //     </div>
    //     );
    // }

    // return (
    //     <div className="main_content_body">
    //         {
    //             data.results.map( person => (
    //                 <div key={person.name} style={{display: 'inline-block'}}>
    //                     <FacultyCard personDetail={person} />
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )
}

export default People
