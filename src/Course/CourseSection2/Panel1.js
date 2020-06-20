import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Link,
  CircularProgress,
  Avatar,
} from "@material-ui/core/";
import Rater from "react-rater";
import { connect } from "react-redux";
import TabPanel from "../../Components/CourseHelpers/TabPanel";
import InstructorPan from "./instructorPan";

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

const useStyles = makeStyles((theme) => ({}));

const DescriptionPanel = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);

  React.useEffect(() => {
    if (props.instructor) setIsWorking(false);
  }, [props.instructor]);

  return (
    <TabPanel value={props.index} index={0}>
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
        <Grid container spacing={3}>
          {!props.premium ? (
            <Grid item sm={8}>
              <Typography variant="h6" component="h1">
                <Box fontWeight="fontWeightMedium">Ders İstatistikleri</Box>
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                Derse kayıtlı öğrenci sayısı:{" "}
                {props.statistics ? props.statistics.numberStudents : "123"}{" "}
                kişi
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                Ders puanı:
                <Rater
                  style={{ marginLeft: "5px" }}
                  total={1}
                  rating={1}
                  interactive={false}
                >
                  <Star />
                </Rater>{" "}
                {props.statistics ? props.statistics.rating : "4.8"}{" "}
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                Toplam İzlenme süresi:{" "}
                {props.statistics ? props.statistics.watchedDuration : "4.8"}{" "}
                dakika
              </Typography>
              <Typography
                style={{ marginTop: "20px" }}
                variant="h6"
                component="h1"
              >
                <Box fontWeight="fontWeightMedium">
                  {props.description ? props.description.header : null}
                </Box>
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                {props.description ? props.description.parap1 : null}
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                {props.description ? props.description.parap2 : null}
              </Typography>
            </Grid>
          ) : (
            <Grid item sm={8}>
              <Typography variant="h6" component="h1">
                <Box fontWeight="fontWeightMedium">
                  {props.description ? props.coursePremium.header : null}
                </Box>
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                {props.coursePremium ? props.coursePremium.parap1 : null}
              </Typography>
              <Typography
                style={{ marginTop: "5px" }}
                variant="body2"
                component="h1"
              >
                {props.coursePremium ? props.coursePremium.parap2 : null}
              </Typography>
              <Typography
                style={{ marginTop: "30px" }}
                variant="h6"
                component="h1"
              >
                <Box fontWeight="fontWeightMedium">İndirilebilir İçerikler</Box>
              </Typography>
              {props.coursePremium
                ? props.coursePremium.materials.map((material, index) => {
                    return (
                      <div>
                        <Typography
                          style={{ marginTop: "5px" }}
                          variant="body2"
                          component="h1"
                        >
                          <Link target="_blank" href={material.link}>
                            {material.name}
                          </Link>
                          {" : " + material.desc + " "}
                        </Typography>
                      </div>
                    );
                  })
                : null}
            </Grid>
          )}
          <Grid item sm={4}>
            <InstructorPan {...props.instructor} />
          </Grid>
        </Grid>
      )}
    </TabPanel>
  );
};

const DescriptionPanelCon = connect((state) => ({
  _id: state.courseReducer._id,
  title: state.courseReducer.title,
  description: state.courseReducer.description,
  statistics: state.courseReducer.statistics,
  coursePremium: state.courseReducer.premium,
  isBelongNinja: state.courseReducer.isBelongNinja,
  instructor: state.courseReducer.instructor,
  description: state.courseReducer.description,
  duration: state.courseReducer.duration,
  numberOfSections: state.courseReducer.numberOfSections,
  chapters: state.courseReducer.chapters,
  shoppingCart: state.userReducer.shoppingCart,
  token: state.userReducer.token,
  premium: state.courseReducer.isPremium,
}))(DescriptionPanel);

export default DescriptionPanelCon;
