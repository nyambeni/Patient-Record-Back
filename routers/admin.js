const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')

router.get('/viewAllAppointment', function (req, res, next) {

    connection.query('SELECT p.patientId, patientSurname, appDate, patientName from patient p, appointment a where p.patientId = a.patientId and isDeleted = false and isAttend = false', function (error, results) {
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

router.delete('/deleteAppointment/:id', function (req, res, next){
    connection.query('delete from appointment where appId =?',req.params.id, function(error,results){
        if(!error){
            console.log('Appointment with ID ',req.params.id,' is Canceled');
            res.send(`Appointment with ID ${[req.params.id]} is Canceled`);
        }
        else{
            console.log(error);
            res.send(error);
        }
    })
})

router.put('/updateAppointment', function (req, res, next){

    const doctor = req.body.doctorId;
    const isattend = req.body.isAttend;
    const appId = req.body.appId;



    connection.query('update appointment set doctorId=?, isAttend=? where appId =?',[doctor,isattend,appId], function(error,results){
        if(!error){
            console.log('Appointment with ID ',appId,' is Updated');
            res.send(`Appointment with ID ${[appId]} is Updated`);
            console.log(results)
        }
        else{
            console.log(error);
            res.send(error);
        }
    })
})






module.exports = router