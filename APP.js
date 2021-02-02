const express = require('express');
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

app.listen(port, () => {
    console.log('Server started at port ' + port)
});


