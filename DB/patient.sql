-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2021 at 12:34 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patientrecordsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminID` varchar(30) NOT NULL,
  `Admin_Name` varchar(30) NOT NULL,
  `Admin_Surname` varchar(30) NOT NULL,
  `Admin_Contact_No` varchar(10) NOT NULL,
  `Admin_Email` varchar(150) NOT NULL,
  `Admin_Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
  `Admission_ID` int(11) NOT NULL,
  `Admission_Date` date NOT NULL,
  `Discharge_Date` date DEFAULT NULL,
  `Facility` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `Appointment_ID` int(11) NOT NULL,
  `Patient_ID` varchar(30) NOT NULL,
  `Admin_ID` varchar(30) NOT NULL,
  `Doctor_ID` varchar(30) NOT NULL DEFAULT 'current_timestamp(6)',
  `Appointment_Facility` varchar(150) NOT NULL,
  `isAttended` tinyint(1) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blood_type`
--

CREATE TABLE `blood_type` (
  `Blood_Type_ID` int(11) NOT NULL,
  `Blood_Type _Name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `Doctor_ID` varchar(30) NOT NULL,
  `Doctor_Name` varchar(30) NOT NULL,
  `Doctor_Surname` varchar(30) NOT NULL,
  `Doc_Contact_No` varchar(10) NOT NULL,
  `Doc_Email` varchar(150) NOT NULL,
  `Doctor_Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medical_record`
--

CREATE TABLE `medical_record` (
  `Record_ID` int(11) NOT NULL,
  `Patient_ID` int(11) NOT NULL,
  `Doctor_ID` int(11) DEFAULT NULL,
  `PreExisting_Condition_ID` int(11) DEFAULT NULL,
  `Test_ID` int(11) DEFAULT NULL,
  `Prescription_ID` int(11) DEFAULT NULL,
  `Admission_ID` int(11) DEFAULT NULL,
  `Medical_Record_Details` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `Patient_ID` varchar(30) NOT NULL,
  `Patient_Name` varchar(50) NOT NULL,
  `Pateint_Surname` varchar(50) NOT NULL,
  `Patient_Address` text NOT NULL,
  `Contact_Number` varchar(10) NOT NULL,
  `Email` varchar(150) NOT NULL,
  'PatientPasswrd' varchar(100) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `Prescription_ID` int(11) NOT NULL,
  `Prescription_Name` varchar(150) DEFAULT NULL,
  `Dosage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pre_existing_condition`
--

CREATE TABLE `pre_existing_condition` (
  `PreExisting_Condition_ID` int(11) NOT NULL,
  `Med_Condition_Name` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `Test_ID` int(11) NOT NULL,
  `Test_Name` int(150) NOT NULL,
  `Test_Type` varchar(30) NOT NULL,
  `Description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`Admission_ID`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`Appointment_ID`);

--
-- Indexes for table `blood_type`
--
ALTER TABLE `blood_type`
  ADD PRIMARY KEY (`Blood_Type_ID`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`Doctor_ID`);

--
-- Indexes for table `medical_record`
--
ALTER TABLE `medical_record`
  ADD PRIMARY KEY (`Record_ID`),
  ADD UNIQUE KEY `Doctor_ID` (`Doctor_ID`),
  ADD KEY `Patient_ID` (`Patient_ID`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`Patient_ID`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`Prescription_ID`);

--
-- Indexes for table `pre_existing_condition`
--
ALTER TABLE `pre_existing_condition`
  ADD PRIMARY KEY (`PreExisting_Condition_ID`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`Test_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `Admission_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `Appointment_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blood_type`
--
ALTER TABLE `blood_type`
  MODIFY `Blood_Type_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medical_record`
--
ALTER TABLE `medical_record`
  MODIFY `Record_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prescription`
--
ALTER TABLE `prescription`
  MODIFY `Prescription_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pre_existing_condition`
--
ALTER TABLE `pre_existing_condition`
  MODIFY `PreExisting_Condition_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `Test_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
