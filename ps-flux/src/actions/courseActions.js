import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

//This is an action creator
export function saveCourse(course){
    return courseApi.saveCourse(course).then(savedCourse => {
        //The dispatcher tells all the stores that an action has been created
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    })

}