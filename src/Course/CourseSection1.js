import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CircularProgress,
  Box,
  Container,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import { connect } from "react-redux";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineOutlined from "@material-ui/icons/PlayCircleOutlineOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import PauseCircleOutlineOutlined from "@material-ui/icons/PauseCircleOutlineOutlined";
import VideoPlayer from "../Components/CourseHelpers/VideoPlayer";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

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
  courseName: {
    paddingInlineEnd: "10px",
    display: "inline-flex",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      borderRight: "none",
    },
  },
  courseType: {
    borderLeft: "0.05em solid black",
    paddingInlineStart: "10px",
    display: "inline-flex",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      display: "none",
    },
  },
  CourseInstName: {
    paddingInlineEnd: "10px",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  followButton: {
    margin: "0px",
    paddingInlineStart: "10px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  grid: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "stretch",
    width: "100%",
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    height: "60px",
  },
  tabs: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.secondary.dark,
    minWidth: "36px",
  },
  noVideo: {
    width: "100%",
    height: "100%",
  },
}));

const CourseVideoContent = (props) => {
  const classes = useStyles();
  const [courseState, setCourseState] = React.useState({
    selChapter: 0,
    selSection: 0,
    shownChapters: { 0: true },
  });
  const [isWorking, setIsWorking] = React.useState(true);
  const [playerState, setPlayerState] = React.useState(false);
  const [playerVideo, setPlayerVideo] = React.useState("422209484");

  const expandChapters = (index) => {
    setCourseState({
      shownChapters: {
        ...courseState.shownChapters,
        [index]: !courseState.shownChapters[index],
      },
    });
  };

  const playVideo = (videoId, chapter, section) => {
    console.log("update", chapter, " ", section);
    setCourseState((prevState) => {
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
    console.log("chap", courseState.selChapter);
    console.log("sec", courseState.selSection);
    const newSelSection = courseState.selSection + 1;
    if (
      props.chapters[courseState.selChapter].sections.length > newSelSection
    ) {
      setCourseState((prevState) => {
        return {
          ...prevState,
          selChapter: courseState.selChapter,
          selSection: newSelSection,
        };
      });
      setPlayerVideo(
        props.chapters[courseState.selChapter].sections[newSelSection].video
      );
    }
  };

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

  React.useEffect(() => {
    if (props.title) {
      console.log("Course is ready");
      setIsWorking(false);
    }
  }, [props.title]);

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
          <Typography variant="h5" component="h1">
            <Box className={classes.courseName}>{props.title}</Box>
            {props.isBelongNinja == true ? (
              <Box className={classes.courseType}>Original</Box>
            ) : null}
          </Typography>
          <Typography variant="subtitle1" component="h1">
            <Box
              className={classes.CourseInstName}
              fontWeight="fontWeightLight"
            >
              {props.instructor
                ? props.instructor.givenName + " " + props.instructor.familyName
                : null}
            </Box>
            <Box
              className={classes.followButton}
              fontWeight="fontWeightBold"
            ></Box>
          </Typography>
          <Grid container className={classes.grid} spacing={1}>
            <Grid
              id="video"
              style={{
                height: "auto",
                width: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
              item
              sm={8}
              xs={12}
            >
              {playerVideo != "" ? (
                <VideoPlayer
                  playNextVideo={playNextVideo}
                  video={playerVideo}
                ></VideoPlayer>
              ) : (
                <div className={classes.noVideo}>asdasd</div>
              )}
            </Grid>
            <Grid
              className={classes.gridChild}
              style={{
                height: props.height + "px",
                overflow: "auto",
                whiteSpace: "nowrap",
              }}
              item
              sm={4}
              xs={12}
            >
              <List>
                <ListItem key="112233">
                  <Box
                    className={classes.CourseInstName}
                    fontWeight="fontWeightLight"
                  >
                    <Typography variant="subtitle1">
                      {props.numberOfSections} Ders {msToTime(props.duration)}
                    </Typography>
                  </Box>
                </ListItem>
                {props.chapters
                  ? props.chapters.map((chapter, indexChap) => {
                      return (
                        <div key={indexChap}>
                          <ListItem
                            button
                            onClick={() => {
                              return expandChapters(indexChap);
                            }}
                          >
                            <ListItemText
                              secondary={indexChap + 1 + ". " + chapter.title}
                            />
                            {courseState.shownChapters[indexChap] ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            )}
                          </ListItem>
                          <Collapse
                            in={courseState.shownChapters[indexChap]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {chapter.sections.map((section, indexSec) => {
                                return (
                                  <ListItem
                                    button
                                    key={section._id}
                                    className={classes.nested}
                                    selected={
                                      courseState.selChapter === indexChap &&
                                      courseState.selSection === indexSec
                                        ? true
                                        : false
                                    }
                                    onClick={() => {
                                      console.log("sec", section.video);
                                      playVideo(
                                        section.video,
                                        indexChap,
                                        indexSec
                                      );
                                    }}
                                  >
                                    {section.video !== "" ? (
                                      <ListItemIcon className={classes.icon}>
                                        {playerState.isPlaying === true &&
                                        courseState.selChapter === indexChap &&
                                        courseState.selSection === indexSec ? (
                                          <PauseCircleOutlineOutlined />
                                        ) : (
                                          <PlayCircleOutlineOutlined />
                                        )}
                                      </ListItemIcon>
                                    ) : (
                                      <ListItemIcon className={classes.icon}>
                                        <LockOutlined />
                                      </ListItemIcon>
                                    )}

                                    <ListItemText secondary={section.title} />
                                  </ListItem>
                                );
                              })}
                            </List>
                          </Collapse>
                        </div>
                      );
                    })
                  : null}
              </List>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "10px" }} spacing={2}>
            <Grid item>
              Bu eğitimdeki yetenekler:
              <Chip
                style={{ marginLeft: 8 }}
                label="#Python"
                variant="outlined"
              />
              <Chip
                style={{ marginLeft: 8 }}
                label="#Veri Görselleştirme"
                variant="outlined"
              />
              <Chip
                style={{ marginLeft: 8 }}
                label="#Metin Madenciliği"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  );
};

const CourseVideoContentCon = connect((state) => {
  return {
    _id: state.courseReducer._id,
    title: state.courseReducer.title,
    isBelongNinja: state.courseReducer.isBelongNinja,
    instructor: state.courseReducer.instructor,
    description: state.courseReducer.description,
    duration: state.courseReducer.duration,
    numberOfSections: state.courseReducer.numberOfSections,
    chapters: state.courseReducer.chapters,
  };
})(CourseVideoContent);

export default CourseVideoContentCon;
