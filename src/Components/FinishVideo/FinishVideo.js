import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import MakeComment from "../MakeComment/MakeComment";

import CourseCard from "../CourseCard/CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { findCourseGroup } from "../../Api/applicationApi";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const VideoPanel = (props) => {
  const classes = useStyles();
  const [courseGroup, setCourseGrouplication] = React.useState();
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isEnded, setIsEnded] = React.useState(false);

  const findCourseGroupIn = () => {
    findCourseGroup("5ee7c4e89931e57458d54f96") // skip limit
      .then((courseGroup) => {
        setCourseGrouplication(courseGroup);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log(courseGroup);
    if (!courseGroup) {
      findCourseGroupIn();
    } else {
      //setIsWorking(false);
    }
  }, [courseGroup]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" gutterBottom>
            Tebrikler! <br></br>Dersi başarı ile bitirdiniz.
          </Typography>
        </Box>
        <MakeComment {...props}></MakeComment>
      </Grid>
      <Grid style={{ width: "100%" }} item>
        <Box textAlign="center" m={1}>
          <Typography variant="h6" gutterBottom>
            Bu yolculuğun diğer derslerine göz atın!
          </Typography>
        </Box>
        <Carousel slidesPerPage={1} arrows dots infinite>
          {courseGroup
            ? courseGroup.courses.map((course, index) => {
                return <CourseCard key={course._id} {...course}></CourseCard>;
              })
            : null}
        </Carousel>
      </Grid>
    </Grid>
  );
};

VideoPanel.propTypes = {};

export default VideoPanel;
