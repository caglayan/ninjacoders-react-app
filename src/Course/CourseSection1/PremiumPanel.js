import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  PremiumButton: {
    width: theme.spacing(32),
    borderRadius: 50,
    marginTop: theme.spacing(4),
  },
}));

const PremiumPanel = (props) => {
  const classes = useStyles();
  console.log("Video Panel", props);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item>
        <Typography
          style={{ color: "white" }}
          variant="h6"
          component="h6"
          align="center"
        >
          Devam etmek için ve diğer dersleri de özgürce seyretmek için,
        </Typography>
        <Typography
          style={{ color: "white" }}
          variant="h6"
          component="h6"
          align="center"
        >
          Öğrencimiz olun.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className={classes.PremiumButton}
          variant="contained"
          color="secondary"
        >
          Öğrencimiz olun: 12,99₺
        </Button>
      </Grid>
    </Grid>
  );
};

PremiumPanel.propTypes = {};

export default PremiumPanel;
