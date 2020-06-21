import axios from "axios";
import ls from "local-storage";

//const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

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

export const pullPaymentForm = (token, group_id, code_name) => {
  console.log("Pull Payment Form Api");
  const apiString = url + "/api/checkout/auth/payment";
  return new Promise((resolve, reject) => {
    axios
      .post(
        apiString,
        { group_id, code_name },
        {
          headers: { "x-api-key": token },
        }
      )
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        manageError(reject, err);
      });
  });
};
