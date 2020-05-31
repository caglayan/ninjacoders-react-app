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
import QuestionPanel from "../Components/CourseHelpers/QuestionPanel";
import { pullQuestions, findQuestion } from "../Api/questionApi";
//import { createPersonalQuestion } from "../Redux/Selectors/questionSelector";

const useStyles = makeStyles((theme) => ({}));

const QuestionTab = (props) => {
  const [questions, setQuestions] = React.useState([]);
  const [isMoreActive, setIsMoreActive] = React.useState(true);
  const [personalQuestion, setPersonalQuestion] = React.useState();

  const pullQuestionsAdd = () => {
    pullQuestions(questions.length, 5, props.course_id) // skip limit
      .then((questionsi) => {
        if (questionsi.length === 0) setIsMoreActive(false);
        var newArray = questions.concat(questionsi);
        setQuestions(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const findQuestionAdd = () => {
  //   props
  //     .dispatch(createPersonalQuestion(props.token))
  //     .then((question) => {
  //       console.log(question);
  //       setPersonalQuestion(question);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  React.useEffect(() => {
    console.log("changed");
    if (props.course_id) pullQuestionsAdd();
    // if (props.course_id) findQuestionAdd();
  }, [props.course_id]);

  React.useEffect(() => {
    console.log("changed question");
    //if (props.isUpdating) findQuestionAdd();
  }, [props.isUpdating]);

  const classes = useStyles();
  return (
    <TabPanel value={props.index} index={2}>
      {personalQuestion ? (
        <Button
          onClick={props.updateQuestionOpen}
          variant="contained"
          color="primary"
        >
          Yorumunu Güncelle
        </Button>
      ) : (
        <Button
          onClick={props.makeQuestionOpen}
          variant="contained"
          color="secondary"
        >
          Soru sor
        </Button>
      )}

      {questions.map((question, index) => {
        return (
          <QuestionPanel
            {...question}
            className={classes.questionContainer}
            key={index}
          ></QuestionPanel>
        );
      })}
      <QuestionPanel className={classes.questionContainer}></QuestionPanel>
      <QuestionPanel className={classes.questionContainer}></QuestionPanel>
      <QuestionPanel className={classes.questionContainer}></QuestionPanel>
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
  course_id: state.courseReducer._id,
  //isUpdating: state.questionReducer.isUpdating,
}))(QuestionTab);

export default QuestionTabCon;
