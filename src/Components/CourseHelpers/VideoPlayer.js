import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Vimeo from "@u-wave/react-vimeo";
import { Box, Typography, Button } from "@material-ui/core";
import CircularProgressWithLabel from "../VideoHelpers/CircularLabel.js";

// https://www.npmjs.com/package/@u-wave/react-vimeo
const useStyles = makeStyles((theme) => ({}));

export default (props) => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isEnded, setIsEnded] = React.useState(false);

  const onVideoEnd = () => {
    console.log("ended");
    setIsEnded(true);
    document.webkitExitFullscreen();
  };

  const onLoaded = () => {
    console.log("loaded");
  };

  const onReady = () => {
    console.log("onReady");
  };

  const hideNextVideo = () => {
    setIsEnded(false);
  };

  React.useEffect(() => {
    if (props.video != "") {
      console.log("video id is okey");
      setIsLoaded(false);
    } else {
      console.log("video id is not okey");
    }
  }, [props.video]);

  return (
    <div>
      <Typography
        component="div"
        variant="body1"
        style={{ position: "relative" }}
      >
        <Vimeo
          video={props.video}
          onLoaded={onLoaded}
          onEnd={onVideoEnd}
          responsive
        ></Vimeo>
        {isEnded ? (
          <Box
            bgcolor="white"
            color="grey.700"
            borderRadius="5px"
            p={2}
            position="absolute"
            top="40%"
            left="40%"
            zIndex="tooltip"
          >
            <CircularProgressWithLabel
              hideNextVideo={hideNextVideo}
              playNextVideo={props.playNextVideo}
            ></CircularProgressWithLabel>
            <Button>Diğer Video</Button>
          </Box>
        ) : null}
      </Typography>
    </div>
  );
};
