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
import TextAreaStart from "./TextAreaStart";
import TextAreaEnd from "./TextAreaEnd";
import { findApplication } from "../../Api/applicationApi";
import { connect } from "react-redux";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  container: { marginTop: theme.spacing(2) },
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
  const [application, setApplication] = React.useState();
  const [overallPer, setOverallPer] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(0);

  const findApp = () => {
    findApplication("5edb4b1bb4965a757aa6d7a1") // skip limit
      .then((app) => {
        // const array = app.courseGroups.filter(function (courseGroup) {
        //   return courseGroup._id == props.match.params.id;
        // });
        // if (array.length > 0) {
        //   setApplication(app);
        // }
        setApplication(app);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log(application);
    if (!application) {
      findApp();
    } else {
      setIsWorking(false);
    }
  }, [application]);

  React.useEffect(() => {
    if (props._id != "") {
      var sum = 0;
      props.registeredCourses.filter(function (registeredCourse) {
        sum = sum + registeredCourse.percentage;
      });
      setOverallPer(overallPer + (sum * 100) / props.registeredCourses.length);
    }
  }, [props._id]);

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
          <Grid style={{ marginTop: 100 }} item xs={4}>
            <List className={classes.List}>
              {application.courseGroups.map((CourseGroup, index) => {
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
                    <ListItemText primary={CourseGroup.name} />
                  </ListItem>
                );
              })}
            </List>
            <TextAreaEnd isFinish={overallPer > 90}></TextAreaEnd>
          </Grid>
          <Grid style={{ marginTop: 100 }} item xs={4}>
            <Timeline
              height={application.courseGroups[0].courses.length * 500}
              progress={overallPer}
            >
              {application.courseGroups[0].courses.map((course, index) => {
                const array = props.registeredCourses.filter(function (
                  registeredCourse
                ) {
                  return registeredCourse._id == course._id;
                });
                if (array.length > 0) {
                  course = array[0];
                }
                return (
                  <Bookmark key={course._id} progress={index * 25}>
                    <div>
                      <Button
                        className={classes.PremiumButton}
                        variant="contained"
                        color="primary"
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
