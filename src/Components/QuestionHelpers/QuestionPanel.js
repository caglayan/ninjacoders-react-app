import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  Divider,
} from "@material-ui/core/";
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import AnswerPanel from "./AnswerPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
    backgroundColor: "transparent",
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

export default function Question(props) {
  const formatter = buildFormatter(turkishStrings);
  const classes = useStyles();

  return (
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
              {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
              {props.familyName
                ? props.familyName.charAt(0).toUpperCase()
                : null}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">
                  {props.givenName
                    ? props.givenName + " " + props.familyName
                    : null}
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
                <Button onClick={props.askQuestionOpen} color="primary">
                  Düzenle
                </Button>
              </Grid>
            ) : null}
            {props.fromInstructor ? (
              <Button
                style={{ height: 30 }}
                variant="outlined"
                color="secondary"
              >
                Eğitmen
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
