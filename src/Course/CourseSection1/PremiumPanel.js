import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BuyButton from "../../Components/BuyButton/BuyButton";

const useStyles = makeStyles((theme) => ({
  PremiumButton: {
    borderRadius: 50,
    marginTop: theme.spacing(4),
  },
}));

const PremiumPanel = (props) => {
  const classes = useStyles();
  const history = useHistory();
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
          Devam etmek ve bütün dersleri özgürce seyreymek için,
        </Typography>
        <Typography
          style={{ color: "white" }}
          variant="h6"
          component="h6"
          align="center"
        >
          dersi satın alın.
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: "20px" }}>
        <BuyButton courseGroup={props.courseGroup}></BuyButton>
      </Grid>
    </Grid>
  );
};

PremiumPanel.propTypes = {};

export default PremiumPanel;
