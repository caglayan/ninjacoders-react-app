import { findComment, makeComment } from "../../Api/commentApi";

import { updateComment } from "../Actions/commentActions";

export const createPersonalComment = (token) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findComment(token)
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
