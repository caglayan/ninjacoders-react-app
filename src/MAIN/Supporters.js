import React from "react";
import {
  Fade,
  Slide,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import CourseCard from "../Components/CourseCard/CourseCard";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  carousel: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

export default function TextArea() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Typography
        className={classes.text1}
        variant="h5"
        component="h5"
        align="center"
      >
        Bizi destekleyen kurumlar
      </Typography>
      <Typography
        className={classes.text1}
        variant="h6"
        component="h6"
        align="center"
      >
        Ninjacoders çocuklarınızı kodlama ve robotiğin dünyasında B.Ü.yülü bir
        yolculuğa çıkarıyor. 4 Haftalık eğitimler (Algoritma 101, Robot 101) ve
        haftalık Ekransız Kodlama eğitimleri ile çocuklar teknolojiyi Boğaziçi
        Üniversitesi'nde tanıyor.
      </Typography>
      <Carousel className={classes.carousel} slidesPerPage={4} arrows infinite>
        <img src={"https://via.placeholder.com/150"} />
        <img src={"https://via.placeholder.com/150"} />
        <img src={"https://via.placeholder.com/150"} />
        <img src={"https://via.placeholder.com/150"} />
      </Carousel>
    </Container>
  );
}
