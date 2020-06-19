import React from "react";
import {
  Tooltip,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
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

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        {props.percentage > 0.9 ? (
          <Grid item>
            <Typography
              className={classes.text1}
              variant="h6"
              component="h6"
              align="center"
            >
              Dersi başarı ile bitirdiniz. Sertifikanızı isteyin.
            </Typography>
          </Grid>
        ) : (
          <Grid item>
            <Typography
              className={classes.text1}
              variant="h6"
              component="h6"
              align="center"
            >
              Dersin şu ana kadar izleme durumunuz:{" "}
              <b>%{Math.floor(props.percentage * 100)} </b>
              <br></br> Sertifikanızı alabilmek için bu grubun % 90'nından daha
              fazlasını izlemek zorundasınız.
            </Typography>
          </Grid>
        )}

        <Grid item>
          <Tooltip
            title={
              props.percentage > 0.9
                ? ""
                : "Sertifikanızı alabilmek için bu grubun % 90'nından daha fazlasını izlemek zorundasınız."
            }
          >
            <span>
              <Button
                style={{ marginTop: "10px" }}
                onClick={props.certificateOpen}
                variant="contained"
                color="primary"
                disabled={!(props.percentage > 0.9)}
              >
                Sertifika İste
              </Button>
            </span>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
