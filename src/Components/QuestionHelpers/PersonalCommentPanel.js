import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import CommentPanel from "./AnswerPanel";
import { createPersonalComment } from "../../Redux/Selectors/commentSelector";

const useStyles = makeStyles((theme) => ({}));

const PersonalCommentPanel = (props) => {
  const [personalComment, setPersonalComment] = React.useState();

  const findCommentAdd = () => {
    props
      .dispatch(createPersonalComment(props.token))
      .then((comment) => {
        console.log("Fethed personal comment", comment);
        setPersonalComment(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (props.course_id) findCommentAdd();
  }, [props.course_id]);

  React.useEffect(() => {
    if (props.isUpdating == true && props.course_id) findCommentAdd();
  }, [props.isUpdating]);

  const classes = useStyles();
  return (
    <div>
      {personalComment ? (
        <div>
          <Button
            onClick={props.updateCommentOpen}
            variant="contained"
            color="primary"
          >
            Yorumunu Güncelle
          </Button>
          <CommentPanel
            {...personalComment}
            className={classes.commentContainer}
          ></CommentPanel>
        </div>
      ) : (
        <Button
          onClick={props.makeCommentOpen}
          variant="contained"
          color="secondary"
        >
          Yorum Yap
        </Button>
      )}
    </div>
  );
};

const PersonalCommentPanelCon = connect((state) => ({
  course_id: state.courseReducer._id,
  isUpdating: state.commentReducer.isUpdating,
}))(PersonalCommentPanel);

export default PersonalCommentPanelCon;
