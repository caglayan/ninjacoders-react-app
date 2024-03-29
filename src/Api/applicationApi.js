import axios from "axios";
import ls from "local-storage";

//const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

const manageError = (reject, err) => {
  err.response
    ? reject({
        Message: err.response.data.Message,
        Code: err.response.data.Code,
      })
    : reject({
        code: "MAK101",
        message: "Ana makinemiz ile bağlantınız kesildi.",
      });
  err.response
    ? console.log("Error Code:", err.response.data.Code)
    : console.log("Ana makinemiz ile bağlantınız kesildi.");
};

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
        manageError(reject, err);
      });
  });
};

export const findCourseGroup = (group_id) => {
  console.log("Find Public CourseGroup Api");
  const apiString = url + "/api/app/unauth/findCourseGroup";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        group_id,
      })
      .then((res) => {
        resolve(res.data.courseGroup);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const findSaleCode = (group_id, type, name) => {
  console.log("Find Public findappcode Api");
  const apiString = url + "/api/app/unauth/findappcode";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        group_id,
        type,
        name,
      })
      .then((res) => {
        resolve(res.data.code);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
