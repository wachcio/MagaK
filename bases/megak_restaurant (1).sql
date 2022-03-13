-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 13 Mar 2022, 22:13
-- Wersja serwera: 10.5.12-MariaDB-0+deb11u1
-- Wersja PHP: 8.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_restaurant`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `addresses`
--

CREATE TABLE `addresses` (
  `id` varchar(36) NOT NULL,
  `street` varchar(93) NOT NULL,
  `house_number` varchar(8) NOT NULL COMMENT 'format nnnl/nnn (n-numer, l-litera)',
  `post_code` varchar(6) NOT NULL,
  `city` varchar(40) NOT NULL,
  `province` varchar(20) NOT NULL,
  `country` varchar(56) NOT NULL COMMENT 'https://pl.history-hub.com/jaka-jest-najdluzsza-nazwa-kraju-na-swiecie'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='https://eteryt.stat.gov.pl/eTeryt/rejestr_teryt/aktualnosci ';

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `guests`
--

CREATE TABLE `guests` (
  `id` varchar(36) NOT NULL,
  `first_name` varchar(81) NOT NULL COMMENT 'na świecie najdłuższe imię 81 w Polsce 13',
  `last_name` varchar(94) NOT NULL COMMENT 'Brytyjczyk o nazwisku - Captain Fantastic Faster Than Superman Spiderman Batman Wolverine Hulk And The Flash Combined',
  `email` varchar(345) NOT NULL COMMENT 'najdłuższy 345 znaków contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longest-email-address-known-to-man-but-to-be-honest.this-is-such-a-stupidly-long-sub-domain-it-could-go-on-forever.pacraig.com'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `languages`
--

CREATE TABLE `languages` (
  `code` varchar(7) NOT NULL COMMENT 'http://www.loc.gov/standards/iso639-2/php/English_list.php ISO 639-2',
  `english_name` int(58) NOT NULL COMMENT 'ISO 639-2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `restaurants`
--

CREATE TABLE `restaurants` (
  `id` varchar(36) NOT NULL,
  `name` varchar(40) NOT NULL,
  `desription_id` varchar(36) NOT NULL,
  `adress_id` varchar(36) NOT NULL,
  `color_RAL` varchar(13) NOT NULL COMMENT 'https://pl.wikipedia.org/wiki/RAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `restaurants_descriptions`
--

CREATE TABLE `restaurants_descriptions` (
  `id` varchar(36) NOT NULL,
  `language_code` varchar(7) NOT NULL,
  `description` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `restaurants_guests`
--

CREATE TABLE `restaurants_guests` (
  `id` varchar(36) NOT NULL,
  `restaurant_id` varchar(36) NOT NULL,
  `guest_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`code`);

--
-- Indeksy dla tabeli `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `desription_id` (`desription_id`),
  ADD KEY `adress_id` (`adress_id`);

--
-- Indeksy dla tabeli `restaurants_descriptions`
--
ALTER TABLE `restaurants_descriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `language_code` (`language_code`);

--
-- Indeksy dla tabeli `restaurants_guests`
--
ALTER TABLE `restaurants_guests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `guest_id` (`guest_id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`id`) REFERENCES `restaurants` (`adress_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `guests`
--
ALTER TABLE `guests`
  ADD CONSTRAINT `guests_ibfk_1` FOREIGN KEY (`id`) REFERENCES `restaurants_guests` (`guest_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `languages`
--
ALTER TABLE `languages`
  ADD CONSTRAINT `languages_ibfk_1` FOREIGN KEY (`code`) REFERENCES `restaurants_descriptions` (`language_code`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_ibfk_1` FOREIGN KEY (`id`) REFERENCES `restaurants_guests` (`restaurant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `restaurants_descriptions`
--
ALTER TABLE `restaurants_descriptions`
  ADD CONSTRAINT `restaurants_descriptions_ibfk_1` FOREIGN KEY (`id`) REFERENCES `restaurants` (`desription_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
