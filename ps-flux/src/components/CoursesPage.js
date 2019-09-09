import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import courseStore from "../store/courseStore";
import CourseList from "./CourseList";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage(props) {
    const [courses, setCourses ] = useState(courseStore.getCourses()); // courses initialised to whatever is in the flux store

// Similar to componentDidMount and componentDidUpdate
// A dependency needs to be included as an argument or it will run every time the app renders
// In this case, the app runs the effect only once due to the empty array

useEffect(() => { 
    // this allows us to subscribe to the flux store
    courseStore.addChangeListener(onChange);
    if(courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); //cleanup on unmount
}, []);

// Since or component is connected to the Flux store, 
// when courses are added to the store, onChange will be called
function onChange() {
    setCourses(courseStore.getCourses())
}

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}/>
        </>
    )
}

export default CoursesPage;