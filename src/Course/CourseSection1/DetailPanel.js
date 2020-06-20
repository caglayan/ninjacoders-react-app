import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, Button, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BuyButton from "../../Components/BuyButton/BuyButton";
import CourseGroupButton from "../../Components/BuyButton/CourseGroupButton";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      {/*MOBILE*/}
      <Box className={classes.sectionMobile} textAlign="center">
        <Typography variant="body2">
          Bu dersi şu anda{" "}
          {props.statistics ? props.statistics.onlineStudents + " " : null}
          <VisibilityIcon style={{ fontSize: 18, paddingTop: "4px" }} /> kişi
          izliyor.
        </Typography>
      </Box>
      <Box
        style={{ marginTop: 5 }}
        className={classes.sectionMobile}
        textAlign="center"
      >
        <CourseGroupButton
          courseGroup={props.courseGroup}
          width={300}
        ></CourseGroupButton>
      </Box>

      {/*DESKTOP*/}
      {!props.premium ? (
        <div>
          <Grid
            container
            style={{ marginTop: "0px", height: "90px" }}
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
            className={classes.sectionDesktop}
          >
            <Grid item xs={12}>
              <Typography display="inline" variant="body2">
                Bu dersi şu anda{" "}
                {props.statistics
                  ? props.statistics.onlineStudents + " "
                  : null}
                <VisibilityIcon style={{ fontSize: 18, paddingTop: "4px" }} />{" "}
                kişi izliyor.
              </Typography>
            </Grid>
            <Grid item>
              <CourseGroupButton
                style={{ marginRight: 70 }}
                courseGroup={props.courseGroup}
                width={550}
              ></CourseGroupButton>
            </Grid>
            <Grid item>
              <BuyButton courseGroup={props.courseGroup}></BuyButton>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Grid
          container
          //style={{ marginTop: "-25px", height: "100px" }}
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={8}
          className={classes.sectionDesktop}
        >
          <Grid item>
            <Typography display="inline" variant="body2">
              Bu dersi şu anda{" "}
              {props.statistics ? props.statistics.onlineStudents + " " : null}
              <VisibilityIcon
                style={{ fontSize: 18, paddingTop: "4px" }}
              />{" "}
              kişi izliyor.
            </Typography>
          </Grid>
          <Grid item>
            <CourseGroupButton
              style={{ marginRight: 70, width: 300 }}
              courseGroup={props.courseGroup}
              width={400}
            ></CourseGroupButton>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
