import {
  findPublicCourseWithId,
  findUserCourseWithId,
  courseSaveLocal,
  courseRemoveLocal,
  courseFetchLocal,
} from "../../Api/courseApi";

import { updateCourse, removeCourse } from "../Actions/courseActions";

export const startCreateUserCourse = (token, course_id, user_id) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findUserCourseWithId(token, course_id, user_id)
        .then((course) => {
          dispatch(updateCourse(course));
          resolve(course);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const startCreatePublicCourse = (course_id, user_id) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findPublicCourseWithId(course_id)
        .then((course) => {
          dispatch(updateCourse(course));
          resolve(course);
        })
        .catch((err) => {
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

export const startRemoveCourse = (dispatch) => {
  return (dispatch) => {
    dispatch(removeCourse());
  };
};
