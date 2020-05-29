import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "0",
    maxWidth: "100%",
    backgroundColor: theme.palette.grey[100],
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Star = ({ willBeActive, isActive, style }) => {
  const fill = isActive ? "#fc6" : willBeActive ? "#ffdd99" : "#e3e3e3";
  return (
    <svg viewBox="0 0 19.481 19.481" width="20" height="20" style={style}>
      <path
        fill={fill}
        d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"
      />
    </svg>
  );
};

export default function Comment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="subtitle1">Betül Akıncı</Typography>
                <Typography variant="body2" gutterBottom color="textSecondary">
                  3 gün önce
                </Typography>
                <Typography variant="body2" gutterBottom>
                  1500'lerden beri kullanılmakta olan standard Lorem Ipsum
                  metinleri ilgilenenler için yeniden üretilmiştir. Çiçero
                  tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H.
                  Rackham çevirisinden alınan İngilizce sürümleri eşliğinde
                  özgün biçiminden yeniden üretilmiştir.
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Rater total={5} rating={2} interactive={false}>
                <Star />
              </Rater>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
