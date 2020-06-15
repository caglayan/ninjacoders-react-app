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
    marginTop: theme.spacing(4),
  },
  text1: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  PremiumButton: {
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
            {props.title}
          </Typography>
          <Typography
            className={classes.text1}
            variant="h6"
            component="h6"
            align="center"
          >
            {props.desc}
          </Typography>
        </Grid>
        <Grid item>
          {!props.premium ? (
            <Button
              className={classes.PremiumButton}
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push(`/user/checkout/TATIL`);
              }}
            >
              <Typography variant="body1" style={{ marginRight: "5px" }}>
                6 Aylık Üyelik:
              </Typography>
              <Typography variant="h6"> 24 ₺</Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  marginLeft: "10px",
                }}
              >
                %66 indirim
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  marginLeft: "10px",
                  textDecoration: "line-through",
                }}
              >
                72 ₺
              </Typography>
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
