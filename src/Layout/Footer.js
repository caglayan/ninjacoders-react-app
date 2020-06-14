import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Container } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import logo from "../logo.svg";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  MainGrid: {
    backgroundColor: "tarnsparent",
  },
  Footer: {
    marginTop: theme.spacing(4),
    backgroundColor: "tarnsparent",
  },
  logo: {
    width: theme.spacing(20),
  },
  inlineIcon: {
    verticalAlign: "bottom",
  },
  mailTypograpgh: {
    marginTop: "",
    [theme.breakpoints.up("sm")]: {
      marginTop: "40px",
    },
  },
  linkBar: {
    marginTop: "",
    [theme.breakpoints.up("sm")]: {
      marginTop: "40px",
    },
  },
  grow: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.Footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <img
              style={{ marginTop: "20px" }}
              src="/ninjacoders_h_logo.png"
              className={classes.logo}
              alt="logo"
            />
            <Typography
              style={{ marginTop: "20px" }}
              variant="body1"
              gutterBottom
            >
              NinjaCoders Boğaziçi Üniversitesi mezunlarının bir girişimidir.
              Ekibimiz kodlama ve robotik eğitimleri üzerine çalışan mühendis ve
              öğretmenlerden oluşur.
            </Typography>
          </Grid>
          <Grid item sm={1} className={classes.grow}></Grid>
          <Grid item sm={2} className={classes.grow}>
            <Grid container direction="column" justify="center" spacing={2}>
              <Grid className={classes.linkBar} item>
                <Link
                  target="_blank"
                  href="/service-policy"
                  variant="subtitle2"
                  color="primary"
                >
                  Kullanızı Sözleşmesi
                </Link>
              </Grid>
              <Grid item>
                <Link
                  target="_blank"
                  href="/service-policy"
                  variant="subtitle2"
                  color="primary"
                >
                  Hakkımızda
                </Link>
              </Grid>
              <Grid item>
                <Link
                  target="_blank"
                  href="/service-policy"
                  variant="subtitle2"
                  color="primary"
                >
                  Yardım
                </Link>
              </Grid>
              <Grid item>
                <Link
                  target="_blank"
                  href="mailto:merhaba@ninjacoders.co?subject=Size bir mesajım var."
                >
                  Bize ulaşın
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={1} className={classes.grow}></Grid>
          <Grid item sm={4}>
            <Typography
              className={classes.mailTypograpgh}
              variant="body1"
              gutterBottom
            >
              <Link href="mailto:merhaba@ninjacoders.co?subject=Size bir mesajım var.">
                merhaba@ninjacoders.co
              </Link>
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              variant="body1"
              gutterBottom
            >
              Boğaziçi Üniversitesi Kuzey Kampüs Teknopark No:206 Bebek/
              Beşiktaş/ ISTANBUL
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              variant="body1"
              gutterBottom
            >
              I{" "}
              <FavoriteIcon className={classes.inlineIcon} color="secondary" />{" "}
              Istanbul
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid item sm={12}>
            <Divider></Divider>
          </Grid>
          <Typography variant="subtitle2" gutterBottom>
            Telif hakkı @ 2020 NinjaCoders Yazılım LTD. ŞTİ.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}
