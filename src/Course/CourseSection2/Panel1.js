import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Divider, Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import TabPanel from "../../Components/CourseHelpers/TabPanel";
import InstStat from "../../Components/CourseHelpers/InstStat";

const useStyles = makeStyles((theme) => ({}));

const DescriptionPanel = (props) => {
  const classes = useStyles();
  return (
    <TabPanel value={props.index} index={0}>
      <Grid container spacing={0}>
        <Grid item sm={8}>
          <Typography variant="body1" component="h1">
            <Box fontWeight="fontWeightMedium">
              Python ile Veri Bilimi ve Makine Öğrenimi
            </Box>
          </Typography>
          <Typography variant="body2" component="h1">
            Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
            Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar
            uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney
            College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum
            pasajında geçen ve anlaşılması en güç sözcüklerden biri olan
            'consectetur' sözcüğünün klasik edebiyattaki örneklerini
            incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero
            tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et
            Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33
            sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
            tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
            pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
            sayılı bölümdeki bir satırdan gelmektedir.
            <Box style={{ marginTop: "10px" }}>
              1500'lerden beri kullanılmakta olan standard Lorem Ipsum metinleri
              ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan
              1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
              alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden
              üretilmiştir.
            </Box>
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid
              container
              justify="center"
              spacing={1}
              style={{ marginTop: "30px" }}
            >
              <Grid style={{ height: "50px" }} item sm={3} xs={12}>
                <InstStat></InstStat>
              </Grid>
              <Grid style={{ height: "50px" }} item sm={3} xs={12}>
                <InstStat></InstStat>
              </Grid>
              <Grid style={{ height: "50px" }} item sm={3} xs={12}>
                <InstStat></InstStat>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: "30px" }} variant="middle" />
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                className={classes.bigAvatar}
                src="https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/02/Avatar-Sizes-Custom-1.png"
              />
            </Grid>
            <Grid item>
              <Typography variant="body2">Mehmet Vahit Keskin</Typography>
              <Typography variant="body2">Data Scientist</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mx={4} my={1}>
                1500'lerden beri kullanılmakta olan standard Lorem Ipsum
                metinleri ilgilenenler için yeniden üretilmiştir. Çiçero
                tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H.
                Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün
                biçiminden yeniden üretilmiştir.
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TabPanel>
  );
};

const DescriptionPanelCon = connect((state) => ({
  _id: state.courseReducer._id,
  title: state.courseReducer.title,
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
