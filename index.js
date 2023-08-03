// Library
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Router
const web = require('./app/routers/web');

// Middleware
app.use(bodyParser.json());

//menggunakan route web
app.use('/api/', web);


const PORT = 5173;
app.listen(PORT, () => {
    console.log(`server berjalan pada https://127.0.0.1:${PORT}\n`);
});
