import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box, Button } from "@material-ui/core/";
import CourseCard from "../Components/CourseCard/CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { useHistory } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
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

export default function CourseCrousel(props) {
  const classes = useStyles();
  const history = useHistory();
  console.log(props);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: 100, paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Grid item>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="left"
          >
            {props.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.signinButton}
            onClick={() => {
              history.push(`/coursemap/` + props._id);
            }}
          >
            Bütün Dersler
          </Button>
        </Grid>
      </Grid>
      <div className={classes.sectionDesktop}>
        <Carousel slidesPerPage={4} arrows dots infinite>
          {props.courses.map((course, index) => {
            return <CourseCard key={course.course_id} {...course}></CourseCard>;
          })}
        </Carousel>
      </div>
      <div className={classes.sectionMobile}>
        <Carousel slidesPerPage={1} arrows centered dots infinite>
          {props.courses.map((course, index) => {
            return <CourseCard key={course.course_id} {...course}></CourseCard>;
          })}
        </Carousel>
      </div>
    </Container>
  );
}
