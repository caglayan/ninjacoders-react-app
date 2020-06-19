import { findComment, makeComment } from "../../Api/commentApi";

import { updateComment, removeComment } from "../Actions/commentActions";

export const createPersonalComment = (token, course_id) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findComment(token, course_id)
        .then((comment) => {
          dispatch(updateComment(comment));
          resolve(comment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const removeCourseUserComment = (dispatch) => {
  return (dispatch) => {
    dispatch(removeComment());
  };
};

export const makePersonalComment = (token, course, title, body, star) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      makeComment(token, course, title, body, star)
        .then((comment) => {
          dispatch(updateComment(comment));
          resolve(comment);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const updatePersonalComment = (comment) => {
  return (dispatch) => {
    dispatch(updateComment(comment));
  };
};
