import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Slider from "./Slider";
import TextArea from "./TextArea";
import Supporters from "./Supporters";
import CourseArea from "./CoursesSlider";
import Comments from "./Comments";
import { connect } from "react-redux";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Main = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);

  React.useEffect(() => {
    if (props.applicationComments) {
      setIsWorking(false);
    }
  }, [props.applicationComments]);

  return (
    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth={false}
    >
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
          <Slider></Slider>
          <TextArea></TextArea>
          {props.applicationCourseGroups.map((courseGroupId, index) => {
            return (
              <CourseArea
                group_id={courseGroupId}
                key={courseGroupId}
              ></CourseArea>
            );
          })}
          <Comments comments={props.applicationComments}></Comments>
          <Supporters></Supporters>
        </div>
      )}
    </Container>
  );
};

const MainCon = connect((state) => ({
  _id: state.userReducer._id,
  applicationComments: state.applicationReducer.comments,
  applicationCourseGroups: state.applicationReducer.courseGroups,
}))(Main);

export default MainCon;
