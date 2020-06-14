import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Container,
  Divider,
  Avatar,
} from "@material-ui/core/";
import { connect } from "react-redux";
import TabPanel from "../../Components/CourseHelpers/TabPanel";
import InstructorPan from "./instructorPan";

const useStyles = makeStyles((theme) => ({}));

const DescriptionPanel = (props) => {
  const classes = useStyles();
  return (
    <TabPanel value={props.index} index={0}>
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Typography variant="h6" component="h1">
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
        <Grid item sm={4}>
          <InstructorPan {...props.instructor} />
        </Grid>
      </Grid>
    </TabPanel>
  );
};

const DescriptionPanelCon = connect((state) => ({
  _id: state.courseReducer._id,
  title: state.courseReducer.title,
  description: state.courseReducer.description,
  isBelongNinja: state.courseReducer.isBelongNinja,
  instructor: state.courseReducer.instructor,
  description: state.courseReducer.description,
  duration: state.courseReducer.duration,
  numberOfSections: state.courseReducer.numberOfSections,
  chapters: state.courseReducer.chapters,
  shoppingCart: state.userReducer.shoppingCart,
  token: state.userReducer.token,
}))(DescriptionPanel);

export default DescriptionPanelCon;
