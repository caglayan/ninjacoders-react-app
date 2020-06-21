import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
  },
  PremiumButton: {
    borderRadius: 20,
    height: 40,
    width: 350,
  },
}));

const BuyButton = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [isPremium, setIsPremium] = React.useState(false);

  React.useEffect(() => {
    if (props.premiumCourseGroups) {
      console.log("hey");
      props.premiumCourseGroups.map((premiumCourseGroup) => {
        if (premiumCourseGroup.courseGroup_id == props.courseGroup._id)
          setIsPremium(true);
      });
    }
  }, [props.premiumCourseGroups]);

  return props.courseGroup && !isPremium ? (
    <div>
      <Button
        className={classes.PremiumButton}
        variant="contained"
        style={{ width: props.width }}
        color="secondary"
        onClick={() => {
          history.push("/user/checkout?courseGroup=" + props.courseGroup._id);
        }}
      >
        <Typography variant="body1" style={{ marginRight: "5px" }}>
          {props.courseGroup ? props.courseGroup.shortName : null} + Sertifika
        </Typography>
        <Typography variant="h6">
          {props.courseGroup
            ? (
                props.courseGroup.price.base *
                (1 - props.courseGroup.price.sale)
              )
                .toFixed(2)
                .toString()
                .replace(".", ",")
            : null}{" "}
          ₺
        </Typography>
      </Button>
      {props.courseGroup.price.isSale ? (
        <Box textAlign="center">
          <Typography
            variant="body2"
            color="textSecondary"
            display="inline"
            style={{
              marginLeft: "10px",
            }}
          >
            %{" "}
            {props.courseGroup
              ? (props.courseGroup.price.sale * 100).toString()
              : null}{" "}
            indirim
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            display="inline"
            style={{
              marginLeft: "10px",
              textDecoration: "line-through",
            }}
          >
            {props.courseGroup
              ? props.courseGroup.price.base
                  .toFixed(2)
                  .toString()
                  .replace(".", ",")
              : null}{" "}
            ₺
          </Typography>
        </Box>
      ) : null}
    </div>
  ) : null;
};

BuyButton.propTypes = {};

export default BuyButton;
