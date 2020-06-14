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
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(12),
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  carousel: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  supportImage: {
    width: 100,
    height: 100,
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
      <div className={classes.sectionDesktop}>
        <Carousel
          className={classes.carousel}
          slidesPerPage={4}
          arrows
          infinite
        >
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_1.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_2.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_3.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_4.png"}
          />
        </Carousel>
      </div>
      <div className={classes.sectionMobile}>
        <Carousel
          className={classes.carousel}
          slidesPerPage={1}
          arrows
          infinite
        >
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_1.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_2.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_3.png"}
          />
          <img
            style={{ borderRadius: 5, width: 150, height: 150 }}
            src={"/supporters_logo_4.png"}
          />
        </Carousel>
      </div>
    </Container>
  );
}
