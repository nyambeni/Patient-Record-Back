const express = require('express');
const router = express.Router();
const connection = require('../Config/conn')


router.get('/home/:id', function(req, res, next) {

    connection.query('select * from doctor where doctorId =?', req.params.id, function(error, results, fields) {
        if (results.length > 0) {
            console.log('here');

            //req.session.loggedin = true;
            //req.session.adminId = params.adminId;
            console.log('Successfully');
            console.log(results)
            res.send(results);

        } else {
            res.send('Can\'t find Doctor');
            console.log('Can\'t find Doctor');
        }
        res.end();
    });
    
});

router.post('/patientrecord', function(req,res,next){
    const params = req.body;

    if(params == undefined){
        console.log('please fill the form');
        res.send('please fill the form');

    }
})


module.exports = router