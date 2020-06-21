import { findApplication } from "../../Api/applicationApi";

import {
  updateApplication,
  removeApplication,
} from "../Actions/applicationActions";

export const startCreateApplication = (application_id) => {
  return (dispatch) => {
    return new Promise(function (resolve, reject) {
      findApplication(application_id)
        .then((application) => {
          dispatch(updateApplication(application));
          resolve(application);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
