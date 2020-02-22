-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 22 fév. 2020 à 10:57
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `get_out`
--

-- --------------------------------------------------------

--
-- Structure de la table `pos_human`
--

DROP TABLE IF EXISTS `pos_human`;
CREATE TABLE IF NOT EXISTS `pos_human` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `latitudeH` double NOT NULL,
  `longitudeH` double NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(30) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Déchargement des données de la table `pos_human`
--

INSERT INTO `pos_human` (`ID`, `latitudeH`, `longitudeH`, `time`, `username`, `password`) VALUES
(2, 50.797653399999994, 3.2768851, '2020-02-22 10:52:19', NULL, ''),
(3, 50.797641999999996, 3.2768298, '2020-02-22 10:53:12', NULL, ''),
(4, 50.797653399999994, 3.2768851, '2020-02-22 10:54:19', NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `pos_zombie`
--

DROP TABLE IF EXISTS `pos_zombie`;
CREATE TABLE IF NOT EXISTS `pos_zombie` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `latitudeZ` double NOT NULL,
  `longitudeZ` double NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Déchargement des données de la table `pos_zombie`
--

INSERT INTO `pos_zombie` (`ID`, `latitudeZ`, `longitudeZ`, `time`) VALUES
(1, 50.8300688878165, 3.2458965481100277, '2020-02-22 06:41:15'),
(2, 50.82289321426525, 3.250781796252804, '2020-02-22 06:41:43'),
(3, 50.819050070388684, 3.240543406293126, '2020-02-22 07:04:36'),
(4, 50.79829987796048, 3.2764712228622495, '2020-02-22 07:05:07'),
(5, 50.79988664842213, 3.278359498008734, '2020-02-22 08:33:58'),
(6, 50.79988664842213, 3.278359498008734, '2020-02-22 08:34:57'),
(7, 50.79988664842213, 3.2790354146804868, '2020-02-22 08:55:54'),
(8, 50.79988664842213, 3.2790354146804868, '2020-02-22 08:57:54'),
(9, 50.8199065414884, 3.257306701821414, '2020-02-22 09:48:16'),
(10, 50.814511788834224, 3.2667827929463167, '2020-02-22 10:10:57'),
(11, 50.81297054859093, 3.2552016959038, '2020-02-22 10:46:10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
