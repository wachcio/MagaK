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
-- Baza danych: `school`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `courses`
--

CREATE TABLE `courses` (
  `name` varchar(20) NOT NULL,
  `start_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `courses`
--

INSERT INTO `courses` (`name`, `start_date`) VALUES
('MegaK', '2021-07-15'),
('Prawo jazdy', '2021-09-08'),
('StudiujeIT', '2020-12-02'),
('Udemy', '2021-09-14');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `courses_students`
--

CREATE TABLE `courses_students` (
  `ID` int(11) NOT NULL,
  `course_name` varchar(20) NOT NULL,
  `student_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `courses_students`
--

INSERT INTO `courses_students` (`ID`, `course_name`, `student_id`) VALUES
(4, 'MegaK', '208ba61e-594e-11ec-916b-df41a98ab8fb'),
(8, 'Prawo jazdy', '208ba61e-594e-11ec-916b-df41a98ab8fb');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `ID` varchar(36) NOT NULL,
  `name` varchar(20) NOT NULL,
  `last_name` varchar(55) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `street` varchar(74) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `students`
--

INSERT INTO `students` (`ID`, `name`, `last_name`, `age`, `street`, `createdAt`) VALUES
('208ba61e-594e-11ec-916b-df41a98ab8fb', 'Kasia', 'Iksińska', 32, 'Warszawska', '2021-12-10 14:48:22'),
('28e8c14a-5961-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('356581ed-595c-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('3f368687-595c-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('44181788-5957-11ec-916b-df41a98ab8fb', 'Marek', 'XXX', 22, 'aa', '2021-12-10 14:48:22'),
('6e7925d3-5961-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('894513e4-595f-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('9056c396-5957-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('a71d1289-5957-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('baa30952-59cd-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('c48e83bf-5962-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22'),
('d7ee0448-5957-11ec-916b-df41a98ab8fb', 'Marek', 'Kowalski', 45, 'ul. Warszawska, Pruszków', '2021-12-10 14:48:22');

--
-- Wyzwalacze `students`
--
DELIMITER $$
CREATE TRIGGER `uuid` BEFORE INSERT ON `students` FOR EACH ROW SET NEW.ID = UUID()
$$
DELIMITER ;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`name`);

--
-- Indeksy dla tabeli `courses_students`
--
ALTER TABLE `courses_students`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `course_name` (`course_name`),
  ADD KEY `student_id` (`student_id`);

--
-- Indeksy dla tabeli `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `courses_students`
--
ALTER TABLE `courses_students`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `courses_students`
--
ALTER TABLE `courses_students`
  ADD CONSTRAINT `courses_students_ibfk_1` FOREIGN KEY (`course_name`) REFERENCES `courses` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `courses_students_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
