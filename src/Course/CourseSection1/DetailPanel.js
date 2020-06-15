import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

/*
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
*/

const useStyles = makeStyles((theme) => ({
  PremiumButton: {
    borderRadius: 50,
    marginRight: 75,
  },
  sectionDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ marginTop: "20px" }}
        spacing={2}
        className={classes.sectionDesktop}
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
        </Grid>
      </Grid>
    </div>
  );
};
