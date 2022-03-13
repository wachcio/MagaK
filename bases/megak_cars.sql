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
-- Baza danych: `megak_cars`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cars`
--

CREATE TABLE `cars` (
  `registration_number` varchar(8) NOT NULL COMMENT 'VIII zasób – 3 litery + 4 cyfry (od 0001 do 9999) + 1 litera – 199 980 kombinacji (np. XYZ 1234A) lub IX zasób – 3 litery + 3 cyfry (od 001 do 999) + 2 litery – 399 600 kombinacji (np. XYZ 123AC) lub I zasób – 1 litera i 2 cyfry (wyróżnik powiatu) + 2 cyfry (od 00 do 99) + litera P + 2 cyfry (od 01 do 99)\r\nII zasób – 1 litera i 2 cyfry (wyróżnik powiatu) + 2 cyfry (od 00 do 99) + litera P + 1 cyfra (od 1 do 9) + 1 litera\r\n',
  `make` varchar(48) NOT NULL COMMENT 'Fabryka Samochodów Rolniczych „Polmo” w Poznaniu - 48 znaków',
  `model` varchar(100) NOT NULL,
  `color` varchar(25) NOT NULL,
  `price` int(11) NOT NULL,
  `first_registration` date NOT NULL,
  `place_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `cars`
--

INSERT INTO `cars` (`registration_number`, `make`, `model`, `color`, `price`, `first_registration`, `place_id`) VALUES
('CRY33YG', 'Fiat', 'Tipo', 'brązowy', 140000, '2021-06-04', 2),
('CT33443', 'Opel', 'Meriva', 'czarny', 120000, '2010-05-01', 1),
('FZ54965', 'Opel', 'Insignia', 'brązowy', 45600, '2016-12-01', 2),
('WA33454', 'BMW', 'I3', 'biały', 345456, '2020-07-25', 1),
('ZSL34DD', 'VW', 'Vento', 'niebieski', 170000, '1994-12-06', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `place`
--

CREATE TABLE `place` (
  `ID` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `area` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `place`
--

INSERT INTO `place` (`ID`, `address`, `area`) VALUES
(1, 'ul. Willowa 8, Toruń', 600),
(2, 'ul. Wiejska 1, Warszawa', 10000);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`registration_number`),
  ADD KEY `place_id` (`place_id`);

--
-- Indeksy dla tabeli `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`ID`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
