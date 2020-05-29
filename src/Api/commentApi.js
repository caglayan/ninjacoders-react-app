import axios from "axios";

const url = "http://localhost:4000";

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
        reject(err);
      });
  });
};
