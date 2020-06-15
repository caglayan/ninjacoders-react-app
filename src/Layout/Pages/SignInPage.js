import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SignInComp from "../../Components/SignIn/SignIn";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Container: {
    background: "#fff",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      borderRadius: "10px",
    },
  },
}));

export default function SignInPageContent(props) {
  const classes = useStyles();
  const history = useHistory();

  console.log(queryString.parse(props.location.search));

  return (
    <Container className={classes.Container} maxWidth="sm">
      <SignInComp
        closeDialog={() => {
          history.push(queryString.parse(props.location.search).via);
        }}
        signUpOpen={() => {
          history.push(
            "/signup?via=" + queryString.parse(props.location.search).via
          );
        }}
        {...props}
      ></SignInComp>
    </Container>
  );
}
