import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
          Devam etmek için ve diğer dersleri de özgürce seyretmek için,
        </Typography>
        <Typography
          style={{ color: "white" }}
          variant="h6"
          component="h6"
          align="center"
        >
          Premium üye olun.
        </Typography>
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
  );
};

PremiumPanel.propTypes = {};

export default PremiumPanel;
