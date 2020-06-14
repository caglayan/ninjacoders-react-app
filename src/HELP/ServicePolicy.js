import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Paper, Button } from "@material-ui/core";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

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
              Kullanıcı ve Üyelik Sözleşmesi
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Lütfen sitemizi kullanmadan evvel bu sözleşmeyi dikkatlice
              okuyunuz.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              1. Taraflar
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              a) www.ninjacoders.co internet sitesinin faaliyetlerini yürüten
              Boğaziçi Üniversitesi Kuzey Kampüs Teknopark No:206 Bebek/
              Beşiktaş/ ISTANBUL adresinde mukim NinjaCoders Yazılım Ticaret ve
              Limited Şirketi (Bundan böyle NinjaCoders olarak anılacaktır).
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              b) www.ninjacoders.co internet sitesine üye olan internet
              kullanıcısı ("Üye")
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              2. Sözleşmenin Konusu
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              İşbu Sözleşme'nin konusu NinjaCoders'ın sahip olduğu internet
              sitesi www.ninjacoders.co 'dan üyenin faydalanma şartlarının
              belirlenmesidir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              3. Tarafların Hak ve Yükümlülükleri
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              3.1. Üye, www.ninjacoders.co internet sitesine üye olurken verdiği
              kişisel ve diğer sair bilgilerin kanunlar önünde doğru olduğunu,
              NinjaCoders'nın bu bilgilerin gerçeğe aykırılığı nedeniyle
              uğrayacağı tüm zararları aynen ve derhal tazmin edeceğini beyan ve
              taahhüt eder.<br></br>
              3.2. Üye, NinjaCoders tarafından kendisine verilmiş olan şifreyi
              başka kişi ya da kuruluşlara veremez, üyenin söz konusu şifreyi
              kullanma hakkı bizzat kendisine aittir. Bu sebeple doğabilecek tüm
              sorumluluk ile üçüncü kişiler veya yetkili merciler tarafından
              NinjaCoders'ya karşı ileri sürülebilecek tüm iddia ve taleplere
              karşı, NinjaCoders'nın söz konusu izinsiz kullanımdan kaynaklanan
              her türlü tazminat ve sair talep hakkı saklıdır.<br></br>
              3.3. Üye www.ninjacoders.co internet sitesini kullanırken yasal
              mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi baştan
              kabul ve taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve cezai
              yükümlülükler tamamen ve münhasıran üyeyi bağlayacaktır.<br></br>
              3.4. Üye, www.ninjacoders.co internet sitesini hiçbir şekilde kamu
              düzenini bozucu, genel ahlaka aykırı, başkalarını rahatsız ve
              taciz edici şekilde, yasalara aykırı bir amaç için, başkalarının
              fikri ve telif haklarına tecavüz edecek şekilde kullanamaz.
              Ayrıca, üye başkalarının hizmetleri kullanmasını önleyici veya
              zorlaştırıcı faaliyet (spam, virus, truva atı, vb.) ve işlemlerde
              bulunamaz.<br></br>
              3.5. www.ninjacoders.co internet sitesinde üyeler tarafından beyan
              edilen, yazılan, kullanılan fikir ve düşünceler, tamamen üyelerin
              kendi kişisel görüşleridir ve görüş sahibini bağlar. Bu görüş ve
              düşüncelerin NinjaCoders'yla hiçbir ilgi ve bağlantısı yoktur.
              NinjaCoders'nın üyenin beyan edeceği fikir ve görüşler nedeniyle
              üçüncü kişilerin uğrayabileceği zararlardan ve üçüncü kişilerin
              beyan edeceği fikir ve görüşler nedeniyle üyenin uğrayabileceği
              zararlardan dolayı herhangi bir sorumluluğu bulunmamaktadır. 3.6.
              NinjaCoders, üye verilerinin yetkisiz kişilerce okunmasından ve
              üye yazılım ve verilerine gelebilecek zararlardan dolayı sorumlu
              olmayacaktır. Üye, www.ninjacoders.co internet sitesinin
              kullanılmasından dolayı uğrayabileceği herhangi bir zarar yüzünden
              NinjaCodersdan tazminat talep etmemeyi peşinen kabul etmiştir.
              <br></br>
              3.7. Üye, diğer internet kullanıcılarının yazılımlarına ve
              verilerine izinsiz olarak ulaşmamayı veya bunları kullanmamayı
              kabul etmiştir. Aksi takdirde, bundan doğacak hukuki ve cezai
              sorumluluklar tamamen üyeye aittir.<br></br>
              3.8. İşbu üyelik sözleşmesi içerisinde sayılan maddelerden bir ya
              da birkaçını ihlal eden üye işbu ihlal nedeniyle cezai ve hukuki
              olarak şahsen sorumlu olup, NinjaCoders'yı bu ihlallerin hukuki ve
              cezai sonuçlarından ari tutacaktır. Ayrıca; işbu ihlal nedeniyle,
              olayın hukuk alanına intikal ettirilmesi halinde, NinjaCoders'nın
              üyeye karşı üyelik sözleşmesine uyulmamasından dolayı tazminat
              talebinde bulunma hakkı saklıdır.<br></br>
              3.9. NinjaCoders'nın her zaman tek taraflı olarak gerektiğinde
              üyenin üyeliğini silme, müşteriye ait dosya, belge ve bilgileri
              silme hakkı vardır. Üye işbu tasarrufu önceden kabul eder. Bu
              durumda, NinjaCoders'nın hiçbir sorumluluğu yoktur.<br></br>
              3.10. www.ninjacoders.co internet sitesi yazılım ve tasarımı
              NinjaCoders mülkiyetinde olup, bunlara ilişkin telif hakkı ve/veya
              diğer fikri mülkiyet hakları ilgili kanunlarca korunmakta olup,
              bunlar üye tarafından izinsiz kullanılamaz, iktisap edilemez ve
              değiştirilemez. Bu web sitesinde adı geçen başkaca şirketler ve
              ürünleri sahiplerinin ticari markalarıdır ve ayrıca fikri mülkiyet
              hakları kapsamında korunmaktadır. <br></br>
              3.11. NinjaCoders tarafından www.ninjacoders.co internet sitesinin
              iyileştirilmesi, geliştirilmesine yönelik olarak ve/veya yasal
              mevzuat çerçevesinde siteye erişmek için kullanılan İnternet
              servis sağlayıcısının adı ve Internet Protokol (IP) adresi, Siteye
              erişilen tarih ve saat, sitede bulunulan sırada erişilen sayfalar
              ve siteye doğrudan bağlanılmasını sağlayan Web sitesinin Internet
              adresi gibi birtakım bilgiler toplanabilir. <br></br> 3.12.
              NinjaCoders, üyenin kişisel bilgilerini yasal bir zorunluluk
              olarak istendiğinde veya (a) yasal gereklere uygun hareket etmek
              veya NinjaCodersya tebliğ edilen yasal işlemlere uymak; (b)
              NinjaCodersve NinjaCoders web sitesi ailesinin haklarını ve
              mülkiyetini korumak ve savunmak için gerekli olduğuna iyi niyetle
              kanaat getirdiği hallerde açıklayabilir.<br></br> 3.13.
              NinjaCoders web sitesinin virus ve benzeri amaçlı yazılımlardan
              arındırılmış olması için mevcut imkanlar dahilinde tedbir
              alınmıştır. Bunun yanında nihai güvenliğin sağlanması için
              kullanıcının, kendi virus koruma sistemini tedarik etmesi ve
              gerekli korunmayı sağlaması gerekmektedir. Bu bağlamda üye
              NinjaCoders web sitesi'ne girmesiyle, kendi yazılım ve işletim
              sistemlerinde oluşabilecek tüm hata ve bunların doğrudan yada
              dolaylı sonuçlarından kendisinin sorumlu olduğunu kabul etmiş
              sayılır. <br></br> 3.14. NinjaCoders, sitenin içeriğini dilediği
              zaman değiştirme, kullanıcılara sağlanan herhangi bir hizmeti
              değiştirme yada sona erdirme veya NinjaCoders web sitesinde
              kayıtlı kullanıcı bilgi ve verilerini silme hakkını saklı tutar.{" "}
              <br></br>
              3.15. NinjaCoders, üyelik sözleşmesinin koşullarını hiçbir şekil
              ve surette ön ihbara ve/veya ihtara gerek kalmaksızın her zaman
              değiştirebilir, güncelleyebilir veya iptal edebilir. Değiştirilen,
              güncellenen yada yürürlükten kaldırılan her hüküm , yayın
              tarihinde tüm üyeler bakımından hüküm ifade edecektir. <br></br>{" "}
              3.16. Taraflar, NinjaCoders'ya ait tüm bilgisayar kayıtlarının tek
              ve gerçek münhasır delil olarak, HUMK madde 287'ye uygun şekilde
              esas alınacağını ve söz konusu kayıtların bir delil sözleşmesi
              teşkil ettiği hususunu kabul ve beyan eder. <br></br>
              3.17. NinjaCoders, iş bu üyelik sözleşmesi uyarınca, üyelerinin
              kendisinde kayıtlı elektronik posta adreslerine bilgilendirme
              mailleri ve cep telefonlarına bilgilendirme SMS'leri gönderme
              yetkisine sahip olmakla beraber, üye işbu üyelik sözleşmesini
              onaylamasıyla beraber bilgilendirme maillerinin elektronik posta
              adresine ve bilgilendirme SMS'lerinin cep telefonuna
              gönderilmesini kabul etmiş sayılacaktır. 4. Sözleşmenin Feshi İşbu
              sözleşme üyenin üyeliğini iptal etmesi veya NinjaCoders tarafından
              üyeliğinin iptal edilmesine kadar yürürlükte kalacaktır.
              NinjaCoders üyenin üyelik sözleşmesinin herhangi bir hükmünü ihlal
              etmesi durumunda üyenin üyeliğini iptal ederek sözleşmeyi tek
              taraflı olarak feshedebilecektir. 5. ihtilaflarin Halli İşbu
              sözleşmeye ilişkin ihtilaflarda İstanbul Mahkemeleri ve İcra
              Daireleri yetkilidir. 6. Yürürlük Üyenin, üyelik kaydı yapması
              üyenin üyelik sözleşmesinde yer alan tüm maddeleri okuduğu ve
              üyelik sözleşmesinde yer alan maddeleri kabul ettiği anlamına
              gelir. İşbu Sözleşme üyenin üye olması anında akdedilmiş ve
              karşılıklı olarak yürürlülüğe girmiştir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              4. Sözleşmenin Feshi
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              İşbu sözleşme üyenin üyeliğini iptal etmesi veya NinjaCoders
              tarafından üyeliğinin iptal edilmesine kadar yürürlükte
              kalacaktır. NinjaCoders üyenin üyelik sözleşmesinin herhangi bir
              hükmünü ihlal etmesi durumunda üyenin üyeliğini iptal ederek
              sözleşmeyi tek taraflı olarak feshedebilecektir
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              5. İhtilaflarin Halli
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              İşbu sözleşmeye ilişkin ihtilaflarda İstanbul Mahkemeleri ve İcra
              Daireleri yetkilidir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              6. Yürürlük
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Üyenin, üyelik kaydı yapması üyenin üyelik sözleşmesinde yer alan
              tüm maddeleri okuduğu ve üyelik sözleşmesinde yer alan maddeleri
              kabul ettiği anlamına gelir. İşbu Sözleşme üyenin üye olması
              anında akdedilmiş ve karşılıklı olarak yürürlülüğe girmiştir.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
