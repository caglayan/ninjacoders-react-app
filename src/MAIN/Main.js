import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Slider from "./Slider";
import TextArea from "./TextArea";
import Supporters from "./Supporters";
import CourseArea from "./CoursesSlider";
import Comments from "./Comments";
import { findApplication } from "../Api/applicationApi";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function Main(props) {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);
  const [application, setApplication] = React.useState();

  const findApp = () => {
    findApplication("5edb4b1bb4965a757aa6d7a1") // skip limit
      .then((app) => {
        setApplication(app);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log(application);
    if (!application) {
      findApp();
    } else {
      setIsWorking(false);
    }
  }, [application]);

  return (
    <Container
      className={classes.container}
      disableGutters={true}
      maxWidth={false}
    >
      {isWorking ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <CircularProgress
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
              color="primary"
              size={40}
            />
          </Grid>
        </Grid>
      ) : (
        <div>
          <Slider></Slider>
          <TextArea></TextArea>
          {application.courseGroups.map((courseGroupId, index) => {
            return (
              <CourseArea
                group_id={courseGroupId}
                key={courseGroupId}
              ></CourseArea>
            );
          })}
          <Comments comments={application.comments}></Comments>
          <Supporters></Supporters>
        </div>
      )}
    </Container>
  );
}
