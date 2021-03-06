import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import courseStore from "../store/courseStore";
import CourseForm from './CourseForm';
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
    const [ errors, setErrors ] = useState({});
    const [ courses, setCourses ] = useState(courseStore.getCourses());
    const [ course, setCourse ] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });

    useEffect( () => {
        courseStore.addChangeListener(onChange); // Runs onChange() when courseStore changes
        const slug = props.match.params.slug; //from the path `/courses/:slug`
        if (courses.length === 0){  // on Page Load check if there are any courses in state
            courseActions.loadCourses(); //once this is executed, the onChange function is called and updates setCourses
        }
        else if (slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug]); //If this changes, the component will re-render

    function onChange(){
        setCourses(courseStore.getCourses());
    }

    function handleChange(event) {
        //copy the course object and set the properties to the values passed
        //in from the browser - user input events
       const updatedCourse = { ...course, [event.target.name]: event.target.value };
       setCourse(updatedCourse);
    }

    function formIsValid (){
        const _errors = {} //This is prefixed with an _ to avoid name collision with the error object held in state
        if (!course.title) _errors.title="Please enter a title";
        if (!course.authorId) _errors.authorId="Please enter an author";
        if (!course.category) _errors.category="Please enter a category";

        setErrors(_errors);
        //The form is valid if the local _errors object has no properties
        return Object.keys(_errors).length === 0; //This will return a boolean value - True if there are no errors, False otherwise
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return; //If the form is not valid, then exit the function
        courseActions.saveCourse(course).then(()=> {
            props.history.push("/courses"); //Another way to re-direct using the history from props
            toast.success("Course saved.")
        })
    }
    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} errors={errors}/>
        </>
    )
}

export default ManageCoursePage;