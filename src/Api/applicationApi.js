import axios from "axios";
import ls from "local-storage";

//const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

export const findApplication = (application_id) => {
  console.log("Find Public Application Api");
  const apiString = url + "/api/app/unauth/find";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        application_id,
      })
      .then((res) => {
        resolve(res.data.application);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
