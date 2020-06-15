import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  Divider,
  Box,
} from "@material-ui/core";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CouponForm from "./CouponForm";
import Iyzico from "./Iyzico";

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

export default function NotFoundPage(props) {
  const [existCoupon, setExistCoupon] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.Container} maxWidth="lg">
        <Grid container className={classes.Body} justify="center" spacing={10}>
          <Grid item className={classes.payout} sm="6">
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
                  6 Aylık NinjaCoders Üyelik Ücreti:
                </Typography>
                <Typography
                  className={classes.summaryPriceTitle}
                  align="right"
                  display="inline"
                  variant="h6"
                >
                  72.00 ₺
                </Typography>
              </Grid>
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
                  Kupon İndirimi:
                </Typography>
                <Typography
                  className={classes.summaryPriceTitle}
                  align="right"
                  display="inline"
                  variant="h6"
                >
                  48.00 ₺
                </Typography>
              </Grid>
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
                  TOPLAM
                </Typography>
                <Typography
                  className={classes.summaryPriceTitle}
                  align="right"
                  display="inline"
                  variant="h5"
                >
                  24.00 ₺
                </Typography>
              </Grid>
              <Box textAlign="left" mt={2}>
                Satın alma işlemi yaparak NinjaCoders'ın{" "}
                <Link href="/service-policy">
                  Kullanıcı ve Üyelik Sözleşmesini
                </Link>{" "}
                kabul etmiş olursunuz.
              </Box>
              <Box textAlign="left" mt={5}>
                {existCoupon ? (
                  <CouponForm></CouponForm>
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
              </Box>
            </Paper>
            <Iyzico></Iyzico>
          </Grid>
          <Grid item sm="6">
            <Paper className={classes.paperNews} elevation={0}>
              <Typography
                className={classes.text1}
                variant="h5"
                component="h5"
                align="center"
              >
                <VideoLibrary style={{ fontSize: 60 }} />
              </Typography>

              <Typography className={classes.text1} variant="h6" align="center">
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

              <Typography className={classes.text1} variant="h6" align="center">
                Alanında uzman eğitmenler
              </Typography>
              <Typography
                className={classes.text1}
                variant="subtitle1"
                align="center"
              >
                Boğaziçi'li Mühendis ve Öğretmenlerden oluşan uzman kadro ile
                senelerdir uygulanan ve geliştirlen müfredatları izleyeceksiniz.
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

              <Typography className={classes.text1} variant="h6" align="center">
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
    </div>
  );
}
