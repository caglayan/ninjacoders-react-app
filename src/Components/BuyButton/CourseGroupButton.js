import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
  },
  OtherCourses: {
    borderRadius: 20,
    height: 40,
  },
}));

const BuyButton = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return props.courseGroup ? (
    <Button
      className={classes.OtherCourses}
      style={{ width: props.width }}
      variant="contained"
      color="primary"
      onClick={() => {
        history.push(`/coursemap/` + props.courseGroup._id);
      }}
    >
      <Typography variant="body1">
        Bütün {props.courseGroup ? props.courseGroup.shortName : null}'ne Göz At
      </Typography>
    </Button>
  ) : null;
};

BuyButton.propTypes = {};

export default BuyButton;
