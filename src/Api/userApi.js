import axios from "axios";
import ls from "local-storage";

//const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

export const userFetchLocal = () => {
  return ls.get("user");
};

export const userSaveLocal = (user) => {
  return ls.set("user", user);
};

export const userRemoveLocal = (user) => {
  return ls.remove("user");
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

export const checkTokenApi = (token) => {
  console.log("Login Api");
  const apiString = url + "/api/user/unauth/authtoken";
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
        console.log(res.data.user);
        resolve(res.data);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const signupGoogleApi = (googleIdToken) => {
  console.log("Signup Api");
  const apiString = url + "/api/user/unauth/signupgoogle";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        googleIdToken,
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const signupApi = (user) => {
  console.log("Signup Api");
  const apiString = url + "/api/user/unauth/signup";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        email: user.email,
        givenName: user.givenName,
        familyName: user.familyName,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const LoginApi = (user) => {
  console.log("Login Api");
  const apiString = url + "/api/user/unauth/signin";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const LoginGoogleApi = (googleIdToken) => {
  console.log("Login Api");
  const apiString = url + "/api/user/unauth/signwithgoogle";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, {
        googleIdToken,
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const UpdateUserApi = (user, token) => {
  const apiString = url + "/api/user/auth/update";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, user, {
        headers: { "x-api-key": token },
      })
      .then((res) => {
        console.log(res.data.Success);
        resolve(res.data);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const UpdateUserImageApi = (imagefile, token) => {
  console.log("Update Api");
  console.log(imagefile);
  var formData = new FormData();
  formData.append("image", imagefile);
  const apiString = url + "/api/user/auth/uploadimage";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, formData, {
        headers: { "x-api-key": token, "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const UpdateUserPasswordApi = (password, token) => {
  console.log("Update Password Api");
  const apiString = url + "/api/user/auth/updatepassword";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, password, {
        headers: { "x-api-key": token },
      })
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const SendPasswordMailApi = (email) => {
  console.log("Update Password Api");
  const apiString = url + "/api/user/unauth/resetpassword";
  return new Promise((resolve, reject) => {
    axios
      .post(apiString, email)
      .then((res) => {
        console.log(res.data.Message);
        resolve(res.data.Message);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const finishWatchVideoApi = (token, course_id, video_id) => {
  console.log("finish watching video api");
  const apiString = url + "/api/user/auth/finish-video";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        {
          course_id,
          video_id,
        },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        console.log(res.data.user);
        resolve(res.data.user);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};

export const requestCertificateApi = (token, email, group_id) => {
  console.log("Request Certificate Api");
  const apiString = url + "/api/user/auth/requestCer";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        {
          email: email,
          group_id: group_id,
        },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        console.log(res.data.status);
        resolve(res.data.status);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
