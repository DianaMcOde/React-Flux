import React from 'react';

const ManageCoursePage = props => {
    debugger;
    return(
        <>
            <h1>Manage Course</h1>
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;