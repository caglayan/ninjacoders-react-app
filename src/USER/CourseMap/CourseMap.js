import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Container,
  Grid,
  Button,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  ListSubheader,
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
}));

const CourseMap = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);
  const [overallPer, setOverallPer] = React.useState(0);
  const [courseGroups, setCourseGroups] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const history = useHistory();

  React.useEffect(() => {
    if (props.applicationCourseGroups) {
      props.dispatch(startRemoveCourse());
      props.applicationCourseGroups.map((courseGroupId, index) => {
        findCourseGroupIn(courseGroupId);
      });
    }
  }, [props.applicationCourseGroups]);

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
    if (props.applicationCourseGroups.length > 0) {
      if (courseGroups.length === props.applicationCourseGroups.length) {
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
          <Grid item xs={12} md={4}>
            <Timeline
              height={courseGroups[selectedItem].courses.length * 500}
              progress={overallPer * 100}
            >
              {courseGroups[selectedItem].courses.map((course_id, index) => {
                const array = props.registeredCourses.filter(function (
                  registeredCourse
                ) {
                  return registeredCourse._id == course_id;
                });

                return (
                  <Bookmark
                    key={course_id}
                    progress={
                      (index * 100) / courseGroups[selectedItem].courses.length
                    }
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
              })}
            </Timeline>
          </Grid>
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
}))(CourseMap);

export default CourseMapCon;
