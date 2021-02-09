const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')
const session = require('express-session');
const bodyparser = require('body-parser');


const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
   
}

));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

//   Admin Login 
router.post('/logadmin', function (req, res, next) {
    //const mysession = req.session;
    
    const params = req.body;
    if (params.adminId != '' && params.adminPasswrd  != '') {


        connection.query(`select * 
                            from admin 
                            where adminId = ? 
                            and adminPasswrd = ?`, [params.adminId, params.adminPasswrd], function (error, results) {
            if (results.length == 1) {

                //req.session.loggedin = true;
                //req.session.adminId = params.adminId;
                console.log('Successfully');
                console.log(results)
                res.send(results);

            } else {
                res.send('Can\'t find Admin, Please enter correct Admin Id or Password');
                console.log('Can\'t find Admin, Please enter correct Admin Id or Password');
                console.log(params)
            }
            res.end();
        });
    } else {
        res.send('Please enter both Admin ID and Password!');
        res.end();
    }

});


//   Patient Login 
router.post('/logpatient', function (req, res, next) {
    //const mysession = req.session;
    const params = req.body;
    if (params.patientId != '' && params.patientPasswrd != '') {

        connection.query('select * from patient where patientId =? and patientPasswrd =?', [params.patientId, params.patientPasswrd], function (error, results, fields) {
            if (results.length > 0) {

                //req.session.loggedin = true;
                //req.session.adminId = params.adminId;
                console.log('Successfully');
                console.log(results)
                res.send(results);

            } else {
                res.send('Can\'t find Patient, Please enter correct Patient Id or Password');
                console.log('Can\'t find Patient, Please enter correct Patient Id or Password');
            }
            res.end();
        });
    } else {
        res.send('Please enter Patient ID and Password!');
        res.end();
    }

});

module.exports = router