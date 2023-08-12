const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
const cMatkul = require('../controllers/cMatkul');
const cMahasiswa = require('../controllers/cMahasiswa');
const cAbsen = require('../controllers/cAbsensi');
const cList = require('../controllers/cList');

app.use('/matkul/', cMatkul);
app.use('/mahasiswa/', cMahasiswa);
app.use('/absensi/', cAbsen);
app.use('/list/', cList);
app.get('*', (req, res) => {
    res.json({
        message: 'API Presensi-Bot,sesuatu yang diciptakan karna gabut',
        developer: 'Roidev',
        fb: 'Roynaldi Rainkarnasi Sangjuara',
        github: 'https://github.com/roynaldi3301',
        email: 'prasbhara0604@gmail.com'
    })
})

module.exports = app;