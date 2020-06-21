import axios from "axios";

const url = "http://localhost:4000";
//const url = "https://ninjaoders-backend.herokuapp.com";

const manageError = (reject, err) => {
  err.response
    ? reject({
        message: err.response.data.Message,
        code: err.response.data.Code,
      })
    : reject({
        code: "MAK101",
        message: "Ana makinemiz ile bağlantınız kesildi.",
      });
  err.response
    ? console.log("Error Code:", err.response.data.Code)
    : console.log("Ana makinemiz ile bağlantınız kesildi.");
};

export const pullComments = (skip, limit, courseId) => {
  console.log("Pull Comments Api");
  const apiString = url + "/api/comment/unauth/pull";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        skip,
        limit,
        courseId,
      })
      .then((res) => {
        resolve(res.data.comments);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const findComment = (token, course_id) => {
  console.log("Find Comment Api");
  const apiString = url + "/api/comment/auth/find";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { course_id },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.comment);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const makeComment = (token, course, title, body, star) => {
  console.log("Make Comment Api");
  const apiString = url + "/api/comment/auth/add";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { course, title, body, star },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.comment);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const updateComment = (token, comment, title, body, star) => {
  console.log("Update Comment Api");
  const apiString = url + "/api/comment/auth/update";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { comment, title, body, star },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.comment);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
