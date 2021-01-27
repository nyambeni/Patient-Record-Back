const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.send('welcome to admin')
    console.log('welcome admin')
});

module.exports = router