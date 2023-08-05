-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 27. 12:00
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `airgunwebpage`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `profilePicture` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `birthDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `image` text COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'PCP Hunter', 'https://www.justairguns.co.uk/wp-content/uploads/2021/02/r5.jpg', '2023-03-15 17:51:23', '2023-03-15 17:51:23'),
(2, 'PCP Walnut', 'https://cdn11.bigcommerce.com/s-kfs9s87krx/images/stencil/2048x2048/products/2184/5530/Aircuda__12269.1664570819.jpg?c=2', '2023-03-15 18:34:33', '2023-03-15 18:34:33'),
(3, 'PCP Sporter', 'https://www.airgunnation.com/attachments/10-1644784759-jpg.199962/', '2023-03-15 18:40:10', '2023-03-15 18:40:10'),
(4, 'Absolute powefull', 'https://www.all4shooters.com/en/shooting/rifles/fx-airguns-impact-m3-model-pcp-air-rifle/apertura.jpg', '2023-03-15 18:47:46', '2023-03-15 18:47:46');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `homeparts`
--

CREATE TABLE `homeparts` (
  `id` int(11) NOT NULL,
  `viewedproducttitle` varchar(255) DEFAULT NULL,
  `viewedproductdescription` text DEFAULT NULL,
  `viewedproductname` varchar(255) DEFAULT NULL,
  `viewedproductimage` varchar(255) DEFAULT NULL,
  `viewedproductprice` int(255) NOT NULL,
  `viewedproductpower` varchar(255) DEFAULT NULL,
  `viewedproductbarel` int(11) DEFAULT NULL,
  `viewedproductcal` int(11) DEFAULT NULL,
  `viewedproducttrigenrinf` varchar(255) DEFAULT NULL,
  `viewedproductstockinf` varchar(255) DEFAULT NULL,
  `viewedproductscopeinf` varchar(255) DEFAULT NULL,
  `tocustomerstitle` varchar(255) DEFAULT NULL,
  `tocustomersdescription` text DEFAULT NULL,
  `tocustomersimg` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `homeparts`
--

INSERT INTO `homeparts` (`id`, `viewedproducttitle`, `viewedproductdescription`, `viewedproductname`, `viewedproductimage`, `viewedproductprice`, `viewedproductpower`, `viewedproductbarel`, `viewedproductcal`, `viewedproducttrigenrinf`, `viewedproductstockinf`, `viewedproductscopeinf`, `tocustomerstitle`, `tocustomersdescription`, `tocustomersimg`, `createdAt`, `updatedAt`) VALUES
(1, 'The most powerfull and viewed', 'Whether you prefer raw speed or compact speed, Fx’s NEW 2023 crossbows are the fastest crossbows in the world. Equipped with NEW Scope Struts that provide a rock-solid foundation for optics, we’ve maximized long-range accuracy and in-the-field-durability.', 'FX Panthera', 'https://cdn.abicart.com/shop/images/196236523-origpic-7c2d59/ws11/89511/art11/h6523/Panthera_500.png', 750000, '150/200', 500, 5, 'Right hand positioned sidelever with an ambidextrous mount to be able to relocate sidelever on left side for lefthanded shooters.', '	Ambidextrous\r\nRear \r\n\r\nRecoilpad adjustable in height, angle, and length of pull. \r\n\r\nCheek Piece adjustable in height (ambidextrous mount)\r\n\r\nMount for bag rider.', '	Picatinny rail with built in 6 MIL/20 MOA angle\r\nMarked with figures on the right side for easy repositioning of optics.', 'To our customers', 'Content Management in E-Commerce If you\'re like most businesses, you probably have a lot on your plate. Loaded tasks could be either enticing or stressful. With an editorial action plan, you can gather all the essential information at a glance. You can plan significant dates and avoid getting yourself in a spin. Besides the title or topic, the editorial action plan should include the category, the target group, and a short description. It would be best to name a person responsible for the monitoring of the editorial calendar. This way, you can track the team\'s progress and implement a structured way of working. Content Formats, Localization, and Resource Planning Whether you sell on Amazon, Shopify, ePages, or in your webshop, you can afford a higher ranking! It\'s possible with search engine optimized texts and blogs. When it is time to conquer new markets, take on the internationalization of your website. With an individual marketing strategy, you will plan better how and when to pick up and convert users with multilingual texts on your site. Why Should You Have Active Content in E-commerce? Creating and sharing valuable content builds trust with potential buyers. But you need to be consistent and not stop contributing to evergreen content. If you stop it or delay the updates one day, the company could lose visitors and potential buyers. Plus, you have to get on track always. Blogs and industry-related news are emerging over the web, and you want to produce it as fast as possible.', NULL, '2023-04-26 12:43:33', '2023-04-26 12:43:33');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `homeslides`
--

CREATE TABLE `homeslides` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `homeslides`
--

INSERT INTO `homeslides` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'https://combat.cdn.shoprenter.hu/custom/combat/image/data/Banner/2023/SA-E07Banner_weboldal.jpg?v=null.1676460359', '2023-04-25 13:21:09', '2023-04-25 13:21:09'),
(2, 'https://combat.cdn.shoprenter.hu/custom/combat/image/data/Banner/2023/SA-X01_Banner_weboldal.jpg?v=null.1676460359', '2023-04-25 13:22:57', '2023-04-25 13:22:57'),
(3, 'https://combat.cdn.shoprenter.hu/custom/combat/image/data/Banner/2023/SA_E12Banner_weboldal.jpg?v=null.1676460359', '2023-04-25 13:22:57', '2023-04-25 13:22:57'),
(4, 'https://combat.cdn.shoprenter.hu/custom/combat/image/data/Banner/2022/SA-E09_Banner_weboldal.jpg?v=null.1676460359', '2023-04-25 13:23:19', '2023-04-25 13:23:19'),
(5, 'https://combat.cdn.shoprenter.hu/custom/combat/image/data/Banner/2023/SSP_Banner_weboldal.jpg?v=null.1676460359', '2023-04-25 13:23:19', '2023-04-25 13:23:19');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `picturestoproducts`
--

CREATE TABLE `picturestoproducts` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `picturestoproducts`
--

INSERT INTO `picturestoproducts` (`id`, `image`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/1.JPEG?lastmod=1679411774.1676460359', '3', '2023-04-25 12:51:24', '2023-04-25 12:51:24'),
(2, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/2.JPEG?lastmod=1679307600.1676460359', '3', '2023-04-25 12:51:24', '2023-04-25 12:51:24'),
(3, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/3.JPEG?lastmod=1679307600.1676460359', '3', '2023-04-25 12:51:41', '2023-04-25 12:51:41'),
(4, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/4.JPEG?lastmod=1679307600.1676460359', '3', '2023-04-25 12:51:41', '2023-04-25 12:51:41'),
(5, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/5.JPEG?lastmod=1679307600.1676460359', '3', '2023-04-25 12:52:12', '2023-04-25 12:52:12'),
(6, 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/6.JPEG?lastmod=1679307600.1676460359', '3', '2023-04-25 12:52:12', '2023-04-25 12:52:12');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `img` int(11) NOT NULL,
  `postText` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `like` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `posts`
--

INSERT INTO `posts` (`id`, `title`, `img`, `postText`, `username`, `like`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 'MADE IN SWEDEN', 0, 'FX Airguns was founded by Fredrik Axelsson in the small picturesque town of Mariestad, Sweden in 1999. As a passionate airgun enthusiast, he was constantly on the look for the best airgun available. When Fredrik didn’t find what he was looking for, he sta', 'FX Airguns', '251', '', '2023-03-15 13:14:16', '2023-03-15 13:14:16'),
(2, 'ABOUT THE FACTORY', 0, 'The highly skilled FX team (with Fredrik at its helm) has since its small beginnings, relentlessly introduced cutting edge technologies that has propelled the airgun industry into a new era where FX Airguns are globally considered an industry leader. As i', 'FX Airguns', '724', '', '2023-03-15 13:15:07', '2023-03-15 13:15:07');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `quantity` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `shipingleft` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `descryption` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `categoryId` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `calyber` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `brand` varchar(11) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `quantity`, `shipingleft`, `descryption`, `categoryId`, `calyber`, `weight`, `brand`, `createdAt`, `updatedAt`) VALUES
(1, 'Fx Dreamline', 'https://www.krale.shop/media/catalog/product/cache/c3077125627ae237cf5a67567c9733e4/f/x/fx-dreamline-lite-_1_.jpg', '320000', '10', '5', '\r\nAz FX Dreamline igazi forradalom a svéd gyártó repertoárjában, hiszen a puska 100%-ban kompatibilis az AR15 platform szinte minden kiegészítőjével! A puska tusa, markolata és külső kiegészítői is cserélhetőek az utángyártott, vagy akár éles kiegészítőkk', '1', 6, 2000, '104', '2023-04-14 18:35:01', '2023-04-14 18:35:01'),
(2, 'Fx wildcat', 'https://www.krale.shop/media/catalog/product/cache/c3077125627ae237cf5a67567c9733e4/f/x/fx-dreamline-lite-_1_.jpg', '350000', '2', '10', '\r\nA Svéd FX légfegyvergyár új modellje a Mark 3-as Wildcat, dimenziójit a nagytestvértől, a Bobcattől örökölte. Bullpup elrendezésű, elképesztően hosszú csővel rendelkező precíziós és vadászpuska, regulátorral ellátva. A Wildcat a korábbi verziókhoz képes', '1', 5, 3400, 'Fx', '2023-04-14 18:43:42', '2023-04-14 18:43:42'),
(3, 'Fx Panthera', 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_03_17/GB-AG-01078_Panthera600/1.JPEG?lastmod=1679411774.1676460359', '600000', '3', '45', 'Az FX Panthera a gyártó teljesen új vonalat képviselő, egyedi puskája, ami erőben teljesítményben és pontosságban is azért készült, hogy felvegye a verseny egy éles .22-es sportpuskával. Csak és kizárólag Slug lövedékekkel javasolják a használatát, formav', '1', 5, 3400, 'Fx', '2023-04-14 19:02:31', '2023-04-14 19:02:31'),
(4, 'Fx maverick', 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2023/2023_02_14/GB-AG-01043/1.JPG?lastmod=1677168247.1676460359', '460000', '4', '3', '\r\nA svéd FX Airguns leghíresebb és legelterjedtebb fegyvere az Impact, mellyel a cég kivívta az egész világ tiszteletét és figyelmét. A platform azóta számtalanszor átalakult, megújult, kisebb-nagyobb módosításokon esett át, melyek közül a Maverick a legj', '1', 5, 5000, 'Fx', '2023-04-14 19:09:47', '2023-04-14 19:09:47'),
(5, 'Fx impact M3', 'https://combat.cdn.shoprenter.hu/custom/combat/image/cache/w500h500wt1/product2022/2022_07_14/gb-ag-00998_fx_impact_m3_bl/1.jpg?lastmod=1680277209.1676460359', '735000', '4', '24', 'Az FX Airguns legújabb fegyvere hatalmas lépés a PCP puskák evolúciójában! Gyakorlatilag új fejezetet nyit a léglövészetben, hiszen nem létezik jelenleg nála fejlettebb légpuska! A svéd gyártó a Mark III.-as Impact modelleket dupla regulátoros rendszerrel', '1', 5, 3400, 'Fx', '2023-04-14 19:13:56', '2023-04-14 19:13:56');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `profilePicture` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  `name` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `birthDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `profilePicture`, `isAdmin`, `name`, `mobile`, `password`, `birthDate`, `createdAt`, `updatedAt`) VALUES
(1, 'Ptamas22', NULL, 0, 'Pásztor Tamás', '06203214565', '$2b$10$xf1Xchoidu1URi56qTs9Z.ZLSgt.5sY6i4y876jzQC34N97zuwjw.', '2001-11-08 23:00:00', '2023-04-14 16:20:55', '2023-04-14 16:20:55'),
(2, 'Ptamas22', NULL, 0, 'Pásztor Tamás', '06203214565', '$2b$10$sme4OUDQTaOVBu13.5FStO26LgTgCjagfb3Y8nCyG8EXqq5mjsTHC', '2001-11-08 23:00:00', '2023-04-14 16:24:37', '2023-04-14 16:24:37');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `homeparts`
--
ALTER TABLE `homeparts`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `homeslides`
--
ALTER TABLE `homeslides`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `picturestoproducts`
--
ALTER TABLE `picturestoproducts`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `homeparts`
--
ALTER TABLE `homeparts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `homeslides`
--
ALTER TABLE `homeslides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `picturestoproducts`
--
ALTER TABLE `picturestoproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
