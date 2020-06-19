import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip } from "@material-ui/core";
import CommentPanel from "./CommentPanel";
import { createPersonalComment } from "../../Redux/Selectors/commentSelector";

const useStyles = makeStyles((theme) => ({}));

const PersonalCommentPanel = (props) => {
  const [personalComment, setPersonalComment] = React.useState();

  const findCommentAdd = () => {
    props
      .dispatch(createPersonalComment(props.token, props.course_id))
      .then((comment) => {
        console.log("Fethed personal comment", comment);
        setPersonalComment(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (props.premium && props.course_id) findCommentAdd();
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
        <Tooltip
          title={
            (
              props.premium && props.registeredCourse
                ? props.registeredCourse.wathedVideos.length > 2
                : false
            )
              ? ""
              : "Yorum yapabilmek için en az 3 dersi izlemiş olmanız gerekmektedir."
          }
        >
          <span>
            <Button
              onClick={props.makeCommentOpen}
              variant="contained"
              color="secondary"
              disabled={
                !(props.premium && props.registeredCourse
                  ? props.registeredCourse.wathedVideos.length > 2
                  : false)
              }
            >
              Yorum Yap
            </Button>
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default PersonalCommentPanel;
