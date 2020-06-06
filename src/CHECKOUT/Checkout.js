import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

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
  payout: {},
  paperNews: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.Container} maxWidth="lg">
        <Grid container className={classes.Body} justify="center" spacing={10}>
          <Grid item className={classes.payout} sm="6">
            <div id="iyzipay-checkout-form" class="responsive">
              Ödeme Formu
            </div>
          </Grid>
          <Grid item sm="6">
            <Paper className={classes.paperNews} elevation={0}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                <VideoLibrary style={{ fontSize: 60 }} />
              </Typography>

              <Typography className={classes.text1} variant="h6" align="center">
                Sınırsız Ders İçeriği
              </Typography>
              <Typography
                className={classes.text1}
                variant="subtitle1"
                align="center"
              >
                İstediğiniz kadar çok dersi izleyebilecek, sorularınızı
                sorabileceksiniz.
              </Typography>
            </Paper>
            <Paper className={classes.paperNews} elevation={0}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                <SupervisorAccountIcon style={{ fontSize: 60 }} />
              </Typography>

              <Typography className={classes.text1} variant="h6" align="center">
                Alanında uzman eğitmenler
              </Typography>
              <Typography
                className={classes.text1}
                variant="subtitle1"
                align="center"
              >
                Boğaziçi'li Mühendis ve Öğretmenlerden oluşan uzman kadro ile
                senelerdir uygulanan ve geliştirlen müfredatları izleyeceksiniz.
              </Typography>
            </Paper>
            <Paper className={classes.paperNews} elevation={0}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                <InsertDriveFileIcon style={{ fontSize: 60 }} />
              </Typography>

              <Typography className={classes.text1} variant="h6" align="center">
                Sertifika
              </Typography>
              <Typography
                className={classes.text1}
                variant="subtitle1"
                align="center"
              >
                NinjaCoders tarafından verilen sertifikayı alabileceksiniz.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
