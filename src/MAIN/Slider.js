import React from "react";
import { Fade, Slide, Grid, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: "400px",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  image2: {
    position: "absolute",
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  gradientDiv: {
    position: "absolute",
    display: "flex",
    width: "100%",
    flex: "1 1 auto",
    padding: "30px",
    height: "400px",
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)",
  },
  banner1: {
    position: "absolute",
    display: "flex",
    width: "50%",
    flex: "1 1 auto",
    padding: "30px",
    height: "400px",
  },
}));

export default function SimpleSlide() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);
  const [direction, setDirection] = React.useState("left");

  React.useEffect(() => {
    setInterval(() => {
      setChecked((prev) => !prev);
      setDirection((prev) => {
        if (prev == "right") {
          return "left";
        } else {
          return "right";
        }
      });
    }, 6000);
  }, []);

  const handleChange = () => {};
  //https://static.skillshare.com/assets/images/homepage/promo-banner/danielle-krysa-bg-desktop.jpg
  return (
    <div className={classes.container}>
      <Fade timeout={800} in={checked}>
        <div>
          <img
            className={classes.image}
            src="https://static.skillshare.com/assets/images/homepage/promo-banner/laci-jordan-bg-desktop.jpg"
          ></img>
          <div className={classes.gradientDiv}></div>
        </div>
      </Fade>

      <Fade timeout={800} in={!checked}>
        <div>
          <img
            className={classes.image}
            src="https://static.skillshare.com/assets/images/homepage/promo-banner/di-ujdi-bg-desktop.jpg"
          ></img>
          <div className={classes.gradientDiv}></div>
        </div>
      </Fade>
      <Slide
        direction={direction}
        timeout={1000}
        in={checked}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.banner1}>
          <Fade timeout={800} in={checked}>
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
                  onClick={() => {
                    history.push(`/checkout`);
                  }}
                >
                  Öğrencimiz olun: 12,99₺
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </Slide>
      <Slide
        direction={direction}
        timeout={1000}
        in={!checked}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.banner1}>
          <Fade timeout={800} in={!checked}>
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
                  onClick={() => {
                    history.push(`/checkout`);
                  }}
                >
                  Öğrencimiz olun: 12,99₺
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </div>
      </Slide>
    </div>
  );
}
