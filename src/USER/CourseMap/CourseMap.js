import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Container,
  Grid,
  Button,
  List,
  Typography,
  ListItem,
  ListItemText,
  Box,
  Avatar,
} from "@material-ui/core";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { Timeline, Bookmark, Marker } from "react-vertical-timeline";
import "react-vertical-timeline/style.css";
import { useHistory } from "react-router-dom";
import TextAreaStart from "./TextAreaStart";
import TextAreaEnd from "./TextAreaEnd";
import { findApplication } from "../../Api/applicationApi";
import { connect } from "react-redux";
import { findCourseGroup } from "../../Api/applicationApi";
import { startRemoveCourse } from "../../Redux/Selectors/courseSelector";

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
      marginTop: theme.spacing(10),
    },
  },
  courseCard: {
    maxWidth: 100,
  },
  ListItemActive: {
    backgroundColor: theme.palette.action.selected,
  },
  sectionMobile: {
    [theme.breakpoints.down("md")]: {
      marginTop: 80,
    },
  },
}));

const CourseMap = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);
  const [overallPer, setOverallPer] = React.useState(0);
  const [courseGroups, setCourseGroups] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
    if (props.premiumCourseGroups.length > 0) {
      props.dispatch(startRemoveCourse());
      props.premiumCourseGroups.map((premiumCourse, index) => {
        findCourseGroupIn(premiumCourse.courseGroup_id);
      });
    }
  }, [props.premiumCourseGroups]);

  const findCourseGroupIn = (courseGroupId) => {
    findCourseGroup(courseGroupId) // skip limit
      .then((courseGroupIn) => {
        console.log(courseGroupIn);
        setCourseGroups([...courseGroups, courseGroupIn]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (props.premiumCourseGroups.length > 0) {
      if (courseGroups.length === props.premiumCourseGroups.length) {
        setIsWorking(false);
        console.log("ok", courseGroups);
      }
      if (props._id != "" && courseGroups[selectedItem]) {
        var sum = 0;
        props.registeredCourses.filter(function (registeredCourse) {
          sum = sum + registeredCourse.percentage;
        });
        console.log("deneme:", sum / courseGroups[selectedItem].courses.length);

        setOverallPer(sum / courseGroups[selectedItem].courses.length);
      }
    } else {
      setIsWorking(false);
      console.log("Hiç ders satın alınmamış.");
    }
  }, [courseGroups]);

  const selectItem = (index) => {
    setSelectedItem(index);
  };

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
        <Grid container direction="row" justify="center">
          {/* <TextAreaStart
            premium={props._id != "" && props.premium}
          ></TextAreaStart> */}
          {props.premiumCourseGroups.length == 0 ? (
            <div style={{ marginTop: 60 }}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                Şu an kayıtlı olduğunuz bir sertifika grubu yok.
              </Typography>
              <Typography
                className={classes.text1}
                variant="h6"
                component="h6"
                align="center"
              >
                Hadi dersleri izlemeye başla!
              </Typography>

              <Box textAlign="center">
                <Button
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    history.push(`/`);
                  }}
                  variant="contained"
                  color="primary"
                >
                  Bütün dersler
                </Button>
              </Box>
            </div>
          ) : (
            <Grid container direction="row" justify="center">
              <Grid item xs={12} md={4}>
                <List className={classes.List}>
                  {courseGroups
                    ? courseGroups.map((courseGroup, index) => {
                        return (
                          <ListItem
                            selected={index == selectedItem}
                            activeClassName={classes.ListItemActive}
                            button
                            onClick={() => {
                              console.log(selectedItem);
                              console.log(index);
                              selectItem(index);
                            }}
                            key={index}
                          >
                            <ListItemText primary={courseGroup.name} />
                          </ListItem>
                        );
                      })
                    : null}
                </List>
                <TextAreaEnd
                  certificateOpen={() => {
                    props.certificateOpenId(courseGroups[selectedItem]._id);
                  }}
                  percentage={overallPer}
                ></TextAreaEnd>
              </Grid>
              <Grid item className={classes.sectionMobile} xs={12} md={4}>
                <Timeline
                  height={courseGroups[selectedItem].courses.length * 500}
                  progress={overallPer * 100}
                >
                  {courseGroups[selectedItem].courses.map(
                    (course_id, index) => {
                      const array = props.registeredCourses.filter(function (
                        registeredCourse
                      ) {
                        return registeredCourse._id == course_id;
                      });

                      return (
                        <Bookmark
                          key={course_id}
                          progress={
                            (index * 100) /
                            courseGroups[selectedItem].courses.length
                          }
                        >
                          <div>
                            <Button
                              className={classes.PremiumButton}
                              onClick={() => {
                                history.push(`/course/` + course_id);
                              }}
                              variant="contained"
                              color={
                                !array.length > 0 ? "primary" : "secondary"
                              }
                            >
                              {!array.length > 0
                                ? "Derse Başlayın"
                                : "Derse Devam edin"}
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
                    }
                  )}
                </Timeline>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

const CourseMapCon = connect((state) => ({
  _id: state.userReducer._id,
  premium: state.userReducer.premium,
  registeredCourses: state.userReducer.registeredCourses,
  applicationCourseGroups: state.applicationReducer.courseGroups,
  premiumCourseGroups: state.userReducer.premiumCourseGroups,
}))(CourseMap);

export default CourseMapCon;
