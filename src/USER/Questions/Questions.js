import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CircularProgress,
  Box,
  Divider,
  Grid,
  Container,
  Typography,
} from "@material-ui/core/";
import { connect } from "react-redux";
import QuestionPanel from "../../Components/QuestionHelpers/QuestionPanel";
import GiveAnswerPanel from "../../Components/QuestionHelpers/GiveAnswerPanel";
import AnswerPanel from "../../Components/QuestionHelpers/AnswerPanel";
import { pullUserQuestions } from "../../Api/questionApi";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  containerDesktop: {
    marginTop: theme.spacing(4),
    display: "none",
    background: "#fff",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  containerMobile: {
    marginTop: 50,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  Avatar: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  List: {
    maxWidth: 200,
    margin: "auto",
  },
  ListItemActive: {
    backgroundColor: theme.palette.action.selected,
  },
}));
const QuestionsCont = (props) => {
  const [questions, setQuestions] = React.useState([]);
  const [isWorking, setIsWorking] = React.useState(true);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const classes = useStyles();
  const history = useHistory();

  const pullQuestionsAdd = () => {
    pullUserQuestions(props.token, questions.length, 2) // skip limit
      .then((questionsi) => {
        if (questionsi.length === 0) setIsMoreActive(false);
        var newArray = questions.concat(questionsi);
        setQuestions(newArray);
        setIsWorking(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (props.token) pullQuestionsAdd();
  }, [props.token]);

  React.useEffect(() => {
    if (props.isUpdating == true) {
      setQuestions([]);
    }
  }, [props.isUpdating]);

  React.useEffect(() => {
    if (props.isUpdating == true && questions.length == 0) {
      pullQuestionsAdd();
      props.dispatch(updatePersonalQuestion({ isUpdating: false }));
    }
  }, [questions]);

  const updateQuestion = (question) => {
    var updatedQ = questions.map((questionIn) => {
      if (questionIn._id === question._id) {
        return question;
      } else {
        return questionIn;
      }
    });
    console.log("Updated Questions: ", updatedQ);
    setQuestions(updatedQ);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {isWorking ? (
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <CircularProgress
              style={{ marginTop: "15vh" }}
              color="primary"
              size={40}
            />
          </Grid>
        </Grid>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {questions.map((question, index) => {
            return (
              <div key={question._id}>
                {question.courseName}
                <Divider></Divider>
                <QuestionPanel
                  {...question}
                  fromUser={props._id === question.sender}
                  askQuestionOpen={() => {
                    props.dispatch(updatePersonalQuestion(question));
                    props.askQuestionOpen();
                  }}
                  className={classes.questionContainer}
                ></QuestionPanel>
                {question.answers.map((answer, index) => {
                  return (
                    <AnswerPanel
                      {...answer}
                      fromUser={props._id === answer.sender}
                      question_id={question._id}
                      showMessages={props.showMessages}
                      token={props.token}
                      dispatch={props.dispatch}
                      updateQuestion={updateQuestion}
                      avatarImage={props.avatarImage}
                      className={classes.questionContainer}
                      key={answer._id}
                    ></AnswerPanel>
                  );
                })}
                <GiveAnswerPanel
                  showMessages={props.showMessages}
                  updateQuestion={updateQuestion}
                  token={props.token}
                  question_id={question._id}
                  className={classes.questionContainer}
                ></GiveAnswerPanel>
              </div>
            );
          })}

          {isMoreActive ? (
            <Box textAlign="center" m={1}>
              <Button
                onClick={pullQuestionsAdd}
                variant="contained"
                color="primary"
              >
                Diğer Yorumlar
              </Button>
            </Box>
          ) : null}

          {questions.length == 0 ? (
            <div style={{ marginTop: 100 }}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                Hiç soru sormamışsınız.
              </Typography>
              <Typography
                className={classes.text1}
                variant="h6"
                component="h6"
                align="center"
              >
                Hadi dersleri izlemeye başla!
              </Typography>
              <Box textAlign="center">
                <Button
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    history.push(`/`);
                  }}
                  variant="contained"
                  color="primary"
                >
                  Bütün dersler
                </Button>
              </Box>
            </div>
          ) : null}
        </div>
      )}
    </Container>
  );
};

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    avatarImage: state.userReducer.avatarImage,
    course_id: state.courseReducer._id,
    isUpdating: state.questionReducer.isUpdating,
  };
})(QuestionsCont);
