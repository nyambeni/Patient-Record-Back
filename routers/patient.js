const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')


router.get('/home/:id', function (req, res, next) {

    connection.query(`select date_format(appDate, '%e %M %Y') as appDate
                    from appointment
                    where patientId =?`, req.params.id, function (error, results, fields) {
        if (results.length > 0) {
            console.log('here');
        

            //req.session.loggedin = true;
            //req.session.adminId = params.adminId;
            console.log('Successfully');
            //console.log(results)
            console.log(results[0].patientId);
            console.log(results[0].patientName);

            res.send(results);

        } else {
            res.send('Can\'t find Patient');
            console.log('Can\'t find Patient');
        }
        res.end();
    });

});

router.post('/appointment', function (req, res, next) {
    
    const params = req.body;

    if (params.appDate != '') {
        
        ////// Date
        const date_ob = new Date();

        const date = ("0" + date_ob.getDate()).slice(-2); /// day
        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2); /// month
        const year = date_ob.getFullYear(); /// year
        const fullDate = year + "-" + month + "-" + date;
        console.log(params);
        if (params.appDate > fullDate) {
            
            connection.query('select * from appointment where appDate = ?', params.appDate, function (error, results) {
                if (results.length < 10) {

                    connection.query('SELECT count(*) FROM appointment GROUP by appDate, patientId having COUNT(appDate) = 1 and patientId =? and appDate = ?',[params.patientId, params.appDate], function (error, results) {
                        if (results.length == 1 ) {
                            console.log('you have already set an appointment on this day');
                        }
                        else {
                            params.isattend = false;
                            params.isDeleted = false;
    
                            connection.query('insert into appointment set ?', params, (err, rows) => {
                                if (!err) {
                                    //req.session.loggedin = true;
                                    //req.session.adminId = params.adminId;
                                    console.log('Successfully');
                                    console.log(params)
    
                                }
                                else {
                                    console.log(err);
                                }
    
                            })
    
                        }
                    })

                } else {
                    console.log('Day Is fully booked, choose another date');
                    return res.send({error: true, message:'Day Is fully booked, choose another date'});

                }
                res.end();
            });
        }
        else {
            console.log('cannot set a past date or current date', params.appDate, ' cannot be less than  ', fullDate);
            return res.send({error: true, message:'cannot set a past date or current date'})
        }
    }
    else {
        console.log('select date')
        return res.send({error: true, message:'select date'})
    }
});


router.get('/getPatientAppointment/:id', function(req, res, next){
    connection.query('select * from appointment where patientId =?', req.params.id, function(error, results){
        if(error){
            res.send(error)
            console.log(error);
        }
        else{
            if(results.length > 0){
                console.log('Succesfully loaded appointment');
                console.log(results);
                res.send(results);
            }

            else{
                console.log('You do not have appointment(s)');
                res.send('You do not have appointment(s)');

            }
        }
    })
});



module.exports = router