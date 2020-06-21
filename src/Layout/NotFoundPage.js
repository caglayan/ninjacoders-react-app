import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },
  Container: {
    background: "#fff",
    borderRadius: "10px",
  },
  Body: {
    marginTop: theme.spacing(3),
  },
  BackButton: {
    width: theme.spacing(22),
    borderRadius: 50,
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.Container} maxWidth="sm">
        <img style={{ width: "100%" }} src="/not_found.png"></img>

        <Grid container justify="center" spacing={2}>
          <Typography variant="h4" gutterBottom>
            Sayfa bulunamadı.
          </Typography>
        </Grid>
        <Grid container className={classes.Body} justify="center" spacing={2}>
          <Typography variant="body1" gutterBottom>
            Belli ki yolunuzu kaybettiniz. Hadi beraber anasayfaya dönelim.
          </Typography>
        </Grid>
        <Grid container className={classes.Body} justify="center" spacing={2}>
          <Link
            href="/"
            className={classes.BackButton}
            variant="body1"
            color="secondary"
          >
            Anasayfaya dön
          </Link>
        </Grid>
      </Container>
    </div>
  );
}
