import React from 'react';
import PropTypes from 'prop-types';

function CourseList(props){
    return(
        <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author Id</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map(course => 
                <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                    <td>{course.authorId}</td>
                </tr>)}  
        </tbody>         
    </table>
    )
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            title: PropTypes.string, 
            category: PropTypes.string,
            authorId: PropTypes.number,
        }
    )).isRequired
}

export default CourseList;