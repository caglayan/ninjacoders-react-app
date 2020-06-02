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
import CourseCard from "../../Components/CourseCard/CourseCard";
import { pullUserQuestions } from "../../Api/questionApi";
import { updatePersonalQuestion } from "../../Redux/Selectors/questionSelector";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "none",
    background: "tarnsparent",
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <CourseCard></CourseCard>
        </Grid>
        <Grid item>
          <CourseCard></CourseCard>
        </Grid>
      </Grid>
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
