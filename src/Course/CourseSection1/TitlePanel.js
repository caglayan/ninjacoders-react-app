import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
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
}));

const TitlePanel = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" component="h1">
        <Box className={classes.courseName}>{props.courseTitle}</Box>
        {props.isBelongNinja == true ? (
          <Box className={classes.courseType}>Orjinal</Box>
        ) : null}
      </Typography>
      <Typography variant="subtitle1" component="h1">
        <Box className={classes.CourseInstName} fontWeight="fontWeightLight">
          {props.instructor
            ? props.instructor.givenName + " " + props.instructor.familyName
            : null}
        </Box>
        <Box className={classes.followButton} fontWeight="fontWeightBold"></Box>
      </Typography>
    </div>
  );
};

TitlePanel.propTypes = {
  isBelongNinja: PropTypes.bool.isRequired,
  courseTitle: PropTypes.string.isRequired,
  instructor: PropTypes.object.isRequired,
};

export default TitlePanel;
