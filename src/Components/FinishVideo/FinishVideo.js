import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import MakeComment from "../MakeComment/MakeComment";
import { connect } from "react-redux";
import CourseCard from "../CourseCard/CourseCard";
import { useHistory } from "react-router-dom";
import { findCourseGroup } from "../../Api/applicationApi";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const VideoPanel = (props) => {
  const classes = useStyles();
  const [courseGroup, setCourseGrouplication] = React.useState();
  const history = useHistory();
  const [isEnded, setIsEnded] = React.useState(false);

  const findCourseGroupIn = () => {
    findCourseGroup(props.course_id) // skip limit
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
      //setIsWorking(false);
    }
  }, [courseGroup]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" gutterBottom>
            Tebrikler! <br></br>Dersi başarı ile bitirdiniz.
          </Typography>
        </Box>
        <MakeComment {...props}></MakeComment>
      </Grid>
      <Grid style={{ width: "100%" }} item>
        <Box textAlign="center" m={1}>
          <Typography variant="h6" gutterBottom>
            Bu yolculuğun diğer derslerine göz atın!
          </Typography>
        </Box>
        <Box textAlign="center" m={1}>
          <Button
            onClick={() => {
              history.push(`/coursemap/` + props.group_id);
            }}
            className={classes.OtherCoursesButton}
            variant="contained"
            color="primary"
          >
            Yolculuğun diğer dersleri
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

VideoPanel.propTypes = {};

const VideoPanelCon = connect((state) => {
  return {
    _id: state.courseReducer._id,
    token: state.userReducer.token,
    course_id: state.courseReducer._id,
    group_id: state.courseReducer.group_id,
  };
})(VideoPanel);

export default VideoPanelCon;
