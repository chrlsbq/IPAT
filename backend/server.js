const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // use your MySQL username
    password: '',        // use your MySQL password
    database: 'schedule'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/schedule', (req, res) => {
    db.query('SELECT subject, day, time, room FROM class_schedule', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});