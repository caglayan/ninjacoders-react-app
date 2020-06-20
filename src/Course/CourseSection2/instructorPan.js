import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  Box,
  Paper,
  Button,
} from "@material-ui/core/";
import InstStat from "../../Components/CourseHelpers/InstStat";
import "./instructorPan.css";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: theme.spacing(100),
  },
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
  const [descHeight, setDescHeight] = React.useState(100);
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
          <Typography align="center" variant="body2">
            {props.givenName ? props.givenName + " " + props.familyName : null}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2"></Typography>
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
            <InstStat rating={props.rating}></InstStat>
          </Grid>
        </Grid>
        <Divider style={{ marginTop: "30px" }} variant="middle" />
        <Grid item xs={12}>
          <Box
            mx={4}
            overflow="hidden"
            my={1}
            style={{ textOverflow: "ellipsis", height: descHeight }}
            class={descHeight ? "article" : ""}
          >
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </Box>
          <Box textAlign="center" m={1}>
            <Button
              onClick={() => {
                if (!descHeight) {
                  setDescHeight(100);
                } else {
                  setDescHeight(null);
                }
              }}
              color="primary"
              type="submit"
            >
              {descHeight ? "Devamı" : "Kapat"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
