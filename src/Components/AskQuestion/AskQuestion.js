import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  LinearProgress,
  Grid,
  Paper,
  Avatar,
  Typography,
} from "@material-ui/core";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";
import AskQuestionForm from "./AskQuestionForm";
import {
  askQuestion,
  updateQuestion,
  removeQuestion,
} from "../../Api/questionApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginBottom: theme.spacing(0),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
  Avatar: {
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

function AskQuestionContent(props) {
  const [progressVisible, setProgressVisible] = React.useState(false);
  const classes = useStyles();

  const onSubmitAsk = (formValues) => {
    setProgressVisible(true);
    askQuestion(
      props.token,
      props.course_id,
      "from website",
      formValues.body,
      props.courseName
    )
      .then((question) => {
        console.log(question);
        props.dispatch(
          updatePersonalQuestion({ ...question, isUpdating: true })
        );
        setProgressVisible(false);
        if (props.closeDialog) {
          props.closeDialog();
        }
      })
      .catch((err) => {
        setProgressVisible(false);
        props.showMessages(2, err);
      });
  };

  const onSubmitUpdate = (formValues) => {
    setProgressVisible(true);
    updateQuestion(
      props.token,
      props.question_id,
      "from website",
      formValues.body
    )
      .then((question) => {
        console.log(question);
        props.dispatch(
          updatePersonalQuestion({ ...question, isUpdating: true })
        );
        setProgressVisible(false);
        if (props.closeDialog) {
          props.closeDialog();
        }
      })
      .catch((err) => {
        setProgressVisible(false);
        props.showMessages(2, err);
      });
  };

  const onSubmitRemove = () => {
    setProgressVisible(true);
    removeQuestion(props.token, props.question_id)
      .then((question) => {
        console.log(question);
        props.dispatch(updatePersonalQuestion({ isUpdating: true }));
        setProgressVisible(false);
        if (props.closeDialog) {
          props.closeDialog();
        }
      })
      .catch((err) => {
        setProgressVisible(false);
        props.showMessages(2, err);
      });
  };

  const updateQuestionPan = (
    <div>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              onClick={props.sideMenuOpen}
              className={classes.Avatar}
              alt={props.givenName + " " + props.familyName}
              src={props.avatarImage ? props.avatarImage.dataUri : null}
            >
              {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
              {props.familyName
                ? props.familyName.charAt(0).toUpperCase()
                : null}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  {props.givenName} {props.familyName}
                </Typography>
                <AskQuestionForm
                  {...props.question}
                  onSubmit={onSubmitUpdate}
                  delete={onSubmitRemove}
                />
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  const askQuestionPan = (
    <div>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              onClick={props.sideMenuOpen}
              className={classes.Avatar}
              alt={props.givenName + " " + props.familyName}
              src={props.avatarImage ? props.avatarImage.dataUri : null}
            >
              {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
              {props.familyName
                ? props.familyName.charAt(0).toUpperCase()
                : null}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  {props.givenName} {props.familyName}
                </Typography>
                <AskQuestionForm
                  delete={onSubmitRemove}
                  onSubmit={onSubmitAsk}
                  closeDialog={props.closeDialog}
                />
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  return (
    <div>{props.question_id !== "" ? updateQuestionPan : askQuestionPan}</div>
  );
}

export default connect((state) => {
  console.log(state.questionReducer);
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    avatarImage: state.userReducer.avatarImage,
    courseName: state.courseReducer.title,
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    token: state.userReducer.token,
    course_id: state.courseReducer._id,
    question_id: state.questionReducer._id,
    question: state.questionReducer,
  };
})(AskQuestionContent);
