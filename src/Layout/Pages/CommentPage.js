import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MakeComment from "../../Components/MakeComment/MakeComment";

const useStyles = makeStyles((theme) => ({
  Container: {
    background: "transparent",
    borderRadius: "10px",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

export default function SignInPageContent(props) {
  const classes = useStyles();
  return (
    <Container className={classes.Container} maxWidth="sm">
      <MakeComment {...props}></MakeComment>
    </Container>
  );
}
