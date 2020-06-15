import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Link,
} from "@material-ui/core";

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
    marginTop: theme.spacing(8),
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.Container} maxWidth="md">
        <Grid container className={classes.Body} justify="center" spacing={10}>
          <Grid item xs={12}>
            <Typography
              className={classes.text1}
              variant="h5"
              component="h5"
              align="center"
            >
              Sıkça Sorulan Sorular (SSS)
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders'ın misyonu, teknoloji eğitimleri yoluyla insanların
              ufuklarını açmak onlara yeni beceriler kazandırmaktır. Türkçe
              plaformumuz ile alanında uzman eğitmenler tarafından hazırlanan
              yüzlerce eğitimin bulunduğu bir kütüphane sunar.Eğitmenlerin her
              gün yeni içerik eklediği son kurslarımızı düzenli olarak takip
              etmek size avantaj sağlayacaktır. Sonsuz öğrenme fırsatları
              sunuyoruz! Aşağıda NinjaCoders ile ilgili aldığımız sık sorulan
              soruların bazıları için cevaplar yer almaktadır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              NinjaCoders kursları hangi öğelerden oluşur?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders kursları eğitmenlere aittir; eğitmenler tarafından
              oluşturulur ve yönetilir. Eğitmen tarafından yüklenen videoları,
              slaytları, metni ve ek kaynakları içerebilen dersler her bir
              NinjaCoders kursunun temelini oluşturur. Eğitmenler ayrıca
              öğrencilerin öğrenim deneyimine katkıda bulunan bir yöntem olarak
              testler, pratik testleri, ödevler ve kodlama egzersizleri
              ekleyebilirler. Bu dersler ve özelliklerin kurs kontrol panelinde
              nasıl göründüğünü öğrenmek için buradan ders simgesi kılavuzuna
              göz atın.
            </Typography>

            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              NinjaCoders kursuna nasıl kaydolurum?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders kursları tamamen talep üzerinedir. Yani ilginizi çeken
              ve kendinize uygun olan hızda öğrenebileceğiniz kurslara kayıt
              olabilirsiniz. Kursa dilediğiniz zaman başlayabilirsiniz; kursu
              tamamlamanız için bir son tarih yoktur. NinjaCoders kurslarına
              masaüstü bilgisayar, dizüstü bilgisayar ve Android veya iOS mobil
              uygulamamız gibi çeşitli cihazlardan ve platformlardan
              erişebilirsiniz. NinjaCoders 'nin platformları ve özelliklerine
              ilişkin detaylı bilgileri buradan inceleyebilirsiniz. Bir kursa
              kaydolduktan sonra, NinjaCoders hesabınızda oturum açıp onay
              e-postasında gönderilen kurs bağlantısına tıklayarak kursa
              erişebilirsiniz. Oturum açıp Kurslarım sayfasına giderek de kursa
              başlayabilirsiniz. NinjaCoders hesabınızda oturum açma adımları
              için lütfen buraya tıklayın.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              NinjaCoders kursunu ne kadar sürede tamamlamam gerekir?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Yukarıda belirtildiği gibi kursa başlamak veya kursu tamamlamak
              için bir son tarih bulunmamaktadır. Bir kursu tamamladıktan sonra,
              hesabınızın sorunsuz durumda olması ve NinjaCoders 'nin kurs
              lisansına sahip olmaya devam etmesi koşuluyla kursa erişim
              sağlamaya devam edebilirsiniz. Ömür Boyu Erişim politikası
              hakkında daha fazla bilgi için lütfen buraya tıklayın.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Bir kursu önizlemem mümkün mü?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Evet! Bir kursun size uygun olup olmadığından emin değilseniz bir
              ücretsiz önizleme başlatabilir ve eğitmenin seçtiği birkaç dersi
              izleyebilirsiniz. Bir kursu önizleme adımlarını ve bu konudaki
              önemli bilgileri incelemek için lütfen buraya tıklayın.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Satın aldığım premium üyeliği beğenmezsem ne olur?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Katıldığınız kurslardan memnun kalmanızı istiyoruz. Bu nedenle bir
              kurstan memnun kalmazsanız kursu satın aldıktan sonraki 30 gün
              içerisinde tam geri ödeme talep edebilirsiniz. Geri ödeme için
              lütfen bize{" "}
              <Link href="mailto:merhaba@ninjacoders.co?subject=Size bir mesajım var.">
                buradan
              </Link>{" "}
              mail atın. Uzmanlarımız size adımlar konusunda geri dönüş
              yapacaktır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Hala sorunuz mu var?
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders ile ilgili başka sorularınız varsa{" "}
              <Link href="mailto:merhaba@ninjacoders.co?subject=Size bir mesajım var.">
                buraya
              </Link>{" "}
              tıklayarak destek ekibi ile iletişime geçebilirsiniz.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
