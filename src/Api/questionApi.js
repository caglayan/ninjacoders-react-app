import axios from "axios";

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
        manageError(reject, err);
      });
  });
};

export const pullUserQuestions = (token, skip, limit) => {
  console.log("Pull User Questions Api");
  const apiString = url + "/api/question/auth/pull-user-questions";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        {
          skip,
          limit,
        },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.questions);
      })
      .catch((err) => {
        manageError(reject, err);
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
        manageError(reject, err);
      });
  });
};

export const askQuestion = (token, course, title, body, courseName) => {
  console.log("Make Question Api");
  const apiString = url + "/api/question/auth/add";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { course, title, body, courseName },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.question);
      })
      .catch((err) => {
        manageError(reject, err);
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
        manageError(reject, err);
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
        manageError(reject, err);
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
        manageError(reject, err);
      });
  });
};

export const updateAnswer = (token, question, answer, title, body) => {
  console.log("Update Question Api");
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
        manageError(reject, err);
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
        resolve(res.data.question);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
