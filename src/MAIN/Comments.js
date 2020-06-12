import React from "react";
import {
  Fade,
  Slide,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import CommentPanel from "../Components/CommentHelpers/CommentPanel";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(12),
    },
  },
  comments: {
    marginTop: theme.spacing(6),
  },
}));

export default function TextArea() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Typography
        className={classes.text1}
        variant="h5"
        component="h5"
        align="center"
      >
        Yüzlerce kişi bizi izledi
      </Typography>
      <Typography
        className={classes.text1}
        variant="h6"
        component="h6"
        align="center"
      >
        Ninjacoders çocuklarınızı kodlama ve robotiğin dünyasında B.Ü.yülü bir
        yolculuğa çıkarıyor. 4 Haftalık eğitimler (Algoritma 101, Robot 101) ve
        haftalık Ekransız Kodlama eğitimleri ile çocuklar teknolojiyi Boğaziçi
        Üniversitesi'nde tanıyor.
      </Typography>
      <div className={classes.comments}>
        <CommentPanel className={classes.commentContainer}></CommentPanel>
        <CommentPanel className={classes.commentContainer}></CommentPanel>
        <CommentPanel className={classes.commentContainer}></CommentPanel>
        <CommentPanel className={classes.commentContainer}></CommentPanel>
      </div>
    </Container>
  );
}
