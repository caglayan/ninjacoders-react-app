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
    console.log("courseGoroupId", props.courseGroupId);
    pullPaymentForm(props.token, props.courseGroupId, props.codeName) // skip limit
      .then((result) => {
        // console.log(
        //   result.checkoutFormContent
        //     .split("</script>")[0]
        //     .split('<script type="text/javascript">')[1]
        // );
        setCheckoutFormContent(
          result.checkoutFormContent
            .split("</script>")[0]
            .split('<script type="text/javascript">')[1]
        );
        setIsWorking(false);
      })
      .catch((err) => {
        props.showMessages(2, err);
      });
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    if (!checkoutFormContent) {
      findApp();
    } else {
      var arr = checkoutFormContent.split("buyerProtectionEnabled:true");
      var abc = arr[0];
      if (arr.length > 1)
        var abc = arr[0] + "buyerProtectionEnabled:false" + arr[1];

      arr = abc.split("force3Ds:false");
      console.log(arr);
      abc = arr[0];
      if (arr.length > 1) var abc = arr[0] + "force3Ds:true" + arr[1];

      arr = abc.split("hide3DS:true");
      console.log(arr);
      abc = arr[0];
      if (arr.length > 1) var abc = arr[0] + "hide3DS:false" + arr[1];

      arr = abc.split("if (typeof iyziInit == 'undefined') {")[1].slice(0, -1);
      console.log(arr);

      // abc = arr[0] + "bkmEnabled:true" + arr[1];

      script.appendChild(document.createTextNode(arr));
      script.async = true;
      script.id = "payScript";
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
        <div
          id="iyzipay-checkout-form"
          onChange={() => {
            console.log("love");
          }}
          className="responsive"
        ></div>
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
