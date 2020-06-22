import React from "react";
import {
  Fade,
  Button,
  Link,
  Typography,
  Box,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { pullPaymentForm } from "../Api/paymentApi";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
}));

const FreeCourses = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const paymentFormCheck = () => {
    pullPaymentForm(props.token, props.courseGroupId, props.codeName) // skip limit
      .then((result) => {
        console.log(result);
        if (result.status == "success") {
          history.push("/user/success?courseGroup=" + result.group_id);
        } else {
          console.log(result);
          props.showMessages(2, result.error);
        }
      })
      .catch((err) => {
        props.showMessages(2, err);
      });
  };

  return (
    <Box style={{ padding: "30px" }}>
      <Box textAlign="left" mt={2}>
        Bu dersler ve websitesi hazırlanırken ekip olarak çok emek veriyoruz.
      </Box>
      <Box textAlign="left" mt={2}>
        Lütfen sizler de, bizi sosyal medyada paylaşmayı ve güzel yorumlar
        yapmayı unutmayın.
      </Box>
      <Box textAlign="left" mt={2}>
        <Link href="https://www.facebook.com/Ninjacoders.co/">
          NinjaCoders Facebook
        </Link>{" "}
      </Box>
      <Box textAlign="left" mt={2}>
        <Link href="https://www.instagram.com/ninjacodersofficial/">
          NinjaCoders Instagram
        </Link>{" "}
      </Box>
      <Box textAlign="left" mt={2}>
        <Link href="https://www.linkedin.com/company/ninjacoders/">
          NinjaCoders Linkedin
        </Link>{" "}
      </Box>
      <Button
        variant="contained"
        style={{ marginTop: "30px" }}
        color="primary"
        onClick={() => {
          console.log("deneme");
          paymentFormCheck();
        }}
      >
        <Typography variant="h6">Ders grubuna ücretsiz katıl</Typography>
      </Button>
    </Box>
  );
};

const FreeCoursesCon = connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
  };
})(FreeCourses);

export default FreeCoursesCon;
