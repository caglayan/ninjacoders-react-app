import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Box,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import CommentPanel from "../Components/CommentHelpers/CommentPanel";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

const CourseSection3 = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item sm={12} xs={12}>
          <Typography variant="body1" component="h1">
            <Box fontWeight="fontWeightMedium">Öne Çıkan Yorum</Box>
          </Typography>
        </Grid>
        <Grid item sm={8} xs={12}>
          <CommentPanel {...props.bestComment}></CommentPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

const CourseSection3Con = connect((state) => ({
  bestComment: state.courseReducer.bestComment,
}))(CourseSection3);

export default CourseSection3Con;
