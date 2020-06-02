import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Grid,
  Divider,
  CircularProgress,
} from "@material-ui/core/";
import { connect } from "react-redux";
import TabPanel from "../Components/CourseHelpers/TabPanel";
import CommentPanel from "../Components/CommentHelpers/CommentPanel";
import PersonalCommentPanel from "../Components/CommentHelpers/PersonalCommentPanel";
import { pullComments, findComment } from "../Api/commentApi";
import { createPersonalComment } from "../Redux/Selectors/commentSelector";

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
  },
}));

const CommentTab = (props) => {
  const classes = useStyles();
  const [comments, setComments] = React.useState([]);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const [isWorking, setIsWorking] = React.useState(true);

  const pullCommentsAdd = () => {
    pullComments(comments.length, 4, props.course_id) // skip limit
      .then((commentsi) => {
        if (commentsi.length === 0) setIsMoreActive(false);
        var newArray = comments.concat(commentsi);
        console.log("pulled Comments:", newArray);
        setComments(newArray);
        setIsWorking(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (props.course_id) pullCommentsAdd();
  }, [props.course_id]);

  React.useEffect(() => {
    if (props.isUpdating == true) setComments([]);
  }, [props.isUpdating]);

  React.useEffect(() => {
    if (props.isUpdating == true && comments.length == 0) pullCommentsAdd();
  }, [comments]);

  return (
    <TabPanel value={props.index} index={1}>
      {isWorking ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <CircularProgress
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
              color="primary"
              size={40}
            />
          </Grid>

          <Grid item xs={12}>
            <CommentPanel className={classes.commentContainer}></CommentPanel>
          </Grid>
        </Grid>
      ) : (
        <div>
          <PersonalCommentPanel {...props}></PersonalCommentPanel>
          <Grid
            container
            className={classes.divider}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={5}>
              <Divider />
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="center" m={1}>
                Son Yorumlar
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>

          {comments.map((comment, index) => {
            return (
              <CommentPanel
                {...comment}
                className={classes.commentContainer}
                key={index}
              ></CommentPanel>
            );
          })}
          {isMoreActive ? (
            <Box textAlign="center" m={1}>
              <Button
                onClick={pullCommentsAdd}
                variant="contained"
                color="primary"
              >
                Daha Fazla Yükle
              </Button>
            </Box>
          ) : null}
        </div>
      )}
    </TabPanel>
  );
};

const CommentTabCon = connect((state) => ({
  course_id: state.courseReducer._id,
  isUpdating: state.commentReducer.isUpdating,
}))(CommentTab);

export default CommentTabCon;
