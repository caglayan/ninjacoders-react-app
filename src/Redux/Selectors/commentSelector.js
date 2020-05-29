import { findComment } from "../../Api/commentApi";

import { updateComment, removeComment } from "../Actions/commentActions";

export const createPersonalComment = (token) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findComment(token)
        .then((comment) => {
          dispatch(updateComment(comment));
          resolve(comment);
        })
        .catch((err) => {
          console.log(err);
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
