const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')


router.get('/home/:id', function(req, res, next) {

    connection.query('select * from patient where patientId =?', req.params.id, function(error, results, fields) {
        if (results.length > 0) {
            console.log('here');

            //req.session.loggedin = true;
            //req.session.adminId = params.adminId;
            console.log('Successfully');
            console.log(results)
            res.send(results);

        } else {
            res.send('Can\'t find Patient');
            console.log('Can\'t find Patient');
        }
        res.end();
    });
    
});

router.post('/appointment', function(req, res, next) {
    console.log('start')
    const params = req.body;

    //if(params.appDate){
    console.log('after')

        connection.query('select COUNT(*),appDate from appointment GROUP by appDate HAVING COUNT(appDate) < 5 and appDate = ?',params.appDate, function(error, results, fields) {
            if (results.length > 0) {
                console.log('here');

                if(!error){
                    connection.query('insert into appointment set ?', params, (err, rows) => {
                    if (!err) {
                    //req.session.loggedin = true;
                    //req.session.adminId = params.adminId;
                    console.log('Successfully');
                    console.log(results)
                    res.send(rows);

                    }
                    else {
                        console.log(err);
                    }

                })}
                else{
                    console.log('you can set appointment starting from tomorrow');
                    res.send('you can set appointment starting from tomorrow');

                }
            } else {
                res.send('Day Is fully booked, choose another date');
                console.log('Day Is fully booked, choose another date');
            }
            res.end();
        });
   /* }
    else{
    console.log('select date')
    res.send('select date')
    }*/
    
});

/*select COUNT(appdate),appdate,p.patientId from appointment a, patient p where p.patientId = a.patientId group by appDate, p.patientId HAVING COUNT(appdate) > 0 and p.patientId =?*/


module.exports = router