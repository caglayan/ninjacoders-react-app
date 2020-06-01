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
        reject(err.response.data);
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
        reject(err.response.data);
      });
  });
};

export const askQuestion = (token, course, title, body) => {
  console.log("Make Question Api");
  const apiString = url + "/api/question/auth/add";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { course, title, body },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const updateQuestion = (token, question, title, body) => {
  console.log("Make Question Api");
  const apiString = url + "/api/question/auth/update";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { question, body, title },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const removeQuestion = (token, question) => {
  console.log("Make Question Api");
  const apiString = url + "/api/question/auth/remove";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { question },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const answerQuestion = (token, question, title, body) => {
  console.log("Make Question Api");
  const apiString = url + "/api/question/answer/auth/add";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { question, title, body },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const updateAnswer = (token, question, answer, title, body) => {
  console.log("Remove Question Api");
  const apiString = url + "/api/question/answer/auth/update";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { question, answer, title, body },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const removeAnswer = (token, question, answer) => {
  console.log("Remove Question Api");
  const apiString = url + "/api/question/answer/auth/remove";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { question, answer },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};
