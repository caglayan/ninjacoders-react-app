import React from "react";
import { Fade, Slide, Grid, Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: "400px",
    [theme.breakpoints.up("md")]: {
      height: "500px",
    },
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gradientDiv: {
    position: "absolute",
    display: "flex",
    width: "100%",
    flex: "1 1 auto",
    padding: "30px",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)",
  },
  banner1: {
    position: "absolute",
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginLeft: "5%",
    },
    flex: "1 1 auto",
    padding: "30px",
    height: "100%",
  },

  PremiumButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSlide() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);
  const [direction, setDirection] = React.useState("right");

  React.useEffect(() => {
    setInterval(() => {
      setChecked((prev) => !prev);
      setDirection((prev) => {
        if (prev == "right") {
          return "right";
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
            src="https://images.squarespace-cdn.com/content/v1/59371b611e5b6cbaaa211ff9/1508513861460-YJ6XUF57VPQILZ68SRUM/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/_DSC4427.jpg"
          ></img>
          <div className={classes.gradientDiv}></div>
        </div>
      </Fade>

      <Fade timeout={800} in={!checked}>
        <div>
          <img
            className={classes.image}
            src="https://scontent.fsaw1-1.fna.fbcdn.net/v/t31.0-8/17349701_1026959527405302_442742209446467883_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=4GeoIvA_8p4AX-poxK9&_nc_ht=scontent.fsaw1-1.fna&oh=081da00687f6b3a9acf3b6972b351700&oe=5F068D61"
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
              style={{ height: "100%" }}
            >
              <Grid item>
                <Typography
                  style={{ color: "white" }}
                  variant="h4"
                  component="h4"
                >
                  Ufkunuzu açın,
                </Typography>
                <Typography
                  style={{ color: "white", marginTop: 5 }}
                  variant="h5"
                  component="h5"
                >
                  yüzlerce yazılım ve robotik dersini uzaktan öğrenin.
                </Typography>
              </Grid>
              <Grid item></Grid>
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
              style={{ height: "100%" }}
            >
              <Grid item>
                <Typography
                  style={{ color: "white" }}
                  variant="h4"
                  component="h4"
                >
                  NinjaCoders ile geleceği kodlayın,
                </Typography>
                <Typography
                  style={{ color: "white", marginTop: 5 }}
                  variant="h5"
                  component="h5"
                >
                  Alanında en başarılı eğitmenler ile üretin, eğlenin ve
                  hayallerinize ulaşın.
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Fade>
        </div>
      </Slide>
    </div>
  );
}
