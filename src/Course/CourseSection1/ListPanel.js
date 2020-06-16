import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Button,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PlayCircleOutlineOutlined from "@material-ui/icons/PlayCircleOutlineOutlined";
import LockOutlined from "@material-ui/icons/LockOutlined";
import PauseCircleOutlineOutlined from "@material-ui/icons/PauseCircleOutlineOutlined";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import PropTypes from "prop-types";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  courseDuration: {
    paddingInlineEnd: "10px",
    margin: "0px",
    display: "inline-flex",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.secondary.dark,
    minWidth: "36px",
  },
  listItemText: {
    fontSize: "0.9em", //Insert your required size
  },
  grow: {
    flexGrow: 1,
  },
  statBox: {
    width: "100%",
  },
}));

const ListPanel = (props) => {
  const classes = useStyles();

  const msToTime = (duration) => {
    let seconds = Math.floor(duration % 60),
      minutes = Math.floor((duration / 60) % 60),
      hours = Math.floor((duration / (60 * 60)) % 24);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let str = "";
    if (hours > 0) {
      str = "" + str + hours + " saat " + minutes + " dakika" + "";
    } else if (minutes > 0) {
      str = "" + str + minutes + " dakika" + "";
    }
    return str;
  };

  return (
    <List>
      <ListItem key="00">
        <Box
          display="flex"
          className={classes.statBox}
          fontWeight="fontWeightLight"
        >
          <Typography display="inline" variant="body1">
            {props.numberOfVideos} Ders
          </Typography>
          <div className={classes.grow} />
          <Typography display="inline" variant="body1">
            {msToTime(props.courseDuration)}
          </Typography>
        </Box>
      </ListItem>
      {props.courseChapters
        ? props.courseChapters.map((chapter, indexChap) => {
            return (
              <div key={indexChap}>
                <ListItem
                  button
                  onClick={() => {
                    return props.expandChapters(indexChap);
                  }}
                >
                  <ListItemText
                    classes={{ primary: classes.listItemText }}
                    secondary={indexChap + 1 + ". " + chapter.title}
                  />
                  {props.listState.shownChapters[indexChap] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={!props.listState.shownChapters[indexChap]}
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
                            props.listState.selChapter === indexChap &&
                            props.listState.selSection === indexSec
                              ? true
                              : false
                          }
                          onClick={() => {
                            props.changeVideo(
                              section.video,
                              indexChap,
                              indexSec
                            );
                          }}
                        >
                          {section.video !== "" ? (
                            <ListItemIcon className={classes.icon}>
                              {props.currentVideoIsPlaying === true &&
                              props.listState.selChapter === indexChap &&
                              props.listState.selSection === indexSec ? (
                                <div>
                                  <PauseCircleOutlineOutlined />
                                </div>
                              ) : (
                                <div>
                                  {props.registeredCourse ? (
                                    props.registeredCourse.wathedVideos.includes(
                                      section.video
                                    ) ? (
                                      <DoneAllIcon />
                                    ) : (
                                      <PlayCircleOutlineOutlined />
                                    )
                                  ) : (
                                    <PlayCircleOutlineOutlined />
                                  )}
                                </div>
                              )}
                            </ListItemIcon>
                          ) : (
                            <ListItemIcon className={classes.icon}>
                              <LockOutlined />
                            </ListItemIcon>
                          )}

                          <ListItemText
                            classes={{ secondary: classes.listItemText }}
                            secondary={section.title}
                          />
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
  );
};

ListPanel.propTypes = {
  courseDuration: PropTypes.number.isRequired,
  numberOfVideos: PropTypes.number.isRequired,
  courseChapters: PropTypes.array.isRequired,
  currentVideoIsPlaying: PropTypes.bool.isRequired,
  listState: PropTypes.object.isRequired,
  changeVideo: PropTypes.func.isRequired,
  expandChapters: PropTypes.func.isRequired,
};

export default ListPanel;
