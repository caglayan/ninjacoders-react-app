import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  Container,
  TextField,
  Grid,
  CircularProgress,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import { pullPaymentForm } from "../Api/paymentApi";
import ScriptTag from "react-script-tag";

const useStyles = makeStyles((theme) => ({}));

const IyzicoForm = (props) => {
  const classes = useStyles();
  const [isWorking, setIsWorking] = React.useState(true);
  const [checkoutFormContent, setCheckoutFormContent] = React.useState();

  const findApp = () => {
    pullPaymentForm(props.token) // skip limit
      .then((result) => {
        console.log(
          result.checkoutFormContent
            .split("</script>")[0]
            .split('<script type="text/javascript">')[1]
        );

        setCheckoutFormContent(
          result.checkoutFormContent
            .split("</script>")[0]
            .split('<script type="text/javascript">')[1]
        );
        setIsWorking(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    if (!checkoutFormContent) {
      findApp();
    } else {
      console.log(checkoutFormContent);
      script.appendChild(document.createTextNode(checkoutFormContent));
      script.async = true;
      document.body.appendChild(script);
    }
  }, [checkoutFormContent]);

  return (
    <div className={classes.root}>
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
        <div id="iyzipay-checkout-form" class="responsive"></div>
      )}
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
