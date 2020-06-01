import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import {
  Box,
  Button,
  TextField,
  Grid,
  CircularProgress,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-rater/lib/react-rater.css";
import { answerQuestion } from "../../Api/questionApi";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
    height: theme.spacing(8),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(12),
    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
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

const GiveAnswerPanel = (props) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ body: "" }}
      validate={(values) => {
        const errors = {};
        // if (!values.body) {
        //   errors.body = "Yorum bölümü gereklidir.";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("onSubmit:", values);
        answerQuestion(
          props.token,
          props.question_id,
          "Web Sitesinden",
          values.body
        )
          .then((question) => {
            console.log(question);
            props.dispatch(updatePersonalQuestion({ isUpdating: true }));
            setSubmitting(false);
          })
          .catch((err) => {
            console.log(err);
            props.showMessages(2, err.Message);
            setSubmitting(false);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className={classes.root}>
          <Paper elevation={0} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar
                  onClick={props.sideMenuOpen}
                  className={classes.Avatar}
                  alt={props.givenName + " " + props.familyName}
                  src={props.avatarImage ? props.avatarImage.dataUri : null}
                >
                  {props.givenName
                    ? props.givenName.charAt(0).toUpperCase()
                    : null}
                  {props.familyName
                    ? props.familyName.charAt(0).toUpperCase()
                    : null}
                </Avatar>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={1}>
                  <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <Grid container justify="flex-end" spacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          error={errors.body != null && touched.body}
                          label="Bunu cevaplayabilirsin. Cevap Yaz."
                          fullWidth
                          multiline
                          //rows={2}
                          id="body"
                          helperText={
                            errors.body && touched.body && errors.body
                          }
                          margin="dense"
                          variant="outlined"
                          style={{ color: "white" }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.body}
                          InputProps={{
                            className: classes.input,
                          }}
                        />
                      </Grid>
                      {values.body !== "" ? (
                        <Grid item>
                          <Button
                            onClick={props.closeDialog}
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={errors.body ? true : false}
                          >
                            {isSubmitting && (
                              <CircularProgress color="secondary" size={18} />
                            )}
                            {!isSubmitting && "Gönder"}
                          </Button>
                        </Grid>
                      ) : null}
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </Formik>
  );
};

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    avatarImage: state.userReducer.avatarImage,
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    token: state.userReducer.token,
    course_id: state.courseReducer._id,
    comment_id: state.commentReducer._id,
    comment: state.commentReducer,
  };
})(GiveAnswerPanel);
