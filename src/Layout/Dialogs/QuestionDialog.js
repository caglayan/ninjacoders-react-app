import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import QuestionComp from "../../Components/AskQuestion/AskQuestion";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
  },
  dialog: {
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function QuestionDialogComp(props) {
  const classes = useStyles();
  const { isActive, closeDialog, ...propsChild } = props;
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={isActive}
        onClose={closeDialog}
        aria-labelledby="QuestionDialoh"
        aria-describedby="Question Dialog"
      >
        <DialogTitle
          className={classes.dialog}
          id="customized-dialog-title"
          onClose={closeDialog}
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={closeDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <QuestionComp
          closeDialog={props.closeDialog}
          {...propsChild}
        ></QuestionComp>
      </Dialog>
    </div>
  );
}
