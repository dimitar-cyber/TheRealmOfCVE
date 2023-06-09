-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2023 at 12:01 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cve`
--

-- --------------------------------------------------------

--
-- Table structure for table `cve`
--

CREATE TABLE `cve` (
  `id` int(11) NOT NULL,
  `cve` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `date_of_add` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cve`
--

INSERT INTO `cve` (`id`, `cve`, `url`, `date_of_add`) VALUES
(20, 'WordPress Theme Workreap', 'https://www.exploit-db.com/download/51510', '2023-06-08'),
(21, 'Thruk Monitoring WebShell', 'https://www.exploit-db.com/download/51509', '2023-06-07'),
(22, 'USB Flash Drives Control 4.1.0.69', 'https://www.exploit-db.com/download/51508', '2023-06-07'),
(23, 'Tree Page View Plugin 1.6.7 ', 'https://www.exploit-db.com/download/51507', '2023-06-07'),
(25, 'File Manager Advanced Shortcode 69.420', 'https://www.exploit-db.com/download/51505', '2023-06-03'),
(28, 'Barebones CMS v2.0.2 TFG', 'https://www.exploit-db.com/download/51502', '2023-06-20'),
(30, 'Total CMS 1.7.4 - Remote Code Execution (RCE) / RRR', 'https://www.exploit-db.com/download/51500', '2023-06-04'),
(31, 'MotoCMS Version 3.4.3', 'https://www.exploit-db.com/download/51499', '2023-06-02'),
(32, 'CiviCRM 5.59.alpha1', 'https://www.exploit-db.com/download/51478', '2023-05-30'),
(33, 'Smart School v1.0 - SQL Injection', 'https://www.exploit-db.com/download/51472', '2023-06-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cve`
--
ALTER TABLE `cve`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cve`
--
ALTER TABLE `cve`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
