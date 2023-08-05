-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 17. 20:47
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `username` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
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
  `name` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
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
-- Tábla szerkezet ehhez a táblához `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` int(11) NOT NULL,
  `postText` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `like` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
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
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `shipingleft` varchar(255) DEFAULT NULL,
  `descryption` varchar(255) DEFAULT NULL,
  `categoryId` varchar(255) DEFAULT NULL,
  `calyber` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `brand` varchar(11) DEFAULT NULL,
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
  `username` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
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
