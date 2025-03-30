-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: colortree_website
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hiring_applications`
--

DROP TABLE IF EXISTS `hiring_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hiring_applications` (
  `tk_id` varchar(20) NOT NULL,
  `date_uploaded` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `uuid` varchar(20) NOT NULL,
  `appliedPosition` varchar(255) DEFAULT NULL,
  `lName` varchar(255) DEFAULT NULL,
  `fName` varchar(255) DEFAULT NULL,
  `mName` varchar(255) DEFAULT NULL,
  `permAddress` varchar(255) DEFAULT NULL,
  `permContact` varchar(255) DEFAULT NULL,
  `presAddress` varchar(255) DEFAULT NULL,
  `presContact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `bday` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `birthPlace` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `childCount` int(11) DEFAULT NULL,
  `tin` varchar(255) DEFAULT NULL,
  `sss` varchar(255) DEFAULT NULL,
  `phHealth` varchar(255) DEFAULT NULL,
  `hdmf` varchar(20) DEFAULT NULL,
  `fatherName` varchar(255) DEFAULT NULL,
  `fatherOccupation` varchar(255) DEFAULT NULL,
  `fatherAge` int(11) DEFAULT NULL,
  `motherName` varchar(255) DEFAULT NULL,
  `motherOccupation` varchar(255) DEFAULT NULL,
  `motherAge` int(11) DEFAULT NULL,
  `spouseName` varchar(255) DEFAULT NULL,
  `spouseOccupation` varchar(255) DEFAULT NULL,
  `spouseAge` int(11) DEFAULT NULL,
  `elem` varchar(255) DEFAULT NULL,
  `elemAddress` varchar(255) DEFAULT NULL,
  `elemStartYr` date DEFAULT NULL,
  `elemEndYr` date DEFAULT NULL,
  `elemAwards` varchar(255) DEFAULT NULL,
  `hs` varchar(255) DEFAULT NULL,
  `hsAddress` varchar(255) DEFAULT NULL,
  `hsStartYr` date DEFAULT NULL,
  `hsEndYr` date DEFAULT NULL,
  `hsAwards` varchar(255) DEFAULT NULL,
  `vocational` varchar(255) DEFAULT NULL,
  `vocationalAddress` varchar(255) DEFAULT NULL,
  `vocationalStartYr` date DEFAULT NULL,
  `vocationalEndYr` date DEFAULT NULL,
  `vocationalAwards` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `collegeAddress` varchar(255) DEFAULT NULL,
  `collegeStartYr` date DEFAULT NULL,
  `collegeEndYr` date DEFAULT NULL,
  `collegeAwards` varchar(255) DEFAULT NULL,
  `collegeCourse` varchar(255) DEFAULT NULL,
  `fieldStudy` varchar(255) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `dominantHand` varchar(20) DEFAULT NULL,
  `confirmOperation` varchar(255) DEFAULT NULL,
  `operationData` varchar(255) DEFAULT NULL,
  `confirmMedicine` varchar(20) DEFAULT NULL,
  `confirmPregnant` varchar(20) DEFAULT NULL,
  `pregnantMonths` date DEFAULT NULL,
  `salaryExpect` int(11) DEFAULT NULL,
  `transport` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  `cTreeDiscover` varchar(255) DEFAULT NULL,
  `workedBefore` varchar(10) DEFAULT NULL,
  `hasRelatives` varchar(10) DEFAULT NULL,
  `shiftWork` varchar(10) DEFAULT NULL,
  `physicalExam` varchar(10) DEFAULT NULL,
  `convicted` varchar(10) DEFAULT NULL,
  `emergency` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`emergency`)),
  `history` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`history`)),
  `reference` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiring_applications`
--

LOCK TABLES `hiring_applications` WRITE;
/*!40000 ALTER TABLE `hiring_applications` DISABLE KEYS */;
/*!40000 ALTER TABLE `hiring_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hiring_positions`
--

DROP TABLE IF EXISTS `hiring_positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hiring_positions` (
  `UID` varchar(255) NOT NULL,
  `pos_name` varchar(255) NOT NULL,
  `date_posted` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `job_type` varchar(255) NOT NULL,
  `job_description` varchar(255) NOT NULL,
  `responsibilities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`responsibilities`)),
  `qualifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`qualifications`)),
  `benefits` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`benefits`)),
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiring_positions`
--

LOCK TABLES `hiring_positions` WRITE;
/*!40000 ALTER TABLE `hiring_positions` DISABLE KEYS */;
INSERT INTO `hiring_positions` VALUES ('UID11223','Management Information Specialist','2024-12-02 09:28:24.319831','Contract','The Management Information Specialist will be responsible for maintaining and analyzing management information systems, ensuring data integrity, and supporting decision-making processes with accurate reporting.','[\r\n    \"Manage and optimize internal management information systems.\",\r\n    \"Analyze and interpret data to provide meaningful insights.\",\r\n    \"Collaborate with other departments to streamline data collection and reporting processes.\"\r\n]','[\r\n    \"Bachelor\'s degree in Information Technology, Business Administration, or related field.\",\r\n    \"Proven experience in managing and maintaining management information systems.\",\r\n    \"Strong analytical and problem-solving skills.\"\r\n]','[\r\n    \"Competitive salary and benefits package.\",\r\n    \"Opportunities for professional development and career growth.\",\r\n    \"Flexible working hours and the possibility of remote work.\"\r\n]'),('UID12345','Quality Assurance Manager','2024-12-02 09:28:26.950001','Full-Time','The Quality Assurance Manager will oversee the quality control processes, ensuring products meet the highest standards of quality and compliance with industry regulations.','[\r\n    \"Lead the development and implementation of quality assurance processes.\",\r\n    \"Monitor and evaluate the quality of products through audits and inspections.\",\r\n    \"Work closely with product development teams to improve product quality.\"\r\n]','[\r\n    \"Bachelor\'s degree in Engineering, Quality Management, or a related field.\",\r\n    \"Experience in quality assurance or control in a manufacturing or product environment.\",\r\n    \"Strong leadership and communication skills.\"\r\n]','[\r\n    \"Health and wellness benefits including medical, dental, and vision coverage.\",\r\n    \"Generous paid time off and holiday policy.\",\r\n    \"Retirement savings plan with company matching.\"\r\n]'),('UID45678','Security Guard','2024-12-02 01:28:35.123456','Full-Time','The Security Guard will be responsible for ensuring the safety and security of the premises, monitoring surveillance equipment, and responding to emergencies as necessary.','[\r\n    \"Monitor security cameras and patrol the premises to ensure safety.\",\r\n    \"Respond promptly to incidents and emergencies.\",\r\n    \"Maintain records of daily activities and report incidents to management.\"\r\n]','[\r\n    \"High school diploma or equivalent.\",\r\n    \"Previous security experience or relevant training is preferred.\",\r\n    \"Ability to stay alert and respond quickly to emergencies.\",\r\n    \"Good communication skills and a professional demeanor.\"\r\n]','[\r\n    \"Competitive salary and benefits.\",\r\n    \"Opportunities for advancement within the security department.\",\r\n    \"Uniforms provided and other necessary equipment.\"\r\n]'),('UID67890','Delivery Driver','2024-12-02 09:28:30.071459','Part-Time','The Delivery Driver will be responsible for transporting goods to customers, ensuring timely delivery, and providing excellent customer service during each interaction.','[\r\n    \"Deliver products to customers within the specified delivery windows.\",\r\n    \"Inspect products before delivery to ensure quality and accuracy.\",\r\n    \"Provide excellent customer service during delivery interactions.\"\r\n]','[\r\n    \"Valid driver\'s license and a clean driving record.\",\r\n    \"Ability to lift and carry heavy packages.\",\r\n    \"Strong communication and customer service skills.\"\r\n]','[\r\n    \"Flexible work schedule with part-time opportunities.\",\r\n    \"Competitive hourly rate plus tips.\",\r\n    \"Employee discounts on company products and services.\"\r\n]');
/*!40000 ALTER TABLE `hiring_positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hr_admin`
--

DROP TABLE IF EXISTS `hr_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hr_admin` (
  `uuid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hr_admin`
--

LOCK TABLES `hr_admin` WRITE;
/*!40000 ALTER TABLE `hr_admin` DISABLE KEYS */;
INSERT INTO `hr_admin` VALUES ('uid123','HR1','$2y$10$r8CF2NefRvHm2W1ukFB8Ce8qahx2JSLlvzLRZpadQcyE.luU9MEaS'),('uid456','HR2','$2y$10$ntc/8U6VB2xAdRM516CAOO41VvkfHkatr2ViRyXqRjlVuNAf/rd4G');
/*!40000 ALTER TABLE `hr_admin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-30 19:43:56
