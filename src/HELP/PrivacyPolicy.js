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
              Genel Gizlilik Politikası
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Son güncelleme: 17 Haziran 2020
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Ninjacoders.co, kullanıcıların kendisine www.ninjacoders.co adlı
              web sitesi ("Web Sitesi") veya Mobil Uygulamaları üzerinden
              elektronik ortamdan iletilen kişisel verileri üçüncü kişilerle,
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamı ve kişisel
              verilerin toplanması ile ilgili açıklanan amaçlar dışında
              paylaşmayacak, satmayacak veya kullandırmayacaktır.
              Ninjacoders.co’un <b>Kişisel Veriler Politikası </b>aşağıda yer
              almaktadır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              IP numaraları:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Sistemle ilgili sorunların tanımlanması ve Web Sitesi'nde / Mobil
              Uygulamalarda çıkabilecek sorunların ivedilikle giderilebilmesi
              için, NinjaCoders.co, gerektiğinde kullanıcıların IP adresini
              tespit etmekte ve bunu kullanmaktadır. IP adresleri, kullanıcıları
              genel (anonim) bir şekilde tanımlamak ve kapsamlı demografik bilgi
              toplamak amacıyla da kullanılabilir.
            </Typography>

            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Anonim veriler:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co tarafından talep edilen bilgiler veya kullanıcı
              tarafından sağlanan bilgiler veya Web Sitesi / Mobil Uygulama
              üzerinden yapılan işlemlerle ilgili bilgiler NinjaCoders.co ve
              işbirliği içinde olduğu kişiler tarafından (kullanıcının kimliği
              ifşa edilmeden) anonim olarak çeşitli istatistiksel
              değerlendirmeler, veri tabanı oluşturma, kişiye özel paket /
              teklifler sunma ve pazar araştırmalarında kullanılabilir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Başka sitelere bağlantı verilmesi:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co, Web Sitesi / Mobil Uygulama dahilinde başka
              sitelere link verebilir. NinjaCoders.co, link vasıtasıyla erişilen
              sitelerin gizlilik uygulamaları ve içeriklerine yönelik herhangi
              bir sorumluluk taşımamaktadır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Banka / kredi kartı bilgileri:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co, veri iletiminde 128 bit şifreleme algoritması ile
              bilgi güvenliği sağlayan SSL sertifikası ile kurumsal güvenlik
              sağlayan EV sertifikası (yeşil bar) kullanmaktadır. Kullanıcıların
              banka / kredi kartı bilgileri yalnızca satın alma işlemi sırasında
              banka veya ödeme kuruluşu tarafından kullanılır ve hiçbir şekilde
              veri tabanında kayıtlı olarak tutulmaz. NinjaCoders.co
              Kullanıcıların bir sonraki satın alma işlemlerini kolaylaştırması
              için PCI DSS sertifikalı kurumlar aracılığıyla kart bilgilerinin
              saklanabileceği bir altyapı sunmaktadır. PCI DSS standardına sahip
              ve BDDK tarafından lisanslanan Kart Saklama Hizmetleri sonucunda
              banka / kredi kartlarında bulunan bilgiler Kimlik Doğrulama
              (Authentication) ve Yetki (Authoziation) adımlarını
              kolaylaştırarak, banka / kredi kart sahiplerine güvenli ve kolay
              bir ödeme aracı kullanma imkanı sağlamaktadır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kullanıcı verilerinin açıklanabildiği durumlar:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Kullanıcıya ait kişisel veriler, ad-soyad, adres, telefon
              numarası, e-posta adresi ve kullanıcıyı tanımlamaya yönelik her
              türlü bilgiyi içermektedir. NinjaCoders.co, işbu gizlilik
              politikasında aksi belirtilmedikçe kişisel verilerden herhangi
              birini NinjaCoders.co'un işbirliği içinde olduğu ve bağlı
              şirketler hariç diğer üçüncü kişilere açıklamayacaktır. Aşağıda
              belirtilen durumlarda NinjaCoders.co, işbu gizlilik politikası
              hükümleri dışına çıkarak kullanıcılara ait bilgileri üçüncü
              kişilere açıklayabilir. Bu durumlar; Kanun, Kanun Hükmünde
              Kararname, Yönetmelik v.b. yetkili hukuki otorite tarafından
              çıkarılan ve yürürlükte olan hukuk kurallarının getirdiği
              zorunluluklara uyulmasının; NinjaCoders.co'un kullanıcılarla
              akdettiği sözleşmelerin gereklerinin yerine getirilmesi ve
              bunların uygulamaya konulmasının; Yetkili idari ve adli otorite
              tarafından usulüne göre yürütülen bir araştırma veya soruşturmanın
              yürütümü amacıyla kullanıcılarla ilgili bilgi talep edilmesinin ve
              Kullanıcıların hakları veya güvenliklerini korumak için bilgi
              verilmesinin gerekli olduğu hallerdir. NinjaCoders.co, gizli
              bilgileri kesinlikle özel ve gizli tutmayı, bunu bir sır saklama
              yükümü olarak addetmeyi ve gizliliğin sağlanması ve sürdürülmesi,
              gizli bilginin tamamının veya herhangi bir kısmının kamu alanına
              girmesini veya yetkisiz kullanımını veya üçüncü bir kişiye
              ifşasını önlemek için gerekli tüm tedbirleri almayı ve gerekli
              özeni göstermeyi taahhüt etmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Çerezlerin (cookie) durumu:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co, kullanıcılar ve kullanıcıların Web Sitesi'ni
              kullanımı hakkındaki bilgileri, kendisi veya 3. partiler
              tarafından hazırlanan teknik bir iletişim dosyasını
              (Kurabiye-Cookie) kullanarak elde edebilir. Bahsi geçen teknik
              iletişim dosyaları, ana bellekte saklanmak üzere bir web
              sitesinin, kullanıcının tarayıcısına (browser) gönderdiği küçük
              metin dosyalarıdır. Teknik iletişim dosyası, kullanıcının oturum
              bilgilerini, parolasını ve tercihlerini saklayarak oturumun açık
              kalmasını sağlar, bir sonraki ziyaretinde kullanıcıyı tanıyarak
              kullanımı kolaylaştırır. Teknik iletişim dosyası, Web Sitesi'ni
              kaç kişinin kullandığını, bir kişinin Web Sitesi'ni hangi amaçla,
              kaç kez ziyaret ettiğini ve ne kadar kaldığı hakkında
              istatistiksel bilgileri elde etmek ve kullanıcılar için özel
              tasarlanmış kullanıcı sayfalarından dinamik olarak reklam ve
              içerik üretilmesine yardımcı olur. Teknik iletişim dosyası, ana
              bellekten veya e-postasından veri veya başkaca herhangi bir
              kişisel bilgi almak için tasarlanmamıştır. Tarayıcıların pek çoğu
              başta teknik iletişim dosyasını kabul eder biçimde tasarlanmıştır,
              ancak kullanıcılar dilerse teknik iletişim dosyasının gelmemesi
              veya teknik iletişim dosyasının gönderildiğinde ikaz verilmesini
              sağlayacak biçimde ayarları değiştirebilirler.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Anket, yarışma ve benzeri hallerde toplanan veriler:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co, tarafından Web Sitesi dahilinde düzenlenen
              periyodik anketlere ve yarışmalara cevap veren kullanıcılardan
              talep edilen bilgiler, NinjaCoders.co ve işbirliği içindeki
              kişiler tarafından bu kullanıcılara doğrudan pazarlama yapmak,
              istatistiki analiz yapmak ve veri tabanı oluşturmak amacıyla
              kullanılmaktadır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              E-bülten gönderimleri ve duyurular:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              NinjaCoders.co, kullanıcılarını ekonomik gelişmeler, gündem ve
              kendi alanları hakkında bilgilendirmek amaçlı haftalık e-bülten
              gönderimi yapar. Gerekli gördüğü hallerde ya da 3. parti
              ortaklarıyla anlaşması halinde tanıtım ve bilgilendirme içerikli
              Kampanya / Teklif / Paket duyuruları gönderebilir. Kullanıcılar bu
              e-postaların kendilerine ulaşmasını e-postanın alt kısmında
              açıklandığı üzere, belirtilen linke tıklayarak engelleyebilirler.
              Herhangi bir zamanda günlük e.mail gönderim listemizden çıkmak
              isterseniz, gönderdiğimiz e.maillerin alt kısmında bulunan
              "E-bülten listemizden çıkmak için lütfen tıklayın" linkine
              tıklayarak e-bülten üyeliğinden tek tıkla kolayca çıkabilirsiniz.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel Veriler Kanunu hakkında genel bilgilendirme:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              6698 Sayılı Kişisel Verilerin Korunması Kanunu (bundan sonra KVKK
              olarak anılacaktır) 24 Mart 2016 tarihinde kabul edilmiş, 7 Nisan
              2016 tarihli 29677 sayılı Resmi Gazete’de yayınlanmıştır. KVKK’nun
              bir kısmı yayın tarihinde, bir kısmı ise 7 Ekim 2016’da yürürlüğe
              girmiştir. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında veri sorumlusu olarak siz değerli müşterilerimizin
              kişisel verilerini kaydedecek, sınıflandıracak, işleyecek,
              saklayacak, güncelleyecek ve mevzuat kuralları ve vereceğiniz izin
              verdiği durumlarda 3. Kişilere açıklayabilecek olup, söz konusu
              yasal düzenleme kapsamında karşılıklı hak ve yükümlülüklerimize
              ilişkin olarak sizleri bilgilendiriyoruz.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Veri sorumlusu sıfatıyla bilgilendirme:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Aşağıda detaylı kurumsal bilgileri yayınlanan NinjaCoders.co
              olarak, 6698 sayılı KVKK uyarınca ve Veri Sorumlusu sıfatıyla,
              kişisel verileriniz aşağıda açıklandığı çerçevede; kaydedilecek,
              saklanacak, güncellenecek, mevzuatın izin verdiği durumlarda 3.
              kişilere açıklanabilecek / devredilebilecek, sınıflandırılabilecek
              ve KVKK’da sayılan şekillerde işlenebilecektir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kanun Kapsamında Kişisel Verinin Tanımı:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Tarafınıza ait kimlik (ad, soyad, TC kimlik numarası vs.),
              iletişim, ürünlere erişim esnasında kullanılan yöntemlere ilişkin
              bilgiler (IP, mobil tel markası-modeli, tarayıcı tipi, versiyonu,
              sosyal medya bilgisi, ekranlar üzerinde gerçekleştirdiği
              hareketler vb.) gibi sizin belirleyici ya da belirlenebilir
              olmanızı sağlayacak her türlü bilgiyi ifade etmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerinizin ne şekilde işlenebileceği:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              6698 sayılı KVKK uyarınca, şirketimizle paylaştığınız kişisel
              verileriniz, tamamen veya kısmen, otomatik olarak, veyahut
              herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik
              olmayan yollarla elde edilerek, kaydedilerek, depolanarak,
              değiştirilerek, yeniden düzenlenerek; mevzuat kapsamında güvenliği
              ve gizliliği sağlanmak kaydıyla: açıklanarak, aktarılarak,
              devralınarak, elde edilebilir hâle getirilerek, sınıflandırılarak
              ya da kullanılmasını engelleyerek, kısacası veriler üzerinde
              gerçekleştirilen her türlü işleme konu olarak tarafımızdan
              işlenebilecektir. KVKK kapsamında veriler üzerinde
              gerçekleştirilen her türlü işlem “kişisel verilerin işlenmesi”
              olarak kabul edilmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerinizin işlenme amaçları ve hukuki sebepleri:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Paylaştığınız kişisel veriler, <br></br> - Müşterilerimize
              verdiğimiz hizmetlerin gereklerini, sözleşmenin ve teknolojinin
              gereklerine uygun şekilde yapabilmek, sunulan ürün ve
              hizmetlerimizi geliştirebilmek için; <br></br> - 1618 Sayılı
              Seyahat Acenteleri ve Seyahat Acenteleri Birliği Kanunu, 2920
              Sayılı Türk Sivil Havacılık Kanunu, IATA Uluslararası Hava
              Taşımacılığı Birliği Politikaları, 1999 tarihli Uluslararası
              Montreal Konvansiyonu, 6502 sayılı Tüketicinin Korunması Hakkında
              Kanun ile bu düzenlemelere dayanak yapılarak hazırlanan
              yönetmelikler / yönergeler ve diğer mevzuat kapsamında işlem
              sahibinin bilgilerini tespit için kimlik, adres ve diğer gerekli
              bilgileri kaydetmek için; <br></br> - Bankacılık, Sigortacılık,
              Sivil Havacılık ve Turizm alanında zorunlu olan elektronik ödeme,
              elektronik sözleşme veya kağıt ortamında işleme dayanak olacak tüm
              kayıt ve belgeleri düzenlemek; mevzuat gereği ve diğer
              otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme
              yükümlülüklerine uymak için; <br></br> - Kamu güvenliğine ilişkin
              hususlarda ve hukuki uyuşmazlıklarda, talep halinde ve mevzuat
              gereği savcılıklara, mahkemelere ve ilgili kamu görevlilerine
              bilgi verebilmek için;
              <br></br>6698 sayılı KVKK ve ilgili ikincil düzenlemelere uygun
              olarak işlenecektir.
            </Typography>
            <Typography
              className={classes.text1}
              style={{ marginTop: "5px" }}
              variant="subtitle2"
              component="p"
            >
              Sizlere sunacağımız her türlü ürün ve hizmetlerle ilgili olarak
              gerçekleştirilecek her türlü iş ve işlemde işlem sahibini ve
              muhatabını belirlemek üzere kimlik, adres, vergi numarası ve diğer
              bilgilerinizin kaydedilmesi, elektronik ortamda gerçekleştirilecek
              iş ve işlemlere dayanak olacak bilgi ve belgelerin düzenlemesi,
              ilgili mevzuat uyarınca adli ve idari tüm yetkili mercilerce
              (mahkemeler, TBB, BDDK, SPK, TCMB, MASAK, BTK gibi) öngörülen
              bilgi saklama, raporlama ve bilgilendirme yükümlülüklerine
              uyulması, NinjaCoders.co olarak sunulan ve talep edilen başkaca
              ürün ve hizmetlerin sunulabilmesi ve aramızdaki sözleşmelerin
              gereğinin yerine getirilmesi amaçlarıyla işlenecektir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerinizin aktarılabileceği üçüncü kişi veya kuruluşlar
              hakkında bilgilendirme:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Yukarıda belirtilen amaçlarla, şirketimizle paylaştığınız kişisel
              verilerinizin aktarılabileceği kişi / kuruluşlar; ana
              hissedarlarımız, doğrudan veya dolaylı yurt içi / yurt dışı
              iştiraklerimiz; başta konaklama firmaları, havayolu şirketleri,
              GDS (Global Dağıtım Sistemi) hizmet aracıları, kara ve deniz dahil
              ulaştırma hizmeti sunan firmalar, araç kiralama şirketleri,
              sigorta şirketleri, transfer elemanları ve bunlarla sınırlı
              olmamak üzere sunulan hizmet ile ilgili kişi ve kuruluşlar olmak
              üzere, faaliyetlerimizi yürütmek üzere ve/veya Veri İşleyen sıfatı
              ile hizmet aldığımız, iş birliği yaptığımız, program ortağı
              kuruluşları, yurtiçi / yurtdışı kuruluşlar ve diğer 3. kişilerdir.
              Ayrıca, Kişisel verileriniz ürün/hizmet karşılaştırma ve başvuru
              gerçekleştirme konularında hizmet aldığımız, işbirliği yaptığımız,
              program ortağı kurum, kuruluş, bankalara, finas kurumlarına,
              sağlayıcılara veya firmalara, verilerin bulut ortamında saklanması
              hizmeti aldığımız kişi ve kurumlara, müşterilerimize gönderdiğimiz
              iletilerin gönderilmesi konusunda anlaşmalı olduğumuz kurumlara ve
              diğer üçüncü kişilere ilgili işbirliklerimiz çerçevesinde
              aktarılabilecektir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerinizin toplanma şekli:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Kişisel verileriniz,
              <br></br> - Şirketimizin internet sitesi ve mobil
              uygulamalarındaki formlar aracılığıyla, ad, soyad, TC kimlik
              numarası, pasaport numarası, adres, telefon, iş veya özel e-posta
              adresi, yaşı, cinsiyeti, mesleği, yemek tercihleri, kullanıcı adı
              ve şifresi kullanılarak giriş yapılan sayfalardaki tercihleri,
              gerçekleştirilen işlemlerin IP kayıtları, tarayıcı tarafından
              toplanan çerez verileri ile gezinme süre ve detaylarını içeren
              veriler, konum verileri şeklinde;
              <br></br> - Satış ve pazarlama departmanı çalışanlarımız,
              acentelerimiz, bayilerimiz, kağıt üzerindeki formlar,
              kartvizitler, dijital pazarlama ve çağrı merkezi gibi kanallarımız
              aracılığıyla sözlü, yazılı veya elektronik ortamdan;
              <br></br> - Şirketimiz ile ticari ilişki kurmak, iş başvurusu
              yapmak, teklif vermek gibi amaçlarla, kartvizit, özgeçmiş (cv),
              teklif vermek ve sair yollarla kişisel verilerini paylaşan
              kişilerden alınan, fiziki veya sanal bir ortamda, yüz yüze ya da
              mesafeli, sözlü veya yazılı ya da elektronik ortamdan;
              <br></br> - Ayrıca farklı kanallardan dolaylı yoldan elde edilen,
              web sitesi, blog, yarışma, anket, oyun, kampanya ve benzeri amaçlı
              kullanılan (mikro) web sitelerinden ve sosyal medyadan elde edilen
              veriler, e-bülten okuma veya tıklama hareketleri, kamuya açık veri
              tabanlarının sunduğu veriler, sosyal medya platformları (Facebook,
              Twitter, Google, Instagram, Snapchat vs) gibi sosyal paylaşım
              sitelerinden paylaşıma açık profil ve verilerden; işlenebilmekte
              ve toplanabilmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              KVKK yürürlüğe girmeden önce elde edilen kişisel verileriniz:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              KVKK’nun yürürlük tarihi olan 7 Nisan 2016 tarihinden önce,
              üyelik, elektronik ileti izni, bilet satın alma, rezervasyon
              yapma, sigorta ürünü satın alma ve diğer şekillerde hukuka uygun
              olarak elde edilmiş olan kişisel verileriniz de bu belgede
              düzenlenen şart ve koşullara uygun olarak işlenmekte ve muhafaza
              edilmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerinizin yurtdışına aktarılması
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Kişisel verileriniz, Kişisel Veriler Kurulu tarafından akredite
              edilen ve kişisel verilerin korunması hususunda yeterli korumanın
              bulunduğu ülkelere ve/veya yeterli koruma bulunmasa bile KVKK’da
              belirtilen şartlar ve Kişisel Verileri Koruma Kurulu’nun izni
              dahilinde yurt dışına aktarılabilecektir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerin saklanması ve korunması
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              Kişisel verileriniz, şirketimiz nezdinde yer alan veri tabanında
              ve sistemlerde KVKK’nun 12. maddesi gereğince gizli olarak
              saklanacak; yasal zorunluluklar ve bu belgede belirtilen
              düzenlemeler haricinde hiçbir şekilde üçüncü kişilerle
              paylaşılmayacaktır. Şirketimiz, kişisel verilerinizin barındığı
              sistemleri ve veri tabanlarını, KVKK’nun 12. Maddesi gereği
              kişisel verilerin hukuka aykırı olarak işlenmesini önlemekle,
              yetkisiz kişilerin erişimlerini engellemekle; muhafazalarını
              sağlamak amacıyla hash, şifreleme, işlem kaydı, erişim yönetimi
              gibi yazılımsal tedbirleri ve fiziksel güvenlik önlemleri almakla
              mükelleftir. Kişisel verilerin yasal olmayan yollarla başkaları
              tarafından elde edilmesinin öğrenilmesi halinde durum derhal,
              yasal düzenlemeye uygun ve yazılı olarak Kişisel Verileri Koruma
              Kurulu’na bildirilecektir. Kişisel veriler, bu bilgileri verme
              amacı geçerli olduğu sürece saklanacaktır. İhtiyaçlarınızın
              belirlenmesi, size daha çabuk hizmet verilmesi ve sonraki hizmet
              taleplerinizin karşılanması amacıyla, bizden aldığınız hizmetten
              sonra da verileriniz tarafımızdan işlenmeye devam edilecektir.
              Veriler, yasal sürelere tabi olarak ve yasal merciler ile ilgili
              kamu otoritelerine raporlama, bilgilendirme amaçları için
              tutulması veya mevzuat uyarınca daha uzun sürelerle saklanması
              gerekiyorsa bu sınırlara uyulacaktır. Saklanan, kaydedilen
              verilerin kaybolmaması, yetkisiz kişilerin eline geçmemesi ve
              hukuka aykırı kullanımların önlenmesi için gerekli güvenlik
              önlemleri tarafımızca alınacaktır.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              Kişisel verilerin güncel ve doğru tutulması:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              KVKK’nun 4. maddesi uyarınca Şirketimizin kişisel verilerinizi
              doğru ve güncel olarak tutma yükümlülüğü bulunmaktadır. Bu
              kapsamda Şirketimizin yürürlükteki mevzuattan doğan
              yükümlülüklerini yerine getirebilmesi için Müşterilerimizin doğru
              ve güncel verilerini paylaşması veya web sitesi / mobil uygulama
              üzerinden güncellemesi gerekmektedir.
            </Typography>
            <Typography
              style={{ marginTop: "20px" }}
              className={classes.text1}
              variant="subtitle1"
              component="h3"
            >
              6698 sayılı KVKK uyarınca kişisel veri sahibinin hakları:
            </Typography>
            <Typography
              className={classes.text1}
              variant="subtitle2"
              component="p"
            >
              6698 sayılı KVKK 11.maddesi 07 Ekim 2016 tarihinde yürürlüğe
              girmiş olup ilgili madde gereğince, Kişisel Veri Sahibi’nin bu
              tarihten sonraki hakları aşağıdaki gibidir: <br></br> Kişisel Veri
              Sahibi, Şirketimize (veri sorumlusu) başvurarak kendisiyle ilgili;
              <br></br>
              1. Kişisel veri işlenip işlenmediğini öğrenme,
              <br></br>
              2. Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,{" "}
              <br></br>
              3. Kişisel verilerin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenme, <br></br>
              4. Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
              üçüncü kişileri bilme, <br></br>
              5. Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteme, <br></br>
              6. KVKK’nun 7. maddesinde öngörülen şartlar çerçevesinde kişisel
              verilerin silinmesini veya yok edilmesini isteme,<br></br>
              7. Kişisel verilerin düzeltilmesi, silinmesi, yok edilmesi halinde
              bu işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere de
              bildirilmesini isteme, <br></br>
              8. İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
              analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun
              ortaya çıkmasına itiraz etme, <br></br>
              9. Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
              zarara uğraması hâlinde zararın giderilmesini talep etme,
              haklarına sahiptir. <br></br>
              <br></br>İstanbul Ticaret Odası’nın 9843 sicil sayısında kayıtlı,
              0631129836200001 MERSİS numarasına sahip, Rumeli Hisarı Mah. Bebek
              Yolu Sok. No:2/5/108 Boğaziçi Üniversitesi Kuzey Kampüs Teknopark
              NinjaCoders 34470 Sarıyer/istanbul adresinde bulunan Ninja Coders
              Yazılım Ticaret Limited Şirketi, KVKK kapsamında Veri
              Sorumlusu’dur. NinjaCoders.co tarafından atanacak Veri Sorumlusu
              Temsilcisi, yasal altyapı sağlandığında Veri Sorumluları Sicilinde
              ve bu belgenin bulunduğu internet adresinde ilan edilecektir.
              Kişisel Veri Sahipleri, sorularını, görüşlerini veya taleplerini
              aşağıdaki iletişim kanallarından herhangi birisine yöneltebilir:{" "}
              <br></br>
              <br></br>E.posta: merhaba@ninjacoders.co <br></br>
              <br></br>
              Şirketimiz, iletilen taleplere, gerekçeli olmak ve 30 gün içinde
              cevap vermek kaydıyla olumlu/olumsuz yanıtını, yazılı veya dijital
              ortamdan verebilir. Taleplere ilişkin gerekli işlemlerin ücretsiz
              olması esastır. Ancak işlemlerin bir maliyet gerektirmesi halinde,
              Şirketimiz, ücret talebinde bulunma hakkını saklı tutar. Bu
              ücretler, Kişisel Verilerin Korunması Kurulu tarafından, Kişisel
              Verilerin korunması Kanunu’nun 13. maddesine göre belirlenen
              tarife üzerinden belirlenir
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
