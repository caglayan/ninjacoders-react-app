import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, Button } from "@material-ui/core";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  PremiumButton: {
    width: theme.spacing(32),
    borderRadius: 50,
    marginRight: 75,
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "10px" }}
      spacing={2}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          Bu eğitimdeki yetenekler:
          {props.abilities.map((ability, index) => {
            return (
              <Chip
                key={100 + index}
                style={{ marginLeft: 8 }}
                label={ability}
                variant="outlined"
              />
            );
          })}
        </Grid>
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
