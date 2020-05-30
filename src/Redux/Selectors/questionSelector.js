import { findQuestion } from "../../Api/questionApi";

import { updateQuestion, removeQuestion } from "../Actions/questionActions";

export const createPersonalQuestion = (token) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findQuestion(token)
        .then((question) => {
          dispatch(updateQuestion(question));
          resolve(question);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
};

export const updatePersonalQuestion = (question) => {
  return (dispatch) => {
    dispatch(updateQuestion(question));
  };
};
