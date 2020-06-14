import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SignInComp from "../../Components/SignIn/SignIn";

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
  return (
    <Container className={classes.Container} maxWidth="sm">
      <SignInComp {...props}></SignInComp>
    </Container>
  );
}
