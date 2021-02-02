const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'patientrecordsystem'
});

db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySQL Connected')
});