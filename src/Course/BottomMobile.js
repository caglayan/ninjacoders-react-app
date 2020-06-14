import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar } from "@material-ui/core/";
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
    width: theme.spacing(32),
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
            history.push(`/checkout`);
          }}
        >
          Öğrencimiz olun: 12,99₺
        </Button>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}
