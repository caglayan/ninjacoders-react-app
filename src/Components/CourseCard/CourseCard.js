import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, Grid } from "@material-ui/core/";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const history = useHistory();
  console.log(props);

  const msToTime = (duration) => {
    let seconds = Math.floor(duration % 60),
      minutes = Math.floor((duration / 60) % 60),
      hours = Math.floor((duration / (60 * 60)) % 24);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let str = "";
    if (hours > 0) {
      str = "(" + str + hours + " saat " + minutes + " dakika" + ")";
    } else if (minutes > 0) {
      str = "(" + str + minutes + " dakika" + ")";
    }
    return str;
  };

  return (
    <Card
      onClick={() => {
        history.push(`/course/5df92c57ea9f59862aabd1ab`);
      }}
      className={classes.root}
    >
      <Grid
        container
        style={{ marginTop: 5, marginBottom: 5 }}
        justify="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid style={{ marginLeft: 5 }} item>
          <Typography variant="body2" color="textSecondary" component="body2">
            {props.studentNumber} Öğrenci
          </Typography>
        </Grid>
        <Grid style={{ marginRight: 5 }} item>
          <Typography variant="body2" color="textSecondary" component="body2">
            {props.numberOfVideos} Ders {msToTime(props.duration)}
          </Typography>
        </Grid>
      </Grid>

      <CardMedia
        className={classes.media}
        image={props.courseThumbNail}
        title="Course ThumbNail"
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="h">
          {props.courseName}
        </Typography>
        <Grid
          container
          style={{ marginTop: 5, marginBottom: 5 }}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.instructor.givenName + " " + props.instructor.familyName}
            </Typography>
          </Grid>
          <Grid style={{ marginRight: 5 }} item>
            <Rater total={5} rating={props.rating} interactive={false}>
              <Star />
            </Rater>
            <Typography variant="body2" color="textSecondary" component="body2">
              {props.rating}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box m={2}>
        <Progress percent={Math.floor(props.percentage * 100)} />
      </Box>
    </Card>
  );
}
