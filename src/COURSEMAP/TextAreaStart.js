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
import { useHistory } from "react-router-dom";
import BuyButton from "../Components/BuyButton/BuyButton";
import BuyButtonMobile from "../Components/BuyButton/BuyButtonMobile";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  PremiumButton: {
    borderRadius: 50,
    marginTop: theme.spacing(4),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function TextArea(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography
            className={classes.text1}
            variant="h5"
            component="h5"
            align="center"
          >
            {props.title}
          </Typography>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="center"
          >
            {props.desc}
          </Typography>
        </Grid>
        <Grid
          item
          style={{ marginTop: "30px" }}
          className={classes.sectionDesktop}
        >
          <BuyButton
            premiumCourseGroups={props.premiumCourseGroups}
            courseGroup={props.courseGroup}
            width={550}
          ></BuyButton>
        </Grid>
        <Grid
          style={{ marginTop: "30px" }}
          className={classes.sectionMobile}
          item
        >
          <BuyButtonMobile
            premiumCourseGroups={props.premiumCourseGroups}
            courseGroup={props.courseGroup}
            width={300}
          ></BuyButtonMobile>
        </Grid>
      </Grid>
    </Container>
  );
}
