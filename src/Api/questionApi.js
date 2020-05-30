import axios from "axios";

const url = "http://localhost:4000";

export const pullQuestions = (skip, limit, courseId) => {
  console.log("Pull Questions Api");
  const apiString = url + "/api/question/unauth/pull";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        skip,
        limit,
        courseId,
      })
      .then((res) => {
        resolve(res.data.questions);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const findQuestion = (token) => {
  console.log("Find Question Api");
  const apiString = url + "/api/question/auth/find";
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
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
