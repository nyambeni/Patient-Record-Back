const express = require('express');

const bodyparser = require('body-parser');
const cors = require('cors');
const connection = require('./Config/conn');



const login = require('./routers/login');
const admin = require('./routers/admin');
const patient = require('./routers/patient');
const doctor = require('./routers/doctor');


const app = express();

app.get('createdb', (req, res) => {
    let sql = 'CREATE DATABASE patientrecordsystem'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Database created')
    });
});

//Creating the patient table
app.get('createPatient', (req, res) => {
    let sql = 'CREATE TABLE patient (Patient_ID varchar(30) NOT NULL, Patient_Name varchar(30) NOT NULL, Patient_Surname varchar(30) NOT NULL, Patient_Address varchar (150) NOT NULL,  Contact_Number varchar(10) DEFAULT NULL, Patient_Email varchar(30) DEFAULT NULL), Patient_Password varchar(30), PRIMARY KEY(Patient_ID)'
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Patient table created')
    });
});
//Creating the admin table
app.get('createAdmin', (req, res) => {
    let sql = 'CREATE TABLE admin (Admin_ID varchar(30) NOT NULL, Admin_Name varchar(30) NOT NULL, Admin_Surname varchar(30) NOT NULL, Admin_Contact_No varchar(10) NOT NULL, Admin_Email varchar(100) NOT NULL, Admin_Password varchar(150), PRIMARY KEY(Admin_ID) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Admin table created')
    });
});

//Creating the doctor table
app.get('createDoctor', (req, res) => {
    let sql = 'CREATE TABLE doctor (Doctor_ID varchar(30) NOT NULL, Doctor_Name varchar(30) NOT NULL, Doctor_Surname varchar(30) NOT NULL, Doctor_Contact_No varchar(10) NOT NULL, Doctor_Email varchar(150) NOT NULL, Doctor_Password varchar(30) NULL, PRIMARY KEY(Doctor_ID) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Admin table created')
    });
});

//Creating the appointment table
app.get('createAppointment', (req, res) => {
    let sql = 'CREATE TABLE appointment (Appointment_ID INT AUTO_INCREMENT NOT_NULL, Patient_ID varchar(30) NOT NULL, Doctor_ID varchar(30) NOT NULL, Appointment_Facility varchar(10) NOT NULL, isAttended? tinyint(1) DEFAULT NULL, isDeleted? titnyint(1) NULL, PRIMARY KEY(Appointment_ID), FOREIGN KEY(Patient_ID) REFERENCES patient(Patient_ID), FOREIGN KEY(Doctor_ID) REFERENCES doctor(Doctor_ID) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Admin table created')
    });
});

//Creating Blood Type Table
app.get('createBloodType', (req, res) => {
    let sql = 'CREATE TABLE blood_type (Blood_Type_ID INT(11) AUTO_INCREMENT NOT NULL, Blood_Type _Name varchar(30) NOT NULL , PRIMARY KEY(Blood_Type_ID)) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Appointment table created')
    });
});

//Creating Pre Existing Medical Condition Table
app.get('createPreMedicalCondition', (req, res) => {
    let sql = 'CREATE TABLE pre_existing_condition (PreExisting_Condition_ID INT(11) NOT NULL  AUTO_INCREMENT, Med_Condition_Name varchar(150) DEFAULT NULL, PRIMARY_KEY(PreExisting_Condition_ID)) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
    });
});

//Creating Test Table
app.get('createTest', (req, res) => {
    let sql = 'CREATE TABLE Test (Test_ID INT(11) NOT NULL  AUTO_INCREMENT, Test_Name varchar(150) DEFAULT NULL, Test_Type varchar(30), Description varchar(150), PRIMARY_KEY(Test_ID)) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
    });
});

//Creating Admission Table

app.get('createAdmission', (req, res) => {
    let sql = 'CREATE TABLE admission (Admission_ID INT(11) NOT NULL  AUTO_INCREMENT, Admission_Date date NOT NULL, Discharge_Date date NULL, PRIMARY_KEY(Admission_ID)) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
    });
});

//Creating Prescription Table
app.get('createPrescription', (req, res) => {
    let sql = 'CREATE TABLE prescriptipn (Prescription_ID INT(11) NOT NULL AUTO_INCREMENT, Prescription_Name varchar(150) DEFAULT NULL, Dosage INT(11) NULL, PRIMARY_KEY(Prescription_ID)) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
    });
});

//Creating the medical_record table
app.get('createMedical_Record table', (req, res) => {
    let sql = 'CREATE TABLE medical_record (Record_ID int(30) NOT NULL  AUTO_INCREMENT, Patient_ID varchar(30) NOT NULL, Doctor_ID varchar(30) NOT NULL, PreExisting_Medical_ID int(11) NOT NULL, Test_ID int(11) NULL, Prescription_ID int(11) NOT NULL, Admission_ID int(11) NOT NULL, Medical_Details_Details varchar(150), PRIMARY KEY(Record_ID), PRIMARY KEY(Patient_ID) '
    db.query(sql, err => {
        if (err) {
            throw err
        }
        //res.send('Admin table created')
    });
});


const port = 4041;
app.use(bodyparser.urlencoded({ extended: true }));

const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');
const connection = require('./Config/conn');
const { config } = require('process');
const app = express();


/*const login = require('./routers/login');
const admin = require('./routers/admin');
const patient = require('./routers/patient');
const doctor = require('./routers/doctor');
const register = require('./routers/register');*/




//const prsdatabase = require('./config/conn')

//app.use('/register', register);
const port = 4041;
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.use(cors());


app.use('/login', login);
app.use('/admin', admin);
app.use('/patient', patient);
app.use('/doctor', doctor);

app.use('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log('Server started at port ' + port)
})

app.listen(port, () => {
    console.log('Server started at port ' + port)
});