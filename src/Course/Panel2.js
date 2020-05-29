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
import CommentPanel from "../Components/CourseHelpers/CommentPanel";
import { pullComments, findComment } from "../Api/commentApi";
import { createPersonalComment } from "../Redux/Selectors/commentSelector";

const useStyles = makeStyles((theme) => ({}));

const CommentTab = (props) => {
  const [comments, setComments] = React.useState([]);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const [personalComment, setPersonalComment] = React.useState();

  const pullCommentsAdd = () => {
    pullComments(comments.length, 5, props.course_id) // skip limit
      .then((commentsi) => {
        if (commentsi.length === 0) setIsMoreActive(false);
        var newArray = comments.concat(commentsi);
        setComments(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findCommentAdd = () => {
    props
      .dispatch(createPersonalComment(props.token))
      .then((comment) => {
        console.log(comment);
        setPersonalComment(comment);
      })
      .catch((err) => {
        console.log(err);
      });

    // findComment(props.token)
    //   .then((comment) => {
    //     console.log(comment);
    //     setPersonalComment(comment);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  React.useEffect(() => {
    console.log("changed");
    if (props.course_id) pullCommentsAdd();
    if (props.course_id) findCommentAdd();
  }, [props.course_id]);

  React.useEffect(() => {
    console.log("changed comment");
    if (props.isUpdating) findCommentAdd();
  }, [props.isUpdating]);

  const classes = useStyles();
  return (
    <TabPanel value={props.index} index={1}>
      {personalComment ? (
        <Button
          onClick={props.updateCommentOpen}
          variant="contained"
          color="primary"
        >
          Yorumunu Güncelle
        </Button>
      ) : (
        <Button
          onClick={props.makeCommentOpen}
          variant="contained"
          color="secondary"
        >
          Yorum Yap
        </Button>
      )}

      {comments.map((comment, index) => {
        return (
          <CommentPanel
            {...comment}
            className={classes.commentContainer}
          ></CommentPanel>
        );
      })}
      {isMoreActive ? (
        <Box textAlign="center" m={1}>
          <Button onClick={pullCommentsAdd} variant="contained" color="primary">
            Diğer Yorumlar
          </Button>
        </Box>
      ) : null}
    </TabPanel>
  );
};

const CommentTabCon = connect((state) => ({
  course_id: state.courseReducer._id,
  isUpdating: state.commentReducer.isUpdating,
}))(CommentTab);

export default CommentTabCon;
