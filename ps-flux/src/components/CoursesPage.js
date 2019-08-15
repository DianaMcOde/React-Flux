import React from 'react';
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
    state = { 
        courses : [],
    };

    componentDidMount(){
         getCourses().then(coursesData => this.setState({courses: coursesData}))
    }

    render() {
        console.log(this.state);
        const courses = this.state.courses;
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
                        {courses.map((course, i) => <tr key={i}>
                                <td>{course.title}</td>
                                <td>{course.category}</td>
                                <td>{course.authorId}</td>
                        </tr>)}  
                    </tbody>         
                </table>
            </>
        )
    }
}

export default CoursesPage;