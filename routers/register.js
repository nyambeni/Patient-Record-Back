const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');
const connection = require('./Config/conn');

//Registering a patient
var pID = "";
var pName = "";
var pSurname = "";
var pAddress = "";
var pEmail = "";
var pNumber = "";
var pGender = "";
app.get('patient01', (req, res) => {
    let post = { Patient_ID: pID, Patient_Name: pName, Patient_Surname: pSurname, Patient_Address: pAddress, Patient_Email: pEmail, Contact_Number: pNumber, Gender: pGender }
    let sql = 'INSERT INTO patient SET ?'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err
        }
        //res.send('Patient added')
    });
});