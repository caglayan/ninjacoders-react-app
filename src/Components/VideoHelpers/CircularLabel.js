import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value / 10)} saniye`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = React.useState(100);

  const stopRender = () => {
    const timer = setInterval(() => {
      clearInterval(timer);
      props.hideNextVideo();
      props.playNextVideo();
    }, 300);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress <= 0) {
        clearInterval(timer);
      } else {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(timer);
            stopRender();
            return 0;
          } else {
            return prevProgress - 1;
          }
        });
      }
    }, 100);
  }, []);

  return <CircularProgressWithLabel size={80} value={progress} />;
}
