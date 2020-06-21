import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CircularProgress,
  Box,
  Divider,
  Grid,
  Container,
  Typography,
} from "@material-ui/core/";
import { connect } from "react-redux";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { startRemoveCourse } from "../../Redux/Selectors/courseSelector";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),

    background: "tarnsparent",
  },

  Avatar: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  List: {
    maxWidth: 200,
    margin: "auto",
  },
  ListItemActive: {
    backgroundColor: theme.palette.action.selected,
  },
}));
const QuestionsCont = (props) => {
  const classes = useStyles();
  const history = useHistory();
  React.useEffect(() => {
    props.dispatch(startRemoveCourse());
  }, []);

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {props.registeredCourses.map((registeredCourse, index) => (
          <Grid item>
            <CourseCard
              mini
              percentage={registeredCourse.percentage}
              className={classes.courseCard}
              course_id={registeredCourse._id}
            ></CourseCard>
          </Grid>
        ))}
        {props.registeredCourses.length == 0 ? (
          <div style={{ marginTop: 60 }}>
            <Typography
              className={classes.text1}
              variant="h5"
              component="h5"
              align="center"
            >
              Henüz izlediğiniz bir ders yok.
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
        ) : null}
      </Grid>
    </Container>
  );
};

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    avatarImage: state.userReducer.avatarImage,
    course_id: state.courseReducer._id,
    isUpdating: state.questionReducer.isUpdating,
    registeredCourses: state.userReducer.registeredCourses,
  };
})(QuestionsCont);
