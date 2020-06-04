import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import ListPanel from "./ListPanel";
import TitlePanel from "./TitlePanel";
import DetailPanel from "./DetailPanel";
import VideoPanel from "./VideoPanel";
import PremiumPanel from "./PremiumPanel";
import { connect } from "react-redux";
import {
  updateUserWatchedVideo,
  startCreateUserGoogle,
} from "../../Redux/Selectors/userSelector";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    paddingLeft: "0px",
    paddingRight: "0px",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  PremiumArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,1)",
  },
}));

const CourseVideoContent = (props) => {
  const classes = useStyles();
  const [videoHeight, setVideoHeight] = React.useState(0);
  const [listState, setListState] = React.useState({
    selChapter: 0,
    selSection: 0,
    shownChapters: { 0: true },
  });
  const [isWorking, setIsWorking] = React.useState(true);
  const [currentVideoIsPlaying, setCurrentVideoIsPlaying] = React.useState(
    false
  );
  const [playerVideo, setPlayerVideo] = React.useState("422209484");

  const expandChapters = (index) => {
    setListState({
      shownChapters: {
        ...listState.shownChapters,
        [index]: !listState.shownChapters[index],
      },
    });
  };

  const playVideo = (videoId, chapter, section) => {
    console.log("update", chapter, " ", section);
    setListState((prevState) => {
      return {
        ...prevState,
        selChapter: chapter,
        selSection: section,
      };
    });
    setPlayerVideo(videoId);
  };

  const playNextVideo = () => {
    console.log(props.chapters.length);
    console.log("chap", listState.selChapter);
    console.log("sec", listState.selSection);
    const newSelSection = listState.selSection + 1;
    if (props.chapters[listState.selChapter].sections.length > newSelSection) {
      setListState((prevState) => {
        return {
          ...prevState,
          selChapter: listState.selChapter,
          selSection: newSelSection,
        };
      });
      setPlayerVideo(
        props.chapters[listState.selChapter].sections[newSelSection].video
      );
    }
  };

  React.useEffect(() => {
    if (props.courseTitle) {
      console.log("Course is ready");
      setIsWorking(false);
    }
  }, [props.courseTitle]);

  const onResize = (width) => {
    console.log(width);
    setVideoHeight(width * 0.56);
  };

  const onPlay = () => {
    console.log("play");
    setCurrentVideoIsPlaying(true);
  };

  const onStop = () => {
    console.log("stop");
    setCurrentVideoIsPlaying(false);
  };

  const finishVideo = (videoId) => {
    console.log("finished:", videoId);
    props
      .dispatch(updateUserWatchedVideo(props.token, props.course_id, videoId))
      .then((user) => {})
      .catch((err) => {
        props.showMessages(2, "Bir problem var.");
      });
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
        <div>
          <TitlePanel
            isBelongNinja={props.isBelongNinja}
            courseTitle={props.courseTitle}
            instructor={props.instructor}
          ></TitlePanel>
          <Grid container className={classes.grid} spacing={1}>
            <Grid style={{ height: videoHeight }} item sm={8} xs={12}>
              {playerVideo != "" ? (
                <VideoPanel
                  playerVideo={playerVideo}
                  playNextVideo={playNextVideo}
                  onResize={onResize}
                  onPlay={onPlay}
                  onStop={onStop}
                  finishVideo={finishVideo}
                ></VideoPanel>
              ) : (
                <div className={classes.PremiumArea}>
                  <PremiumPanel></PremiumPanel>
                </div>
              )}
            </Grid>
            <Grid
              style={{ height: videoHeight, overflow: "auto" }}
              item
              sm={4}
              xs={12}
            >
              <ListPanel
                registeredCourse={props.registeredCourse}
                courseDuration={props.courseDuration}
                currentVideoIsPlaying={currentVideoIsPlaying}
                numberOfVideos={props.numberOfVideos}
                courseChapters={props.chapters}
                listState={listState}
                changeVideo={playVideo}
                expandChapters={expandChapters}
                premium={props.premium}
              ></ListPanel>
            </Grid>
          </Grid>
          <DetailPanel abilities={props.abilities}></DetailPanel>
        </div>
      )}
    </Container>
  );
};

const CourseVideoContentCon = connect((state) => {
  var results = state.userReducer.registeredCourses.filter(
    (registeredCourse) => {
      return registeredCourse._id.indexOf("5df92c57ea9f59862aabd1ab") > -1;
    }
  );
  var registeredCourse = null;
  if (results.length > 0) {
    registeredCourse = results[0];
  }
  return {
    _id: state.courseReducer._id,
    token: state.userReducer.token,
    course_id: state.courseReducer._id,
    courseTitle: state.courseReducer.title,
    isBelongNinja: state.courseReducer.isBelongNinja,
    instructor: state.courseReducer.instructor,
    description: state.courseReducer.description,
    courseDuration: state.courseReducer.duration,
    numberOfVideos: state.courseReducer.numberOfSections,
    chapters: state.courseReducer.chapters,
    abilities: state.courseReducer.abilities,
    premium: state.userReducer.premium,
    registeredCourse,
  };
})(CourseVideoContent);

export default CourseVideoContentCon;