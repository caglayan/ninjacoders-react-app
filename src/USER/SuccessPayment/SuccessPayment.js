import React from "react";
import "./Success.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CircularProgress,
  Box,
  Divider,
  Grid,
  Container,
  Typography,
} from "@material-ui/core/";
import { connect } from "react-redux";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { findCourseGroup } from "../../Api/applicationApi";
import { startCreateUserWithToken } from "../../Redux/Selectors/userSelector";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "none",
    background: "tarnsparent",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  containerMobile: {
    marginTop: 50,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  Avatar: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  List: {
    maxWidth: 200,
    margin: "auto",
  },
  ListItemActive: {
    backgroundColor: theme.palette.action.selected,
  },
}));
const QuestionsCont = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isWorking, setIsWorking] = React.useState(true);
  const [courseGroup, setCourseGroup] = React.useState();

  const findCourseGroupIn = () => {
    console.log(
      "group_id ",
      queryString.parse(props.location.search).courseGroup
    );
    findCourseGroup(queryString.parse(props.location.search).courseGroup) // skip limit
      .then((courseGroup) => {
        setCourseGroup(courseGroup);
      })
      .catch((err) => {
        console.log(err);
        history.push("/");
      });
  };

  React.useEffect(() => {
    console.log(courseGroup);
    if (!courseGroup) {
      findCourseGroupIn();
    } else {
      props
        .dispatch(startCreateUserWithToken(props.token))
        .then((user) => {
          setIsWorking(false);
        })
        .catch((err) => {
          setIsWorking(false);
        });
    }
  }, [courseGroup]);

  return (
    <Container className={classes.container} maxWidth="md">
      {isWorking ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <CircularProgress
              style={{ marginTop: "5vh", marginBottom: "5vh" }}
              color="primary"
              size={40}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Box style={{ position: "relative" }}>
            <Box
              style={{
                zIndex: 1,
                animation: "rotation 5s infinite linear",
              }}
              //animation:
              //"10s linear 0s infinite normal none running animation-qwm8ha-animationRotate",
            >
              <svg width="162" height="162" viewBox="0 0 162 162">
                <g fill="none" fill-rule="nonzero">
                  <path
                    fill="#40C057"
                    d="M141.15 71.948l-10.07-8.11a5.996 5.996 0 0 1-2.192-5.327l1.397-12.866a11.483 11.483 0 0 0-3.284-9.37 11.446 11.446 0 0 0-9.355-3.294l-12.864 1.383a5.984 5.984 0 0 1-5.32-2.195L91.364 22.09A11.81 11.81 0 0 0 82.428 18a11.81 11.81 0 0 0-8.936 4.09l-8.097 10.08a5.946 5.946 0 0 1-5.32 2.194l-12.848-1.383a11.446 11.446 0 0 0-9.356 3.29 11.483 11.483 0 0 0-3.289 9.368l1.397 12.867a5.968 5.968 0 0 1-2.191 5.327l-10.081 8.115a11.485 11.485 0 0 0-4.284 8.95c0 3.478 1.575 6.77 4.284 8.948l10.07 8.11a5.974 5.974 0 0 1 2.191 5.327l-1.397 12.867a11.483 11.483 0 0 0 3.285 9.37 11.446 11.446 0 0 0 9.355 3.293l12.853-1.4a5.979 5.979 0 0 1 5.32 2.196l8.108 10.1A11.455 11.455 0 0 0 82.428 144c3.474 0 6.76-1.578 8.936-4.29l8.098-10.085a5.984 5.984 0 0 1 5.32-2.195l12.847 1.4a11.446 11.446 0 0 0 9.357-3.29 11.483 11.483 0 0 0 3.288-9.368l-1.397-12.872a5.963 5.963 0 0 1 2.192-5.328l10.07-8.11a11.485 11.485 0 0 0 4.284-8.948c0-3.48-1.576-6.77-4.284-8.95l.01-.016z"
                  ></path>
                  <path
                    fill="#40C057"
                    fill-opacity=".401"
                    d="M138.898 93.48l-6.432-11.068a5.936 5.936 0 0 1-.136-5.703l5.858-11.397a11.368 11.368 0 0 0 .29-9.827 11.335 11.335 0 0 0-7.481-6.364l-12.384-3.287a5.926 5.926 0 0 1-4.14-3.916l-3.91-12.19a11.696 11.696 0 0 0-16.523-6.342L82.976 29.83a5.89 5.89 0 0 1-5.697.14L65.89 24.135a11.338 11.338 0 0 0-9.818-.28 11.37 11.37 0 0 0-6.365 7.494l-3.275 12.389a5.91 5.91 0 0 1-3.917 4.147l-12.2 3.924a11.372 11.372 0 0 0-6.352 16.544l6.432 11.07a5.914 5.914 0 0 1 .135 5.702l-5.858 11.398a11.368 11.368 0 0 0-.289 9.827 11.335 11.335 0 0 0 7.48 6.363l12.38 3.268a5.92 5.92 0 0 1 4.14 3.916l3.912 12.215a11.344 11.344 0 0 0 16.524 6.341l11.066-6.448a5.927 5.927 0 0 1 5.697-.142l11.382 5.853a11.338 11.338 0 0 0 9.818.28 11.37 11.37 0 0 0 6.365-7.494l3.277-12.394a5.904 5.904 0 0 1 3.917-4.148l12.188-3.923a11.372 11.372 0 0 0 6.352-16.544l.016-.011z"
                  ></path>
                </g>
              </svg>
            </Box>
            <Box
              style={{
                width: "100%",
                position: "absolute",
                left: "50%",
                top: "50%",
                zIndex: "2",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="68" height="68" fill="#FFFFFF" viewBox="0 0 68 68">
                <path
                  fill="#FFF"
                  d="M37.618 51.112A9.968 9.968 0 0 1 22.76 52.17L9.126 38.592a5.564 5.564 0 0 1-1.521-5.417 5.574 5.574 0 0 1 3.984-3.978 5.585 5.585 0 0 1 5.426 1.52l12.558 12.537L51.38 14.228a5.583 5.583 0 0 1 9.593 1.154 5.563 5.563 0 0 1-.667 5.53l-22.69 30.2z"
                ></path>
              </svg>
            </Box>
          </Box>
          <Box textAlign="center" m={2}>
            <Typography variant="h5" gutterBottom>
              Tebrikler! <br></br>Artık {courseGroup.name} için hazırsınız.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Biz bu yolculuğu sizinle paylaştığımız için çok heyecanlıyız.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Sertifkanızı derslerin %90'ını bitirdikten sonra lütfen yolculuk
              syafasından isteyiniz..
            </Typography>
          </Box>
          <Button
            onClick={() => {
              history.push(`/coursemap/` + courseGroup._id);
            }}
            variant="contained"
            color="primary"
          >
            Ders grubuna git
          </Button>
        </Grid>
      )}
    </Container>
  );
};

export default connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
    avatarImage: state.userReducer.avatarImage,
    course_id: state.courseReducer._id,
    isUpdating: state.questionReducer.isUpdating,
    registeredCourses: state.userReducer.registeredCourses,
  };
})(QuestionsCont);
