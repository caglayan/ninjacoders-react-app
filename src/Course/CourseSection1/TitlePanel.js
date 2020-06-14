import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "0px",
    },
  },
  courseName: {
    paddingInlineEnd: "10px",
    display: "inline-flex",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
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
      fontSize: "1.0rem",
    },
  },
}));

const TitlePanel = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
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
    </Container>
  );
};

TitlePanel.propTypes = {
  isBelongNinja: PropTypes.bool.isRequired,
  courseTitle: PropTypes.string.isRequired,
  instructor: PropTypes.object.isRequired,
};

export default TitlePanel;
