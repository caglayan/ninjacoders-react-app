import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestCertificateApi } from "../../Api/userApi";
import CertificateRequestForm from "./CertificateRequestForm";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const CertificatePan = (props) => {
  const classes = useStyles();
  const [progressVisible, setProgressVisible] = React.useState(false);
  const history = useHistory();
  const [isEnded, setIsEnded] = React.useState(false);
  console.log("propesasdads:", props);

  const onSubmit = (formValues) => {
    console.log(formValues);
    setProgressVisible(true);
    requestCertificateApi(props.token, props.email, props.groupId)
      .then((status) => {
        console.log(status);
        if (status == 202) {
          props.showMessages(1, "Sertifika isteğiniz başarı ile gönderildi.");
          if (props.closeDialog) {
            props.closeDialog();
          }
          setProgressVisible(false);
        }
      })
      .catch((err) => {});
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <Box textAlign="center" m={2}>
          <Typography variant="h5" gutterBottom>
            Tebrikler! <br></br>Sertifika almaya hak kazandınız.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Bu yolculuğu bizimle paylaştığınız için çok teşekkür ederiz.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Sertifkanızı aşağıdaki mail adresine göndereceğiz. İsterseniz mail
            adresinizi değiştirebilirsiniz.
          </Typography>
        </Box>
      </Grid>
      <Grid style={{ width: "100%" }} item>
        <Box textAlign="center" m={1}>
          <CertificateRequestForm
            onSubmit={onSubmit}
            email={props.email}
          ></CertificateRequestForm>
        </Box>
        {progressVisible ? (
          <LinearProgress variant="query" color="secondary" />
        ) : null}
      </Grid>
    </Grid>
  );
};

CertificatePan.propTypes = {};

const CertificatePanCon = connect((state) => {
  return {
    course_id: state.courseReducer._id,
    token: state.userReducer.token,
    email: state.userReducer.email,
  };
})(CertificatePan);

export default CertificatePanCon;
