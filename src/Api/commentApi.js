import axios from "axios";

const url = "http://localhost:4000";
//const url = "https://ninjaoders-backend.herokuapp.com";

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
        reject(err);
      });
  });
};

export const findComment = (token) => {
  console.log("Find Comment Api");
  const apiString = url + "/api/comment/auth/find";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        {},
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
        reject(err);
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
        reject(err);
      });
  });
};
