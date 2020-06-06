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
        spacing={3}
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography className={classes.text1} variant="body">
            Sertifikanızı alabilmek için bu grubun % 90'nından daha fazlasını
            izlemek zorundasınız.
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip
            title={
              props.isFinish
                ? ""
                : "Sertifikanızı alabilmek için bu grubun % 90'nından daha fazlasını izlemek zorundasınız."
            }
          >
            <span>
              <Button
                onClick={props.makeCommentOpen}
                variant="contained"
                color="primary"
                disabled={!props.isFinish}
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
