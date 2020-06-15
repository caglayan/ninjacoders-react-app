import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Container,
  TextField,
  Grid,
  Box,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import { pullPaymentForm } from "../Api/paymentApi";
import ScriptTag from "react-script-tag";

const useStyles = makeStyles((theme) => ({}));

const IyzicoForm = (props) => {
  const classes = useStyles();

  const [paymentPageUrl, setPaymentPageUrl] = React.useState();

  const findApp = () => {
    pullPaymentForm(props.token) // skip limit
      .then((result) => {
        console.log(result.checkoutFormContent);
        setPaymentPageUrl(result.paymentPageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    console.log(paymentPageUrl);
    if (!paymentPageUrl) {
      findApp();
    } else {
      //setIsWorking(false);
    }
  }, [paymentPageUrl]);

  return (
    <div className={classes.root}>
      <iframe
        width="100%"
        height="900px"
        src={paymentPageUrl}
        frameborder="0"
      />
    </div>
  );
};

const IyzicoFormCon = connect((state) => {
  return {
    _id: state.userReducer._id,
    token: state.userReducer.token,
  };
})(IyzicoForm);

export default IyzicoFormCon;
