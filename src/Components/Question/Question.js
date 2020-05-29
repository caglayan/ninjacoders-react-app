import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  LinearProgress,
  Grid,
  Paper,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import {
  startCreateUserLoginGoogle,
  startCreateUserLoginWebApi,
} from "../../Redux/Selectors/userSelector";
import QuestionForm from "./QuestionForm";

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

  return (
    <div>
      {progressVisible ? (
        <LinearProgress variant="query" color="secondary" />
      ) : null}
      <Paper fullWidth={true} elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">Betül Akıncı</Typography>
                <QuestionForm onSubmit={onSubmit} />
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default connect()(LoginDialogContent);
