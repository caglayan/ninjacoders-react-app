import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Link,
} from "@material-ui/core";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

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
  image: {
    marginTop: "30px",
    width: "50%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.Container} maxWidth="md">
        <Grid container className={classes.Body} justify="center" spacing={10}>
          <img
            style={{ width: "120px", marginTop: "50px" }}
            src="/ninjacoders_logo_name.png"
          ></img>
          <Grid item xs={12}>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders 2019 yılında Tübital 1512 teknogirişim sermayasi
              desteği programı ile şirketleşmiştir. Daha önce Boğaziçi
              Üniversitesi'nde çocuklara birebir eğitim veren ekip 2020 yılınca
              eğitimlerine online olarak devam etme kararı almıştır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              2019 öncesi
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Boğaziçi Üniversitesi öğrencileri ve yeni mezunlarından oluşan
              ekip yaşları 7-14 arası değişen çocuklara 2016 -2019 yılları
              arasında kodlama eğitimi vermiştir. İlk defa 2016 yılında ortak
              aldıkları bir ders ile bir araya gelen ekip, dönem projesi olarak
              tasarladıkları fikirlerini geliştirerek çocuklara kodlama eğitimi
              vermeye başlamışlar. Ninjacoders isimli projede Haziran ayında
              başlayan eğitimler her hafta bir buçuk saat olacak şekilde devam
              ediyor. Kodlama eğitiminin çocuklarının analitik zekasını
              geliştirdiğini düşünen anneler, bu eğitimler sayesinde
              çocuklarının özgüvenlerinin de arttığını düşünüyor. Hakkımızda
              yapılan haberler:{" "}
              <Link
                target="_blank"
                href="https://haberler.boun.edu.tr/tr/haber/bogazicililerden-ninjacoders-projesi-ile-kodlama-egitimi-cocuk-yasta-basliyor"
                variant="subtitle2"
                color="primary"
              >
                Basında biz 1
              </Link>
              {" ve "}
              <Link
                target="_blank"
                href="https://www.haberler.com/ninjacoders-cocuklar-icin-kod-ve-robotik-egitimi-9582237-haberi/"
                variant="subtitle2"
                color="primary"
              >
                Basında biz 2
              </Link>
            </Typography>
            <Carousel slidesPerPage={1} arrows centered dots infinite>
              <img
                className={classes.image}
                src="https://www.ninjacoders.co/assets/img/ninja4.JPG"
              ></img>
              <img
                className={classes.image}
                src=" https://www.ninjacoders.co/assets/img/ninja0.jpeg"
              ></img>
              <img
                className={classes.image}
                src="https://www.ninjacoders.co/assets/img/ninja7.jpg"
              ></img>
              <img
                className={classes.image}
                src="https://www.ninjacoders.co/assets/img/ninja3.JPG"
              ></img>
              <img
                className={classes.image}
                src="https://www.ninjacoders.co/assets/img/ninja5.JPG"
              ></img>
            </Carousel>

            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              2019-2020
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders bu tarihlerde Kodit projesini geliştirmek için
              çalışmıştır. TÜBİTAK 1512 Girişimcilik Aşamalı Destek Programı
              kapsamında desteklenen proje kapsamında Kodit, erken çocukluk
              dönemindeki çocukların algoritmik düşünme ve problem çözme
              becerilerinin gelişmesi için tasarlanan; bunun yanında Milli
              Eğitim Bakanlığı Temel Eğitim Bölümü&#39;nün belirlediği 63
              kazanım konusunda çocukları destekleyecek olan, Türkçe içeriklere
              sahip, donanım ve yazılım içeren bir eğitim setidir.
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: "20px" }}
            >
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src="http://www.youtube.com/embed/FZuqkFSVJow?autoplay=0&origin=https://ninjacoders.co"
                frameborder="0"
              />
            </Box>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              2020 -
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders'ın misyonu, teknoloji eğitimleri yoluyla insanların
              ufuklarını açmak onlara yeni beceriler kazandırmaktır. NinjaCoders
              bu dönemde online eğitimler hazırlamakta ve kodit projesine devam
              etmektedir. Bize her zaman{" "}
              <Link href="mailto:merhaba@ninjacoders.co?subject=Size bir mesajım var.">
                merhaba@ninjacoders.co
              </Link>{" "}
              adresinden ulaşabilirsiniz.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
