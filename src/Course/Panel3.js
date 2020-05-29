import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import TabPanel from "../Components/CourseHelpers/TabPanel";
import InstStat from "../Components/CourseHelpers/InstStat";
import Comment from "../Components/CourseHelpers/CommentPanel";

const useStyles = makeStyles((theme) => ({}));

const QuestionPanel = (props) => {
  const classes = useStyles();
  return (
    <TabPanel value={props.index} index={2}>
      <Button
        onClick={props.questionOpen}
        variant="contained"
        color="secondary"
      >
        Soru Sor
      </Button>
      <Comment
        style={{ marginTop: "120px" }}
        className={classes.commentContainer}
      ></Comment>
      <Comment className={classes.commentContainer}></Comment>
      <Comment className={classes.commentContainer}></Comment>
      <Comment className={classes.commentContainer}></Comment>
    </TabPanel>
  );
};

const QuestionPanelCon = connect((state) => ({
  _id: state.courseReducer._id,
  title: state.courseReducer.title,
  isBelongNinja: state.courseReducer.isBelongNinja,
  instructor: state.courseReducer.instructor,
  description: state.courseReducer.description,
  duration: state.courseReducer.duration,
  numberOfSections: state.courseReducer.numberOfSections,
  chapters: state.courseReducer.chapters,
  shoppingCart: state.userReducer.shoppingCart,
  token: state.userReducer.token,
}))(QuestionPanel);

export default QuestionPanelCon;
