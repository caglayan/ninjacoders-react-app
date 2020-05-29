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
import CommentForm from "./CommentForm";
import AnimatedRater from "./AnimatedRater";
import "react-rater/lib/react-rater.css";
import { findComment } from "../../Api/commentApi";
import { updatePersonalComment } from "../../Redux/Selectors/commentSelector";

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

function CommentContent(props) {
  const [progressVisible, setProgressVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [rating, setRating] = React.useState(3);
  const [comment, setComment] = React.useState();
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (formValues) => {
    //setProgressVisible(true);
    console.log("hello");

    props.dispatch(
      updatePersonalComment({ ...props.comment, isUpdating: true })
    );

    // props
    //   .dispatch(startCreateUserLoginWebApi(formValues))
    //   .then((user) => {
    //     if (props.closeDialog) {
    //       props.closeDialog();
    //     }
    //     setProgressVisible(false);
    //     history.push(`/`);
    //   })
    //   .catch((err) => {
    //     setProgressVisible(false);
    //     props.showMessages(2, err);
    //   });
  };

  const changeRating = (newRating) => {
    console.log(newRating);
  };

  const findCommentAdd = () => {
    findComment(props.token)
      .then((comment) => {
        console.log(comment);
        setComment(comment);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  // React.useEffect(() => {
  //   console.log("started");
  //   setIsLoading(true);
  //   findCommentAdd();
  // }, []);

  const updateComment = (
    <Paper elevation={0} className={classes.paper}>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Box textAlign="center" m={1}>
            <Typography variant="h6" gutterBottom>
              Değerlendirmeni Güncelleyebilirsin.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <AnimatedRater
            rating={props.comment.star}
            changeRating={changeRating}
            numberOfStars={5}
            starDimension="30px"
            name="ratings"
          />
        </Grid>
        <Grid item xs={12}>
          <CommentForm {...props.comment} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Paper>
  );

  const makeComment = (
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
          <CommentForm onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <div>{isLoading ? null : props.comment ? updateComment : makeComment}</div>
  );
}

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    comment: state.commentReducer,
  };
})(CommentContent);
