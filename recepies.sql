-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 08, 2021 at 08:41 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recepies`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_recepies`
--

DROP TABLE IF EXISTS `food_recepies`;
CREATE TABLE IF NOT EXISTS `food_recepies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `photo` text NOT NULL,
  `rate` float NOT NULL DEFAULT '0',
  `author` varchar(300) NOT NULL,
  `date_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `food_recepies`
--

INSERT INTO `food_recepies` (`id`, `name`, `type`, `description`, `photo`, `rate`, `author`, `date_at`) VALUES
(22, 'Pizza capricciosa', 'Italia', 'Prava italijanska okrugla pica koju svi sanjamo da napravimo kod kuće u osnovi je tzv. Neapolitan pizza. Prilikom pravljenja ove pice, postoje određeni zahtevi i konačno sam uspela da ih pohvatam & ispoštujem. Bilo je potrebno dosta konsultacija i potrage, da bih sve skockala.\r\n\r\n\r\n\r\nItalijanski original nije specifičan samo po načinu pripreme testa, već i po posebnoj vrsti pelata koji se koristi, kao i po bivoljoj mocareli. Već je jasno da su ovo proizvodi zaštićenog geografskog porekla i da ćemo morati da koristimo naše zamene. Dakle, kad kažem “prava pica” radim to svesna objektivnih ograničenja. Ispravnije bi bilo “maksimum koji možemo da izvučemo kod kuće i u našem okruženju“.\r\n\r\nPored pelata i mocarele, ostali sastojci najbazičnije pice napuljskog tipa – čuvene pizza “Margherita” su svež bosiljak, maslinovo ulje i nekad parmezan. Čućete i za izraz Pizza Romana. Ona, za razliku od napolitanske, koja u UNESCO ima zaštićeno kulturno poreklo – nije toliko jasno definisana, niti zaštićena.\r\n\r\nNeapolitan pizza je kasnije poslužila kao osnova za mnogobrojne varijacije ukusa koje danas nalazimo u picerijama, kao i za veliku New York-style pizzu koja se služi na parče, a odomaćila se u našim pekarama i restoranima brze hrane, svakako u lošijoj i nezdravijoj izvedbi. U Italiji, pica na parče je zapravo Pizza al taglio, peče se u četvrtastom plehu – jedinu beogradsku verziju, urađenu kako treba i s originalnim prilozima, probala sam u Pizzagramu.\r\n\r\nNa kraju, kako svi volimo male “napolitanske” pice – a i meni su omiljene, danas ću se baviti njima. Naravno, onoliko koliko je u kućnim & srpskim uslovima izvodljivo i moguće.', 'DSCI0031.jpg', 4, 'nikola1', '2021-01-03'),
(23, 'Pizza', 'Italia', 'Sastojci  5 osoba\r\nsastojci za tijesto\r\n1 kg brašna tip 400 (oštro i 1/2 mekog i 1/2 oštrog)\r\n1/2 lit mlake vode\r\n1 puna žlica soli\r\n2 žličice šećera\r\n10 gr kvasca(nikako više)\r\n\r\nPriprema\r\n1.\r\nUzeti polovinu vode koju ste pripremili i pomešati sa žlicom brašna, kvascem i u to dodati 2 žličice šećera.\r\n2.\r\nDobro razmutiti, pazite da vam se brašno ne ugrudva!\r\n3.\r\nKad ste to sve lepo sjedinili i homogenizovali pomešati za ostatkom brašna i uljem\r\n4.\r\nNajvažnija stvar je miješenje tijesta,što ga više mešate ono vam je ljepše\r\n5.\r\nMesite ga toliko da počne da se odvaja od posude u kojoj se mesi, pa kad pomislite da je gotovo, mesite ga još koji minut više\r\n6.\r\nSad je tijesto za pizzu gotovo\r\n7.\r\nOstavite ga onda u pokrivenoj posudi da se digne\r\n8.\r\nU zavisnosti od temperature treba da odstoji 1-1.5 sat i onda ga dobro premesite\r\n9.\r\nSad je tijesto spremno za “buliranje”,međutim ako hoćete da vam pizza bude bolja umesite tijesto jedan dan ranije\r\n10.\r\nKugle za tijesto za pizzu prave se tako što se ruke prvo dobro namažu uljem(za ovo možete koristiti i obično ulje) i tijesto razdeli u kugle\r\n11.\r\nOdvojene kugle dobro premazati uljem i ostavite da odstoje desetak minuta\r\n12.\r\nTijesto za pizzu naravno nakon toga treba da se vrti u krug do željene veličine,što ja naravno ne znam\r\n13.\r\nJa vam lijepo dodro podmažem tepsiju uljem te rastanjim tijesto da bude svuda iste debljine sem na rubovima\r\n14.\r\nNa tijesto se sada stavlja prvo “baza”\r\n15.\r\nBazu pravite tako što pomešate pelat, malo maslinova ulja i po želji dodate soli,šećera i origana\r\n16.\r\nVAŽNO!!Na “bazu” se stavlja prvo rendani sir(i ako imate malo parmezana),te ostale sastojke po želji, te opet sir i na kraju malo origana\r\n17.\r\nZa jednu prosečnu pizzu kao onu iz pizzerije treba vam oko 300 gr testa, te dakle od ove količine možete dobiti 5 pizza\r\n18.\r\nAko mesite tijesto dan ranije(kao ja sinoć) postupak je sledeći\r\n19.\r\nAko mislite sve tijesto iskroristiti odmah sutradan onda svaku kuglu nakon što ste je dobro premesili nauljenim rukama prekriti mokrom pamučnom krpom te staviti u hladnak\r\n20.\r\nBaciti po koji put pogled je li se tijesto diglo te ga opet premesiti\r\n21.\r\nKugle koje ne mislite iskoristiti odmah, dobro nauljiti te svaku staviti u prozirnu foliju i dobro zaviti da ne ostane ni trunke zraka oko nje te staviti u hladnjak', 'Pizzacosa.png', 3.5, 'cosa', '2021-01-01'),
(24, 'Bolonjeze', 'Italia', 'špageti	1 pakovanje, 500 gr\r\nmleveno meso	200 gr\r\nparadajz pire (tomatino)	500 ml\r\ncrni luk	1 glavica\r\nulje	50 ml\r\nso, biber, origano, bosiljak, majoran	po ukusu\r\nkačkavalj, parmezan	po želji\r\nKako pripremiti\r\nObariti špagete u slanoj vodi sa malo ulja.\r\nSos: Prodinstati crni luk na ulju, malo posoliti. Dodati mleveno meso i propržiti začinjeno vegetom i soli po ukusu. Zatim dodati paradajz pire ,sačekati da proključa,pa začiniti origanom, bosiljkom i majoranom, takođe po ukusu. Skloniti sa vatre kada proključa.\r\nSlužiti špagete i sos zajedno, posuti parmezanom ili kačkavaljem, po želji. Prijatno!', 'bolonjezecosa.jpg', 4, 'cosa', '2021-01-04'),
(25, 'Susi', 'China', 'Priprema\r\n1.\r\nPirinač staviti u veliku činiju i dobro isprati, sve dok voda ne bude bistra.\r\n2.\r\nSipati pirinač u cediljku i ostaviti sat vremena da se dobro ocedi.\r\n3.\r\nPirinač zatim držati u hladnoj vodi 10-15 minuta. Nakon toka odliti vodu.\r\n4.\r\nPrebaciti pirinač u lonac sa debljim dnom i dodati 230 ml vode. Poklopiti i kuvati na jakoj vatri 5 minuta. Smanjiti vatru i kuvati poklopljeno jos desetak minuta, sve dok voda nestane. Skloniti sa šporeta i ostaviti poklopljeno da odstoji jos 10-15 minuta.\r\n5.\r\nPirinčano sirće, šećer i so mešati sve dok se šećer ne otopi. Mešavinu dodati u pirinač i lagano promešati.\r\n6.\r\nU međuvremenu, dok proces sa pirinčem traje, skuvati šargarepu i iseći na prutiće. Na isti način iseći i losos.\r\n7.\r\nKada se pirinač ohladi na temperaturu tela možete krenuti sa pravljenjem sushia.\r\n8.\r\nPoložite nori algu na bambusovu podlogu, poređajte pirinač tako što ćete ostaviti praznu traku širine 1 cm po dužoj ivici alge (ivica na kojoj će se rolanje završiti). Po sredini pirinča namažite wasabi pastu, ali bez preterivanja jer je prilično ljuta (nešto kao naš ren). Zatim poređajte štapiće šargarepe i lososa.\r\n9.\r\nSada možete krenuti sa rolanjem i to prema slobodnoj ivici bez pirinča, ujedno skupljajući i pritiščćući sadržaj tj. pirinač sa filom. Slobodnu ivicu alge malo nakvasiti vodom kako biste je prilepili za rolnicu i dobro izrolajte zajednos sa bambusovom podlogom kako bi se formirao lep valjak. Uh, baš je naporno …\r\n10.\r\nDobijene valjke secite na šest do osam delova. Servirajte sa shoyu sosom i wasabi pastom.\r\n11.\r\nPošto ste sve prethodno uradili sa puno pažnje i strpljenja, sada se osmehnite jer ste upravo napravili svoj prvi sushi :)))', 'susicosa1.jpg', 0, 'cosa', '2021-01-05'),
(27, 'Reform torta', 'Serbia', 'Sastojci za sve 4 korice:\r\n\r\n16 belanaca\r\n16 kašika kristal šećera\r\n4 kašike brašna\r\n10 gr praška za pecivo\r\n400 gr mlevenih oraha\r\nFil:\r\n\r\n16 žumanaca\r\n200 gr kristal šećera\r\n200 gr čokolade\r\n250 gr margarina ili maslaca\r\n100 gr šećera u prahu\r\nGlazura:\r\n\r\n200 gr čokolade\r\n3 kašike ulja\r\nDekoracija po želji, u videu je šlag krem od čokolade\r\n\r\n\r\nPriprema:\r\n\r\nSkratili smo postupak, pa umesto 4 kore, pečemo dve u velikom plehu od rerne, zato smo onda i sastojke za kore podelili na dva dela.\r\n\r\nOdvojiti 8 belanaca od žumanaca ( žumanca odmah stavljati u manju perpu ).\r\n\r\nUmutiti belanca uz postepeno dodavanje 8 kašika šećera dok se ne dobije jak i čvrst šne.\r\n\r\nZatim dodati 2 kašike brašna, 200 gr mlevenih oraha i 1 kašičicu ( 5 gr ) praška za pecivo.\r\n\r\nSjediniti sve žicom.\r\n\r\nObložiti pleh od rerne ( 40 x 30 cm ) papirom za pečenje pa staviti celu umučenu smesu i poravnati. Peći 15 minuta u prethodno zagrejanoj rerni na 200 stepeni, pa smanjiti na 180.\r\n\r\nPečenu koru ostaviti da se hladi pa ponoviti postupak pripreme i pečenja još jednom.\r\n\r\nZa fil umutiti žumanca sa šećerom da postanu penasta i posvetle.\r\n\r\nStaviti tu šerpu na veću šerpu u koju smo sipali “sa dva prsta” vode pa sve staviti na vatru.\r\n\r\nOd momenta kada provri voda u donjoj šerpi kuvati 12 minuta uz povremeno mešanje.\r\n\r\nZatim dodati izlomljenu čokoladu i mešati dok se ne otopi. Ukupno vreme kuvanja 17 minuta.\r\n\r\nOstaviti fil da se hladi. Omekšali margarin ili maslac umutiti sa šećerom u prahu.\r\n\r\nDodati mu ohladjen fil i sve umutiti. Ne mutiti dugo da margarin ili maslac ne bi otpustili ( omekanili previše ).\r\n\r\nObe korice staviti jednu na drugu pa preseći na pola, da se dobiju četiri.\r\n\r\nNafilovati korice čokoladnim filom . Namazati ovim filom tortu i okolo.\r\n\r\nZa glazuru otopiti čokoaldu sa uljem na pari ili u mikrotalasnoj. Ja otapam u mikrotalasnoj na srednjoj temperaturi po 15 sekindi dok se ne otopi.\r\n\r\nPreliti celu gornju koru glazurom pa tacnu u kojoj je torta prodrmati levo – desno i gore – dole da ta glazura lepo “legne”.\r\n\r\nOstaviti da se stegne pa završiti dekoraciju, mi smo to uradili šlag kremom od čokolade.\r\n\r\nTorta bi trebalo da odstoji par sati da se ukusi sjedine pa onda da se posluži.\r\n\r\nPrijatno.', 'tortacosa.jpg', 0, 'cosa', '2021-01-08');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
CREATE TABLE IF NOT EXISTS `rate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_Assessor` varchar(300) NOT NULL,
  `id_recepies` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`id`, `u_Assessor`, `id_recepies`, `rate`) VALUES
(2, 'nikola1', 23, 4),
(4, 'cosa', 23, 3),
(5, 'cosa', 24, 4),
(6, 'nikola1', 22, 5),
(7, 'cosa', 22, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(300) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `email`, `password`) VALUES
(5, 'nikola1', 'Nikola Tasic', 'nikola123@gmail.com', 'sha1$d1a4d383$1$9f2dd3546163235f9fc85f425f7dd02ca1639d48'),
(6, 'cosa', 'Vladislav Cosic', 'cosa@gmail.com', 'sha1$b22b3836$1$337c2710f152bdd6904232cf03a7938133691eda');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
