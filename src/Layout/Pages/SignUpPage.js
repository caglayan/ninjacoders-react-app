import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SignUpComp from "../../Components/SignUp/SignUp";
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

export default function SignUpPageContent(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.Container} maxWidth="sm">
      <SignUpComp
        closeDialog={() => {
          history.push(queryString.parse(props.location.search).via);
        }}
        signInOpen={() => {
          history.push(
            "/signin?via=" + queryString.parse(props.location.search).via
          );
        }}
        {...props}
      ></SignUpComp>
    </Container>
  );
}
