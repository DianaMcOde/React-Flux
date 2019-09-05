import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage(props) {
    const [courses, setCourses ] = useState([]);

// Similar to componentDidMount and componentDidUpdate
// A dependency needs to be included as an argument or it will run every time the app renders
// In this case, the app runs the effect only once due to the empty array

useEffect(() => { 
    getCourses().then(coursesData => setCourses(coursesData));
}, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses} />
        </>
    )
}

export default CoursesPage;