import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CourseList(props){
    return(
        <table className="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author Id</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map(course => 
                <tr key={course.id}>
                    <td>
                        <button 
                            className="btn btn-outline-danger" 
                            onClick={()=> {
                                props.deleteCourse(course.id);
                            }
                        }
                        >
                            Delete
                        </button>
                    </td>
                    <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                    <td>{course.category}</td>
                    <td>{course.authorId}</td>
                </tr>)}  
        </tbody>         
    </table>
    )
}

CourseList.propTypes = {
    deleteCourse: PropTypes.func,
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