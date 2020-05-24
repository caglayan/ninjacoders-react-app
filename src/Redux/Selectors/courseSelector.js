import {
  findPublicCourseWithId,
  courseSaveLocal,
  courseRemoveLocal,
  courseFetchLocal,
} from "../../Api/courseApi";

import { updateCourse, removeCourse } from "../Actions/courseActions";

export const startCreatePublicCourse = (course_id, user_id) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findPublicCourseWithId(course_id, user_id)
        .then((course) => {
          dispatch(updateCourse(course));
          resolve(course);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
};

export const startCreatePublicCourseLocal = (dispatch) => {
  const course = courseFetchLocal();
  if (course) {
    dispatch(updateCourse(course));
    return course;
  } else {
    return null;
  }
};

export const startRemovePublicCourseLocal = (dispatch) => {
  dispatch(removeCourse());
  courseRemoveLocal();
};
