import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  Divider,
  CircularProgress,
  Box,
  LinearProgress,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CouponForm from "./CouponForm";
import IyzicoWithoutCode from "./IyzicoWithoutCode";
import IyzicoWithCode from "./IyzicoWithCode";
import FreeCourse from "./FreeCourse";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { findCourseGroup } from "../Api/applicationApi";
import { findSaleCode } from "../Api/applicationApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#fff",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },
  Container: {
    background: "#fff",
    borderRadius: "10px",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  payout: {},
  paperNews: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(4),
    marginTop: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(4),
    },
  },
  summary: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(2),
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

const CheckoutPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [existCoupon, setExistCoupon] = React.useState(false);
  const [isWorking, setIsWorking] = React.useState(true);
  const [courseGroup, setCourseGroup] = React.useState();
  const [saleCode, setSaleCode] = React.useState();
  const [progressVisible, setProgressVisible] = React.useState(false);

  const findCourseGroupIn = () => {
    findCourseGroup(queryString.parse(props.location.search).courseGroup) // skip limit
      .then((courseGroup) => {
        setCourseGroup(courseGroup);
        props.premiumCourseGroups.map((premiumCourseGroup, index) => {
          if (premiumCourseGroup.courseGroup_id == courseGroup._id) {
            props.showMessages(1, "Bu dersi daha önce satın aldınız.");
            history.push("/coursemap/" + courseGroup._id);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        //history.push("/");
      });
  };

  React.useEffect(() => {
    console.log(courseGroup);
    if (!courseGroup) {
      findCourseGroupIn();
    } else {
      if (queryString.parse(props.location.search).error) {
        props.showMessages(2, {
          Code: "ODEME101",
          Message: queryString.parse(props.location.search).error,
        });
      }
      setIsWorking(false);
      if (courseGroup.price.isSale) {
        setTotalPrice(
          courseGroup.price.base -
            courseGroup.price.base * courseGroup.price.sale
        );
      } else {
        setTotalPrice(courseGroup.price.base);
      }
    }
  }, [courseGroup]);

  const onSubmit = (formValues) => {
    console.log(formValues);
    setProgressVisible(true);
    findSaleCode(courseGroup._id, "sale", formValues.coupon)
      .then((code) => {
        //console.log(code);
        setTotalPrice(
          courseGroup.price.base - courseGroup.price.base * code.sale
        );
        setProgressVisible(false);
        setExistCoupon(false);
        setSaleCode(code);
      })
      .catch((err) => {
        props.showMessages(2, err);
        setProgressVisible(false);
      });
  };

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
        <Container className={classes.Container} maxWidth="lg">
          <Grid container className={classes.Body} justify="center" spacing={1}>
            <Grid item className={classes.payout} sm={6}>
              <Paper className={classes.summary} elevation={0}>
                <Typography
                  style={{ marginBottom: "10px" }}
                  className={classes.summaryTitle}
                  variant="h5"
                >
                  Özet
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    className={classes.summaryPriceTitle}
                    display="inline"
                    variant="body1"
                  >
                    {courseGroup ? courseGroup.name : null} + Sertifika
                  </Typography>
                  <Typography
                    className={classes.summaryPriceTitle}
                    align="right"
                    display="inline"
                    variant="h6"
                  >
                    {courseGroup
                      ? courseGroup.price.base
                          .toFixed(2)
                          .toString()
                          .replace(".", ",")
                      : null}{" "}
                    ₺
                  </Typography>
                </Grid>
                {saleCode ? (
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Typography
                      className={classes.summaryPriceTitle}
                      display="inline"
                      variant="body1"
                    >
                      {"%"}
                      {saleCode ? (saleCode.sale * 100).toString() : null}{" "}
                      indirim kodu: ({saleCode ? saleCode.name : null})
                    </Typography>
                    <Typography
                      className={classes.summaryPriceTitle}
                      align="right"
                      display="inline"
                      variant="h6"
                    >
                      {(courseGroup.price.base * saleCode.sale)
                        .toFixed(2)
                        .toString()
                        .replace(".", ",")}{" "}
                      ₺
                    </Typography>
                  </Grid>
                ) : (
                  <div>
                    {courseGroup.price.isSale ? (
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Typography
                          className={classes.summaryPriceTitle}
                          display="inline"
                          variant="body1"
                        >
                          {"%"}
                          {courseGroup
                            ? (courseGroup.price.sale * 100).toString()
                            : null}{" "}
                          NinjaCoders İndirimi:
                        </Typography>
                        <Typography
                          className={classes.summaryPriceTitle}
                          align="right"
                          display="inline"
                          variant="h6"
                        >
                          {(courseGroup.price.base * courseGroup.price.sale)
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}{" "}
                          ₺
                        </Typography>
                      </Grid>
                    ) : null}
                  </div>
                )}

                <Divider></Divider>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography
                    className={classes.summaryPriceTitle}
                    display="inline"
                    variant="h6"
                  >
                    TOPLAM{" "}
                    <Typography display="inline" variant="body2">
                      (Vergiler dahildir.)
                    </Typography>
                  </Typography>
                  <Typography
                    className={classes.summaryPriceTitle}
                    align="right"
                    display="inline"
                    variant="h5"
                  >
                    {totalPrice.toFixed(2).toString().replace(".", ",")} ₺
                  </Typography>
                </Grid>
                <Box textAlign="left" mt={2}>
                  Satın alma işlemi yaparak NinjaCoders'ın{" "}
                  <Link href="/service-policy">Satın Alma Sözleşmesini</Link>{" "}
                  kabul etmiş olursunuz.
                </Box>
                <Box textAlign="left" mt={2}>
                  Aldığınız kurslardan memnun kalmanızı istiyoruz. Bu nedenle,
                  satın aldığınız tüm kursları 5 gün içinde iade edebilirsiniz.{" "}
                  <Link href="/helo">NinjaCoders Yardım</Link>{" "}
                </Box>
                <Box textAlign="left" mt={5}>
                  {progressVisible ? (
                    <LinearProgress variant="query" color="secondary" />
                  ) : null}

                  {saleCode ? (
                    <Box>
                      <Box display="flex" style={{ width: "100%" }}>
                        <Typography display="inline" variant="body1">
                          Uygulanan indirim kodu: {saleCode.name}
                        </Typography>
                        <Box className={classes.grow} />
                        <Button
                          style={{ margin: "0px", padding: "0px" }}
                          color="primary"
                          type="submit"
                          onClick={() => {
                            if (courseGroup.price.isSale) {
                              setTotalPrice(
                                courseGroup.price.base -
                                  courseGroup.price.base *
                                    courseGroup.price.sale
                              );
                            } else {
                              setTotalPrice(courseGroup.price.base);
                            }
                            setSaleCode(null);
                          }}
                        >
                          Kodu Sil
                        </Button>
                      </Box>
                      <Box>
                        <Typography
                          display="inline"
                          color="textSecondary"
                          variant="body2"
                        >
                          Başka bir indirm kodu uygulamak için bu indirim kodunu
                          silmeniz gerekmektedir.
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <div>
                      {existCoupon ? (
                        <CouponForm
                          closeForm={() => {
                            setExistCoupon(false);
                          }}
                          onSubmit={onSubmit}
                        ></CouponForm>
                      ) : (
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() => {
                            setExistCoupon(true);
                          }}
                        >
                          İndirim kuponu uygula
                        </Link>
                      )}
                    </div>
                  )}
                </Box>
              </Paper>
              {saleCode ? (
                <div>
                  {totalPrice == 0 ? (
                    <FreeCourse
                      codeName={saleCode.name}
                      courseGroupId={courseGroup._id}
                      showMessages={props.showMessages}
                    ></FreeCourse>
                  ) : (
                    <IyzicoWithCode
                      codeName={saleCode.name}
                      courseGroupId={courseGroup._id}
                      showMessages={props.showMessages}
                    ></IyzicoWithCode>
                  )}
                </div>
              ) : (
                <IyzicoWithoutCode
                  courseGroupId={courseGroup._id}
                  showMessages={props.showMessages}
                ></IyzicoWithoutCode>
              )}
            </Grid>
            <Grid item sm={6}>
              <Paper className={classes.paperNews} elevation={0}>
                <Typography
                  className={classes.text1}
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  <VideoLibrary style={{ fontSize: 60 }} />
                </Typography>

                <Typography
                  className={classes.text1}
                  variant="h6"
                  align="center"
                >
                  Sınırsız Ders İçeriği
                </Typography>
                <Typography
                  className={classes.text1}
                  variant="subtitle1"
                  align="center"
                >
                  İstediğiniz kadar çok dersi izleyebilecek, sorularınızı
                  sorabileceksiniz.
                </Typography>
              </Paper>
              <Paper className={classes.paperNews} elevation={0}>
                <Typography
                  className={classes.text1}
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  <SupervisorAccountIcon style={{ fontSize: 60 }} />
                </Typography>

                <Typography
                  className={classes.text1}
                  variant="h6"
                  align="center"
                >
                  Alanında uzman eğitmenler
                </Typography>
                <Typography
                  className={classes.text1}
                  variant="subtitle1"
                  align="center"
                >
                  Boğaziçi'li Mühendis ve Öğretmenlerden oluşan uzman kadro ile
                  senelerdir uygulanan ve geliştirlen müfredatları
                  izleyeceksiniz.
                </Typography>
              </Paper>
              <Paper className={classes.paperNews} elevation={0}>
                <Typography
                  className={classes.text1}
                  variant="h5"
                  component="h5"
                  align="center"
                >
                  <InsertDriveFileIcon style={{ fontSize: 60 }} />
                </Typography>

                <Typography
                  className={classes.text1}
                  variant="h6"
                  align="center"
                >
                  Sertifika
                </Typography>
                <Typography
                  className={classes.text1}
                  variant="subtitle1"
                  align="center"
                >
                  NinjaCoders tarafından verilen sertifikayı alabileceksiniz.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

const CheckoutPageCon = connect((state) => {
  return {
    user_id: state.userReducer._id,
    token: state.userReducer.token,
    premiumCourseGroups: state.userReducer.premiumCourseGroups,
  };
})(CheckoutPage);

export default CheckoutPageCon;
