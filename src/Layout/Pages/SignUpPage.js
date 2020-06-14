import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import SignUpComp from "../../Components/SignUp/SignUp";

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
  return (
    <Container className={classes.Container} maxWidth="sm">
      <SignUpComp {...props}></SignUpComp>
    </Container>
  );
}
