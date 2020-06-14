import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Avatar,
  CircularProgress,
  TextField,
  Box,
} from "@material-ui/core";
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";
import { removeAnswer, updateAnswer } from "../../Api/questionApi";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#fff",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },

    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
    backgroundColor: theme.palette.grey[100],
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const AnswerPanel = (props) => {
  const classes = useStyles();
  const formatter = buildFormatter(turkishStrings);
  const [isGiveAnswer, setIsGiveAnswer] = React.useState(true);
  const [isRemoving, setIsRemoving] = React.useState(false);

  const remove = () => {
    setIsRemoving(true);
    removeAnswer(props.token, props.question_id, props._id)
      .then((question) => {
        props.updateQuestion(question);
        // props.dispatch(updatePersonalQuestion({ isUpdating: true }));
        setIsRemoving(false);
      })
      .catch((err) => {
        console.log(err);
        setIsRemoving(false);
        props.showMessages(2, err.Message);
      });
  };

  const showAnswer = (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  {props.givenName} {props.familyName}
                </Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  <TimeAgo date={props.updatedAt} formatter={formatter} />
                </Typography>
                <Typography style={{ whiteSpace: "pre" }} variant="body2">
                  {props.body}
                </Typography>
              </Grid>
            </Grid>
            {props.fromUser ? (
              <Grid item>
                <Button
                  onClick={() => {
                    setIsGiveAnswer(false);
                  }}
                  color="primary"
                >
                  Düzenle
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  const giveAnswer = (
    <Formik
      initialValues={{ body: props.body }}
      validate={(values) => {
        const errors = {};
        // if (!values.body) {
        //   errors.body = "Yorum bölümü gereklidir.";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("onSubmit:", values);
        updateAnswer(
          props.token,
          props.question_id,
          props._id,
          "from website",
          values.body
        )
          .then((question) => {
            console.log("back", question);
            props.updateQuestion(question);
            setIsGiveAnswer(true);
            //props.dispatch(updatePersonalQuestion({ isUpdating: true }));
            setSubmitting(false);
          })
          .catch((err) => {
            setIsGiveAnswer(true);
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
                          // rows={2}
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

                      <Grid item xs={12}>
                        <Box display="flex" flexDirection="row-reverse" p={1}>
                          <Button
                            display="inline"
                            onClick={props.closeDialog}
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginLeft: "30px" }}
                            disabled={errors.body ? true : false}
                          >
                            {isSubmitting && (
                              <CircularProgress color="secondary" size={18} />
                            )}
                            {!isSubmitting && "Güncelle"}
                          </Button>
                          <Button
                            display="inline"
                            onClick={remove}
                            color="secondary"
                            style={{ marginLeft: "30px" }}
                          >
                            {isRemoving && (
                              <CircularProgress color="secondary" size={18} />
                            )}
                            {!isRemoving && " Cevabı Sil"}
                          </Button>
                        </Box>
                      </Grid>
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

  return <div>{isGiveAnswer ? showAnswer : giveAnswer}</div>;
};

export default AnswerPanel;
