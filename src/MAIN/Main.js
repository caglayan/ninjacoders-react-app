import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Slider from "./Slider";
import TextArea from "./TextArea";
import Supporters from "./Supporters";
import CourseArea from "./Courses";
import Comments from "./Comments";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  container: { marginTop: theme.spacing(2) },
}));

export default function Main(props) {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth={false}
    >
      <Slider></Slider>
      <TextArea></TextArea>
      <CourseArea></CourseArea>
      <Comments></Comments>
      <Supporters></Supporters>
    </Container>
  );
}
