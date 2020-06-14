import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Person, LocalLibrary, ThumbUp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

export default function InstStat(props) {
  const classes = useStyles();

  return (
    <div>
      {props.studentsNo ? (
        <Grid
          container
          direction="column"
          align="center"
          justify="center"
          spacing={0}
        >
          <Grid item>
            <Person display="block" style={{ width: "30px", height: "24px" }} />
          </Grid>
          <Grid item>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              {props.studentsNo}
            </Typography>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              Öğrenci
            </Typography>
          </Grid>
        </Grid>
      ) : null}
      {props.rating ? (
        <Grid
          container
          direction="column"
          align="center"
          justify="center"
          spacing={0}
        >
          <Grid item>
            <ThumbUp
              display="block"
              style={{ width: "30px", height: "24px" }}
            />
          </Grid>
          <Grid item>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              {props.rating}
            </Typography>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              Puan
            </Typography>
          </Grid>
        </Grid>
      ) : null}
      {props.coursesNo ? (
        <Grid
          container
          direction="column"
          align="center"
          justify="center"
          spacing={0}
        >
          <Grid item>
            <LocalLibrary
              display="block"
              style={{ width: "30px", height: "24px" }}
            />
          </Grid>
          <Grid item>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              {props.coursesNo}
            </Typography>
            <Typography
              display="block"
              variant="body2"
              style={{ height: "20px" }}
            >
              Ders
            </Typography>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}
