import axios from "axios";
import ls from "local-storage";

// const url = "http://localhost:4000";
const url = "https://ninjaoders-backend.herokuapp.com";

export const pullPaymentForm = (token) => {
  console.log("Pull Payment Form Api");
  const apiString = url + "/api/checkout/auth/payment";
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
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
