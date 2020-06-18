import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@material-ui/core/";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { findPublicCourseWithId } from "../../Api/courseApi";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 270,
    minWidth: 230,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Star = ({ willBeActive, isActive, style }) => {
  const fill = isActive ? "#fc6" : willBeActive ? "#ffdd99" : "#e3e3e3";
  return (
    <svg viewBox="0 0 19.481 19.481" width="16" height="16" style={style}>
      <path
        fill={fill}
        d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"
      />
    </svg>
  );
};

export default function CourseReviewCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [course, setCourse] = React.useState();
  const [isWorking, setIsWorking] = React.useState(true);

  const msToTime = (duration) => {
    let seconds = Math.floor(duration % 60),
      minutes = Math.floor((duration / 60) % 60),
      hours = Math.floor((duration / (60 * 60)) % 24);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let str = "";
    if (hours > 0) {
      str = "(" + str + hours + " saat " + minutes + " dakika" + ")";
    } else if (minutes > 0) {
      str = "(" + str + minutes + " dakika" + ")";
    }
    return str;
  };

  const downloadCourse = () => {
    console.log("downloadable: ", props.course_id);
    if (props.course_id) {
      findPublicCourseWithId(props.course_id)
        .then((courseIn) => {
          setCourse(courseIn);
          setIsWorking(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  React.useEffect(() => {
    if (props.isDownloadable) {
      downloadCourse();
    }
  }, [props.isDownloadable]);

  return (
    <div>
      {course ? (
        <div>
          {isWorking ? (
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <CircularProgress
                  style={{ marginTop: "5vh", marginBottom: "5vh" }}
                  color="primary"
                  size={40}
                />
              </Grid>
            </Grid>
          ) : (
            <Card
              onClick={() => {
                history.push("/course/" + course._id);
              }}
              className={classes.root}
            >
              <Grid
                container
                style={{ marginTop: 5, marginBottom: 5 }}
                justify="space-between"
                alignItems="center"
                spacing={1}
              >
                <Grid style={{ marginLeft: 5 }} item>
                  <Typography variant="body2" color="textSecondary">
                    {course.statistics
                      ? course.statistics.numberStudents
                      : null}{" "}
                    Öğrenci
                  </Typography>
                </Grid>
                <Grid style={{ marginRight: 5 }} item>
                  <Typography variant="body2" color="textSecondary">
                    {course.statistics
                      ? course.statistics.numberSections
                      : null}{" "}
                    Ders{" "}
                    {course.statistics
                      ? msToTime(course.statistics.duration)
                      : null}
                  </Typography>
                </Grid>
              </Grid>
              <CardMedia
                className={classes.media}
                image={course.thumbnail}
                title="Course ThumbNail"
              />
              <CardContent>
                <Grid
                  container
                  style={{ marginTop: 5, marginBottom: 5 }}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Box height="70px">
                      <Typography variant="h6" color="textPrimary">
                        {course.title}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      {course.instructor.givenName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {course.instructor.familyName}
                    </Typography>
                  </Grid>
                  <Grid
                    style={{ marginTop: 5, alignItems: "right" }}
                    item
                    xs={6}
                  >
                    <Rater
                      style={{ float: "right", display: "block" }}
                      total={5}
                      rating={
                        course.statistics ? course.statistics.rating : null
                      }
                      interactive={false}
                    >
                      <Star />
                    </Rater>
                    <Typography
                      style={{ float: "right", display: "block" }}
                      align="right"
                      variant="body2"
                      color="textSecondary"
                    >
                      Puan:{" "}
                      {course.statistics ? course.statistics.rating : null}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              {props.percentage ? (
                <Box m={2} style={{ marginTop: 0 }}>
                  <Progress percent={Math.floor(props.percentage * 100)} />
                </Box>
              ) : null}
            </Card>
          )}
        </div>
      ) : (
        <Card
          onClick={() => {
            history.push("/course/" + props._id);
          }}
          className={classes.root}
        >
          <Grid
            container
            style={{ marginTop: 5, marginBottom: 5 }}
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid style={{ marginLeft: 5 }} item>
              <Typography variant="body2" color="textSecondary">
                {props.statistics ? props.statistics.numberStudents : null}{" "}
                Öğrenci
              </Typography>
            </Grid>
            <Grid style={{ marginRight: 5 }} item>
              <Typography variant="body2" color="textSecondary">
                {props.statistics ? props.statistics.numberSections : null} Ders{" "}
                {props.statistics ? msToTime(props.statistics.duration) : null}
              </Typography>
            </Grid>
          </Grid>
          <CardMedia
            className={classes.media}
            image={props.thumbnail}
            title="Course ThumbNail"
          />
          <CardContent>
            <Grid
              container
              style={{ marginTop: 5, marginBottom: 5 }}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Box height="70px">
                  <Typography variant="h6" color="textPrimary">
                    {props.title}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">
                  {props.instructor.givenName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.instructor.familyName}
                </Typography>
              </Grid>
              <Grid style={{ marginTop: 5, alignItems: "right" }} item xs={6}>
                <Rater
                  style={{ float: "right", display: "block" }}
                  total={5}
                  rating={props.statistics ? props.statistics.rating : null}
                  interactive={false}
                >
                  <Star />
                </Rater>
                <Typography
                  style={{ float: "right", display: "block" }}
                  align="right"
                  variant="body2"
                  color="textSecondary"
                >
                  Puan: {props.statistics ? props.statistics.rating : null}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          {props.percentage ? (
            <Box m={2} style={{ marginTop: 0 }}>
              <Progress percent={Math.floor(props.percentage * 100)} />
            </Box>
          ) : null}
        </Card>
      )}
    </div>
  );
}
