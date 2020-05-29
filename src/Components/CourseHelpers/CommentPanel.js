import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
    backgroundColor: theme.palette.grey[100],
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

const Star = ({ willBeActive, isActive, style }) => {
  const fill = isActive ? "#fc6" : willBeActive ? "#ffdd99" : "#e3e3e3";
  return (
    <svg viewBox="0 0 19.481 19.481" width="20" height="20" style={style}>
      <path
        fill={fill}
        d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"
      />
    </svg>
  );
};

export default function Comment(props) {
  const formatter = buildFormatter(frenchStrings);
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
                  {props.givenName} {props.familyName}
                </Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  <TimeAgo date={props.updatedAt} formatter={formatter} />
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.body}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Rater total={5} rating={props.star} interactive={false}>
                <Star />
              </Rater>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
