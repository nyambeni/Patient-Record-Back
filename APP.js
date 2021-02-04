const express = require('express');

const bodyparser = require('body-parser');
const cors = require('cors');
const connection = require('./Config/conn');



const login = require('./routers/login');
const admin = require('./routers/admin');
const patient = require('./routers/patient');
const doctor = require('./routers/doctor');


const app = express();

const port = 4041;
app.use(bodyparser.urlencoded({extended : true}));

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
app.use('/patient',patient);
app.use('/doctor',doctor);

app.use('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log('Server started at port ' + port)
})

app.listen(port, () => {
    console.log('Server started at port ' + port)
});



