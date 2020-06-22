import axios from "axios";
import ls from "local-storage";

//const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

export const courseFetchLocal = () => {
  return ls.get("course");
};

export const courseSaveLocal = (course) => {
  return ls.set("course", course);
};

export const courseRemoveLocal = (course) => {
  return ls.remove("course");
};

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

export const findUserCourseWithId = (token, course_id, user_id) => {
  console.log("Find User Priavte Course Api");
  const apiString = url + "/api/course/auth/find";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        {
          course_id,
          user_id,
        },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        console.log(res.data.course);
        resolve(res.data.course);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const findPublicCourseWithId = (course_id) => {
  console.log("Find Public Course Api");
  const apiString = url + "/api/course/unauth/find";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        course_id,
      })
      .then((res) => {
        console.log(res.data.course);
        resolve(res.data.course);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const findAtomicCourse = (course_id) => {
  console.log("Find Atomic Course Api");
  const apiString = url + "/api/course/unauth/findatomic";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        course_id,
      })
      .then((res) => {
        resolve(res.data.course);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
