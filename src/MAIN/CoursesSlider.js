import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Grid,
  CircularProgress,
  Container,
  Typography,
  Box,
  Button,
} from "@material-ui/core/";
import CourseCard from "../Components/CourseCard/CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { useHistory } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";
import { findCourseGroup } from "../Api/applicationApi";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(12),
    },
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
  mapButton: {
    marginTop: theme.spacing(2),
  },
}));

const CourseCrousel = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [courseGroup, setCourseGrouplication] = React.useState();
  const [isWorking, setIsWorking] = React.useState(true);

  const findCourseGroupIn = () => {
    findCourseGroup(props.group_id) // skip limit
      .then((courseGroup) => {
        setCourseGrouplication(courseGroup);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log(courseGroup);
    if (!courseGroup) {
      findCourseGroupIn();
    } else {
      console.log(courseGroup);
      setIsWorking(false);
    }
  }, [courseGroup]);

  return (
    <Container className={classes.container} maxWidth="lg">
      {isWorking ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <CircularProgress
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
              color="primary"
              size={40}
            />
          </Grid>
        </Grid>
      ) : (
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ paddingRight: "5%", paddingLeft: "5%" }}
          >
            <Grid item>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                {courseGroup ? courseGroup.name : null}
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.sectionDesktop}>
            <Carousel
              slidesPerPage={
                courseGroup.courses.length < 4 ? courseGroup.courses.length : 4
              }
              arrows
              dots
              infinite
            >
              {courseGroup
                ? courseGroup.courses.map((course_id, index) => {
                    const array = props.registeredCourses.filter(function (
                      registeredCourse
                    ) {
                      return registeredCourse._id == course_id;
                    });

                    return (
                      <CourseCard
                        key={course_id}
                        percentage={
                          array.length > 0 ? array[0].percentage : null
                        }
                        course_id={course_id}
                      ></CourseCard>
                    );
                  })
                : null}
            </Carousel>
          </div>
          <div className={classes.sectionMobile}>
            <Carousel slidesPerPage={1} arrows dots infinite>
              {courseGroup
                ? courseGroup.courses.map((course_id, index) => {
                    const array = props.registeredCourses.filter(function (
                      registeredCourse
                    ) {
                      return registeredCourse._id == course_id;
                    });

                    return (
                      <CourseCard
                        key={course_id}
                        percentage={
                          array.length > 0 ? array[0].percentage : null
                        }
                        course_id={course_id}
                      ></CourseCard>
                    );
                  })
                : null}
            </Carousel>
          </div>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                className={classes.mapButton}
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push(`/coursemap/` + courseGroup._id);
                }}
              >
                <Typography variant="body1" style={{ marginRight: "5px" }}>
                  Bütün {courseGroup ? courseGroup.shortName : null} ve
                  Sertifikaya gözat
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.PremiumButton}
                variant="contained"
                color="secondary"
                onClick={() => {
                  history.push("/user/checkout?courseGroup=" + courseGroup._id);
                }}
              >
                <Typography variant="body1" style={{ marginRight: "5px" }}>
                  Tüm {courseGroup ? courseGroup.shortName : null} + Sertifika:
                </Typography>
                <Typography variant="h6">
                  {courseGroup
                    ? (courseGroup.price.base * (1 - courseGroup.price.sale))
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")
                    : null}{" "}
                  ₺
                </Typography>
                {courseGroup.price.isSale ? (
                  <div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      %{" "}
                      {courseGroup
                        ? (courseGroup.price.sale * 100).toString()
                        : null}{" "}
                      indirim
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        marginLeft: "10px",
                        textDecoration: "line-through",
                      }}
                    >
                      {courseGroup
                        ? courseGroup.price.base
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")
                        : null}{" "}
                      ₺
                    </Typography>
                  </div>
                ) : null}
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

const CourseCrouselCon = connect((state) => ({
  _id: state.userReducer._id,
  premium: state.userReducer.premium,
  registeredCourses: state.userReducer.registeredCourses,
}))(CourseCrousel);

export default CourseCrouselCon;
