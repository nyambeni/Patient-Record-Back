const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')

router.get('/viewAllAppointment', function (req, res, next) {

    connection.query(`SELECT p.patientId, patientSurname, date_format(appDate, '%e %M %Y') as appDate, patientName 
                    from patient p, appointment a 
                    where p.patientId = a.patientId 
                    and isDeleted = false 
                    and isAttend = false`, function (error, results) {
        if (results.length > 0) {
            console.log(results);
            res.send(results);

        } else {
            res.send('NO Appointments Has Been Made So Far');
            console.log('NO Appointments Has Been Made So Far');
        }
        res.end();
    });

});

/*
router.delete('/deleteAppointment/:id', function (req, res, next) {
    connection.query('delete from appointment where appId =?', req.params.id, function (error) {
        if (!error) {
            console.log('Appointment with ID ', req.params.id, ' is Canceled');
            res.send(`Appointment is Canceled`);
        }
        else {
            console.log(error);
            res.send(error);
        }
    })
})
*/
router.put('/updateAppointment', function (req, res, next) {

    const params = req.body;

    connection.query('update appointment set isDeleted=?, isAttend=?, appLocation=? where appId =?', [params.isDeleted, params.isAttend, params.appLocation, params.appId], function (error, results) {
        if (!error) {

            console.log('Appointment with ID ', params.appId, ' is Updated');
            res.send(`Appointment with ID ${[params.appId]} is Updated`);
            console.log(params)
        }
        else {
            console.log(error);
            res.send(error);
        }
    })
})

module.exports = router