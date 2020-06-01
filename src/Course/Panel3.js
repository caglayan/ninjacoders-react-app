import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import TabPanel from "../Components/CourseHelpers/TabPanel";
import InstStat from "../Components/CourseHelpers/InstStat";
import QuestionPanel from "../Components/QuestionHelpers/QuestionPanel";
import GiveAnswerPanel from "../Components/QuestionHelpers/GiveAnswerPanel";
import AnswerPanel from "../Components/QuestionHelpers/AnswerPanel";
import { pullQuestions, findQuestion } from "../Api/questionApi";
import { updatePersonalQuestion } from "../Redux/Selectors/questionSelector";

const useStyles = makeStyles((theme) => ({
  askQuestionButton: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const QuestionTab = (props) => {
  const [questions, setQuestions] = React.useState([]);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const classes = useStyles();

  const [personalQuestion, setPersonalQuestion] = React.useState();

  const pullQuestionsAdd = () => {
    pullQuestions(questions.length, 3, props.course_id) // skip limit
      .then((questionsi) => {
        if (questionsi.length === 0) setIsMoreActive(false);
        var newArray = questions.concat(questionsi);
        setQuestions(newArray);
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
      setQuestions([]);
    }
  }, [props.isUpdating]);

  React.useEffect(() => {
    if (props.isUpdating == true && questions.length == 0) {
      pullQuestionsAdd();
      props.dispatch(updatePersonalQuestion({ isUpdating: false }));
    }
  }, [questions]);

  return (
    <TabPanel value={props.index} index={2}>
      <Button
        onClick={() => {
          props.dispatch(updatePersonalQuestion({ isUpdating: false }));
          props.askQuestionOpen();
        }}
        variant="contained"
        color="secondary"
        className={classes.askQuestionButton}
      >
        Soru sor
      </Button>

      {questions.map((question, index) => {
        return (
          <div key={index}>
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
                  avatarImage={props.avatarImage}
                  className={classes.questionContainer}
                  key={index}
                ></AnswerPanel>
              );
            })}
            <GiveAnswerPanel
              showMessages={props.showMessages}
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
    </TabPanel>
  );
};

const QuestionTabCon = connect((state) => ({
  _id: state.userReducer._id,
  token: state.userReducer.token,
  avatarImage: state.userReducer.avatarImage,
  course_id: state.courseReducer._id,
  isUpdating: state.questionReducer.isUpdating,
}))(QuestionTab);

export default QuestionTabCon;
