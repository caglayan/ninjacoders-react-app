import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid, Button } from "@material-ui/core";
import CourseCard from "../Components/CourseCard/CourseCard";
import { Timeline, Bookmark, Marker } from "react-vertical-timeline";
import "react-vertical-timeline/style.css";
import TextAreaStart from "./TextAreaStart";
import TextAreaEnd from "./TextAreaEnd";
import { findApplication } from "../Api/applicationApi";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { findCourseGroup } from "../Api/applicationApi";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  courseCard: {
    maxWidth: 100,
  },
}));

const CourseMap = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);
  const [courseGroup, setCourseGroup] = React.useState();
  const [overallPer, setOverallPer] = React.useState(0);
  const history = useHistory();

  const findCourseGroupIn = () => {
    console.log("group_id ", props.match.params.id);
    findCourseGroup(props.match.params.id) // skip limit
      .then((courseGroup) => {
        setCourseGroup(courseGroup);
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
      setIsWorking(false);
    }
  }, [courseGroup]);

  React.useEffect(() => {
    if (props._id != "") {
      var sum = 0;
      props.registeredCourses.filter(function (registeredCourse) {
        sum = sum + registeredCourse.percentage;
      });
      setOverallPer(overallPer + (sum * 100) / props.registeredCourses.length);
    }
  }, [props._id]);

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
        <Grid container direction="row" justify="center" alignItems="center">
          <TextAreaStart
            title={courseGroup.CM.title}
            desc={courseGroup.CM.desc}
            premium={props._id != "" && props.premium}
          ></TextAreaStart>
          <Grid style={{ marginTop: 100 }} item xs={12} md={4}>
            <Timeline
              height={courseGroup.courses.length * 500}
              progress={overallPer}
            >
              {courseGroup.courses.map((course, index) => {
                const array = props.registeredCourses.filter(function (
                  registeredCourse
                ) {
                  return registeredCourse._id == course._id;
                });
                if (array.length > 0) {
                  course.percentage = array[0].percentage;
                }
                return (
                  <Bookmark key={course._id} progress={index * 25}>
                    <div>
                      <Button
                        className={classes.PremiumButton}
                        onClick={() => {
                          history.push(`/course/` + course._id);
                        }}
                        variant="contained"
                        color={!course.percentage ? "primary" : "secondary"}
                      >
                        {!course.percentage
                          ? "Derse Başlayın"
                          : "Derse Devam edin"}
                      </Button>
                      <CourseCard
                        mini
                        className={classes.courseCard}
                        {...course}
                      ></CourseCard>
                    </div>
                  </Bookmark>
                );
              })}
            </Timeline>
          </Grid>
          <TextAreaEnd isFinish={overallPer > 90}></TextAreaEnd>
        </Grid>
      )}
    </Container>
  );
};

const CourseMapCon = connect((state) => ({
  _id: state.userReducer._id,
  premium: state.userReducer.premium,
  registeredCourses: state.userReducer.registeredCourses,
}))(CourseMap);

export default CourseMapCon;
