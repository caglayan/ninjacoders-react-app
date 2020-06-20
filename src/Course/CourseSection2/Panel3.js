import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CircularProgress,
  Box,
  Divider,
  Grid,
  Tooltip,
} from "@material-ui/core/";
import { connect } from "react-redux";
import QuestionPanel from "../../Components/QuestionHelpers/QuestionPanel";
import GiveAnswerPanel from "../../Components/QuestionHelpers/GiveAnswerPanel";
import AnswerPanel from "../../Components/QuestionHelpers/AnswerPanel";
import { pullQuestions, findQuestion } from "../../Api/questionApi";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";
import TabPanel from "../../Components/CourseHelpers/TabPanel";

const useStyles = makeStyles((theme) => ({
  askQuestionButton: {
    marginBottom: theme.spacing(1),
  },
}));

const QuestionTab = (props) => {
  const [questions, setQuestions] = React.useState([]);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const [personalQuestion, setPersonalQuestion] = React.useState();
  const [isWorking, setIsWorking] = React.useState(true);
  const classes = useStyles();

  const pullQuestionsAdd = () => {
    setIsWorking(true);
    pullQuestions(questions.length, 3, props.course_id) // skip limit
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
    if (props.course_id) pullQuestionsAdd();
  }, [props.course_id]);

  React.useEffect(() => {
    if (props.isUpdating == true) {
      setIsWorking(true);
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
    <TabPanel value={props.index} index={2}>
      {isWorking ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
            color="primary"
            size={40}
          />
        </Grid>
      ) : (
        <div>
          <Tooltip
            title={
              props.premium
                ? ""
                : "Soru sorabilmek için dersin öğrencisi olmanız gerekmektedir."
            }
          >
            <span>
              <Button
                onClick={() => {
                  props.dispatch(updatePersonalQuestion({ isUpdating: false }));
                  props.askQuestionOpen();
                }}
                variant="contained"
                color="secondary"
                className={classes.askQuestionButton}
                disabled={props._id == "" || !props.premium}
              >
                Soru sor
              </Button>
            </span>
          </Tooltip>
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
                Son Sorular
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
          {questions.map((question, index) => {
            return (
              <div key={question._id}>
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
                {props.premium ? (
                  <GiveAnswerPanel
                    showMessages={props.showMessages}
                    updateQuestion={updateQuestion}
                    token={props.token}
                    question_id={question._id}
                    className={classes.questionContainer}
                  ></GiveAnswerPanel>
                ) : null}
                <Divider></Divider>
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
                {isWorking && <CircularProgress color="secondary" size={18} />}
                {!isWorking && " Diğer Sorular"}
              </Button>
            </Box>
          ) : null}
        </div>
      )}
    </TabPanel>
  );
};

const QuestionTabCon = connect((state) => ({
  premium: state.courseReducer.isPremium,
  _id: state.userReducer._id,
  token: state.userReducer.token,
  avatarImage: state.userReducer.avatarImage,
  course_id: state.courseReducer._id,
  isUpdating: state.questionReducer.isUpdating,
}))(QuestionTab);

export default QuestionTabCon;
