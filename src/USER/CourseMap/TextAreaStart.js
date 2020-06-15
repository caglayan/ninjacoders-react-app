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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  PremiumButton: {
    width: theme.spacing(32),
    borderRadius: 50,
    marginTop: theme.spacing(4),
  },
}));

export default function TextArea(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography
            className={classes.text1}
            variant="h5"
            component="h5"
            align="center"
          >
            B.Ü.yülü bir yolculuk
          </Typography>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="center"
          >
            Ninjacoders çocuklarınızı kodlama ve robotiğin dünyasında B.Ü.yülü
            bir yolculuğa çıkarıyor. 4 Haftalık eğitimler (Algoritma 101, Robot
            101) ve haftalık Ekransız Kodlama eğitimleri ile çocuklar
            teknolojiyi Boğaziçi Üniversitesi'nde tanıyor.
          </Typography>
        </Grid>
        <Grid item>
          {!props.premium ? (
            <Button
              className={classes.PremiumButton}
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push(`/user/checkout`);
              }}
            >
              Öğrencimiz olun: 12,99₺
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
