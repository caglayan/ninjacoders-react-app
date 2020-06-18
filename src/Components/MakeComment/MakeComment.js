import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  LinearProgress,
  Grid,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import {
  startCreateUserLoginGoogle,
  startCreateUserLoginWebApi,
} from "../../Redux/Selectors/userSelector";
import CommentForm from "./MakeCommentForm";
import AnimatedRater from "./AnimatedRater";
import "react-rater/lib/react-rater.css";
import { updatePersonalComment } from "../../Redux/Selectors/commentSelector";
import { makeComment, updateComment } from "../../Api/commentApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginBottom: theme.spacing(0),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function MakeCommentContent(props) {
  const [progressVisible, setProgressVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [rating, setRating] = React.useState(props.comment.star);
  const [comment, setComment] = React.useState();
  const classes = useStyles();
  const history = useHistory();

  const onSubmitMake = (formValues) => {
    setProgressVisible(true);
    console.log(formValues);
    makeComment(
      props.token,
      props.course_id,
      "from website",
      formValues.body,
      rating
    )
      .then((comment) => {
        console.log(comment);
        props.dispatch(updatePersonalComment({ ...comment, isUpdating: true }));
        setProgressVisible(false);
        if (props.closeDialog) {
          props.closeDialog();
        }
      })
      .catch((err) => {
        console.log(err);
        setProgressVisible(false);
        props.showMessages(2, err.Message);
      });
  };

  const onSubmitUpdate = (formValues) => {
    //setProgressVisible(true);
    console.log(formValues);
    console.log("rating", rating);

    updateComment(
      props.token,
      props.comment_id,
      "from website",
      formValues.body,
      rating
    )
      .then((comment) => {
        console.log(comment);
        props.dispatch(updatePersonalComment({ ...comment, isUpdating: true }));
        setProgressVisible(false);
        if (props.closeDialog) {
          props.closeDialog();
        }
      })
      .catch((err) => {
        console.log(err);
        setProgressVisible(false);
        props.showMessages(2, err.Message);
      });
  };

  const changeRating = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  const updateCommentPan = (
    <Paper elevation={0} className={classes.paper}>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Box textAlign="center" m={1}>
            <Typography variant="h6" gutterBottom>
              Değerlendirmeninizi güncelleyebilirsiniz.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <AnimatedRater
            rating={rating}
            changeRating={changeRating}
            numberOfStars={5}
            starDimension="30px"
            name="ratings"
          />
        </Grid>
        <Grid item xs={12}>
          <CommentForm {...props.comment} onSubmit={onSubmitUpdate} />
        </Grid>
      </Grid>
    </Paper>
  );

  const makeCommentPan = (
    <Paper elevation={0} className={classes.paper}>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Box textAlign="center" m={1}>
            <Typography variant="h6" gutterBottom>
              Dersi Değerlendir!
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <AnimatedRater
            rating={rating}
            changeRating={changeRating}
            numberOfStars={5}
            starDimension="30px"
            name="ratings"
          />
        </Grid>
        <Grid item xs={12}>
          <CommentForm onSubmit={onSubmitMake} />
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <div>
      {isLoading
        ? null
        : props.comment_id !== ""
        ? updateCommentPan
        : makeCommentPan}
    </div>
  );
}

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    course_id: state.courseReducer._id,
    comment_id: state.commentReducer._id,
    comment: state.commentReducer,
  };
})(MakeCommentContent);
