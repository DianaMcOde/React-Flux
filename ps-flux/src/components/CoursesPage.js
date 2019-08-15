import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";

function CoursesPage() {
    const [courses, setCourses ] = useState([]);

// Similar to componentDidMount and componentDidUpdate
// A dependency needs to be included as an argument or it will run every time the app renders
// In this case, the app runs the effect only once due to the empty array

useEffect(() => { 
    getCourses().then(coursesData => setCourses(coursesData));
}, []);

   function renderRow(course) {
        return(
            <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>{course.authorId}</td>
            </tr>
        )
    }

        return (
            <>
                <h2>Courses</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(renderRow)}  
                    </tbody>         
                </table>
            </>
        )
    }

export default CoursesPage;