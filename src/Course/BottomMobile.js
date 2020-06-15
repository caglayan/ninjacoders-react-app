import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  PremiumButton: {
    borderRadius: 50,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
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
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}
