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

function LoginDialogContent(props) {
  const [progressVisible, setProgressVisible] = React.useState(false);
  const [rating, setRating] = React.useState(2.5);
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (formValues) => {
    setProgressVisible(true);
    props
      .dispatch(startCreateUserLoginWebApi(formValues))
      .then((user) => {
        if (props.closeDialog) {
          props.closeDialog();
        }
        setProgressVisible(false);
        history.push(`/`);
      })
      .catch((err) => {
        setProgressVisible(false);
        props.showMessages(2, err);
      });
  };

  const changeRating = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <Paper fullWidth={true} elevation={0} className={classes.paper}>
        {progressVisible ? (
          <LinearProgress variant="query" color="secondary" />
        ) : null}
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <Box textAlign="center" m={1}>
              <Typography variant="h6" gutterBottom>
                Dersi değerlendir!
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <AnimatedRater
              rating={rating}
              changeRating={changeRating}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="30px"
              name="rating"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentForm onSubmit={onSubmit} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default connect()(LoginDialogContent);
