import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid, Button } from "@material-ui/core";
import CourseCard from "../Components/CourseCard/CourseCard";
import { Timeline, Bookmark, Marker } from "react-vertical-timeline";
import "react-vertical-timeline/style.css";
import TextAreaStart from "./TextAreaStart";
import TextAreaEnd from "./TextAreaEnd";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { findCourseGroup } from "../Api/applicationApi";
import { startRemoveCourse } from "../Redux/Selectors/courseSelector";

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
      props.dispatch(startRemoveCourse());
      findCourseGroupIn();
    } else {
      setIsWorking(false);
      if (props._id != "") {
        var sum = 0;
        props.registeredCourses.filter(function (registeredCourse) {
          sum = sum + registeredCourse.percentage;
        });
        console.log("deneme:", sum / (courseGroup.courses.length * 100));

        setOverallPer(sum / courseGroup.courses.length);
      }
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
            courseGroup={courseGroup}
            premiumCourseGroups={props.premiumCourseGroups}
          ></TextAreaStart>
          <Grid style={{ marginTop: 100 }} item xs={12} md={4}>
            <Timeline
              height={courseGroup.courses.length * 500}
              progress={overallPer * 100}
            >
              {courseGroup.courses.map((course_id, index) => {
                const array = props.registeredCourses.filter(function (
                  registeredCourse
                ) {
                  return registeredCourse._id == course_id;
                });

                return (
                  <Bookmark
                    key={course_id}
                    progress={(index * 100) / courseGroup.courses.length}
                  >
                    <div>
                      <Button
                        className={classes.PremiumButton}
                        onClick={() => {
                          history.push(`/course/` + course_id);
                        }}
                        variant="contained"
                        color={!array.length > 0 ? "primary" : "secondary"}
                      >
                        {!array.length > 0 ? (
                          "Derse Başlayın"
                        ) : (
                          <div>
                            {array[0].percentage > 0.9
                              ? "Dersi bitirdiniz!"
                              : "Derse Devam edin"}
                          </div>
                        )}
                      </Button>
                      <CourseCard
                        mini
                        percentage={
                          array.length > 0 ? array[0].percentage : null
                        }
                        className={classes.courseCard}
                        course_id={course_id}
                      ></CourseCard>
                    </div>
                  </Bookmark>
                );
              })}
            </Timeline>
          </Grid>
          <TextAreaEnd
            certificateOpen={() => {
              props.certificateOpenId(courseGroup._id);
            }}
            percentage={overallPer}
          ></TextAreaEnd>
        </Grid>
      )}
    </Container>
  );
};

const CourseMapCon = connect((state) => ({
  _id: state.userReducer._id,
  premium: state.userReducer.premium,
  premiumCourseGroups: state.userReducer.premiumCourseGroups,
  registeredCourses: state.userReducer.registeredCourses,
}))(CourseMap);

export default CourseMapCon;
