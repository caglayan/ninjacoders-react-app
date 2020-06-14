import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  Box,
  Paper,
} from "@material-ui/core/";
import InstStat from "../../Components/CourseHelpers/InstStat";
import { Person, ThumbUp, SignalCellularAltTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 80,
    height: 80,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function InstPanel(props) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Avatar
            onClick={props.sideMenuOpen}
            className={classes.avatar}
            alt={props.givenName + " " + props.familyName}
            src={props.avatarImage ? props.avatarImage.dataUri : null}
          >
            {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
            {props.familyName ? props.familyName.charAt(0).toUpperCase() : null}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {props.givenName ? props.givenName + " " + props.familyName : null}
          </Typography>
          <Typography align="center" variant="body2">
            {props.title}
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          spacing={1}
          style={{ marginTop: "15px" }}
        >
          <Grid style={{ height: "50px" }} item sm={3} xs={3}>
            <InstStat studentsNo={props.studentsNo}></InstStat>
          </Grid>
          <Grid style={{ height: "50px" }} item sm={3} xs={3}>
            <InstStat coursesNo={props.coursesNo}>></InstStat>
          </Grid>
          <Grid style={{ height: "50px" }} item sm={3} xs={3}>
            <InstStat rating={props.rating}>></InstStat>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "30px" }} variant="middle" />
        <Grid item xs={12}>
          <Box mx={4} my={1}>
            <Typography variant="body2" component="h1">
              {props.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
