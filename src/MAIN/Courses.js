import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box, Button } from "@material-ui/core/";
import CourseCard from "../Components/CourseCard/CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { useHistory } from "react-router-dom";
import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
}));

export default function TextArea() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Grid item>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="left"
          >
            Kodlama Dersleri
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.signinButton}
            onClick={() => {
              history.push("/kodlama");
            }}
          >
            Bütün Dersler
          </Button>
        </Grid>
      </Grid>
      <Carousel slidesPerPage={4} arrows infinite>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
      </Carousel>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: 100, paddingRight: "5%", paddingLeft: "5%" }}
      >
        <Grid item>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="left"
          >
            Robotik Dersleri
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.signinButton}
            onClick={() => {
              history.push("/kodlama");
            }}
          >
            Bütün Dersler
          </Button>
        </Grid>
      </Grid>
      <Carousel slidesPerPage={4} arrows infinite>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
        <CourseCard
          instructor={{ givenName: "Çağlayan", familiyName: "Şerbetçi" }}
        ></CourseCard>
      </Carousel>
    </Container>
  );
}
