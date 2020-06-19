import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import ReactResizeDetector from "react-resize-detector";
import CircularProgressWithLabel from "../../Components/VideoHelpers/CircularLabel.js";
import PropTypes from "prop-types";
import Vimeo from "@u-wave/react-vimeo";

const useStyles = makeStyles((theme) => ({
  nextVideoPanel: {
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    borderRadius: "0px",
    [theme.breakpoints.up("sm")]: {
      top: "30%",
      left: "40%",
      borderRadius: "5px",
      height: "auto",
      width: "auto",
    },
  },
}));

const VideoPanel = (props) => {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isEnded, setIsEnded] = React.useState(false);

  const onVideoEnd = () => {
    console.log("ended");
    setIsEnded(true);
    props.onStop();
    props.finishVideo(props.playerVideo);
    document.webkitExitFullscreen();
  };

  const onPlay = () => {
    props.onPlay();
  };

  const onLoaded = () => {
    console.log("video loaded");
    setIsEnded(false);
  };

  const onPause = () => {
    props.onStop();
  };

  const hideNextVideo = () => {
    setIsEnded(false);
  };

  return (
    <ReactResizeDetector handleWidth onResize={props.onResize}>
      {({ width }) => (
        <div
          style={{
            height: props.videoHeight,
            backgroundColor: "rgba(0,0,0,1)",
            position: "relative",
          }}
        >
          <Vimeo
            video={props.playerVideo}
            onEnd={onVideoEnd}
            onPlay={onPlay}
            onLoaded={onLoaded}
            onPause={onPause}
            //autoplay
            responsive
          ></Vimeo>
          {isEnded ? (
            <Box
              bgcolor="grey.200"
              color="grey.900"
              position="absolute"
              className={classes.nextVideoPanel}
              zIndex="modal"
              p={2}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <CircularProgressWithLabel
                    hideNextVideo={hideNextVideo}
                    playNextVideo={props.playNextVideo}
                  ></CircularProgressWithLabel>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.PremiumButton}
                    onClick={() => {
                      props.playNextVideo();
                      hideNextVideo();
                    }}
                    variant="outlined"
                    color="primary"
                  >
                    Diğer derse geçin
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : null}
        </div>
      )}
    </ReactResizeDetector>
  );
};

VideoPanel.propTypes = {
  playerVideo: PropTypes.string.isRequired,
  playNextVideo: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired,
  finishVideo: PropTypes.func.isRequired,
};

export default VideoPanel;

{
  /* 
            <Box
              bgcolor="grey.200"
              color="grey.900"
              alignItems="center"
              justifyContent="center"
              display="flex"
              width={200}
              height={200}
              borderRadius="5px"
              p={2}
              position="absolute"
              top="40%"
              left="40%"
              zIndex="tooltip"
            >
              <box display="block">
                <CircularProgressWithLabel
                  hideNextVideo={hideNextVideo}
                  playNextVideo={props.playNextVideo}
                ></CircularProgressWithLabel>
              </box>

              
            </Box> */
}
