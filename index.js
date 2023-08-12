// Library
const express = require('express');
// const cors = require('cors')
const app = express();

// Router
const web = require('./app/routers/web');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// app.use(cors);

//menggunakan route web
app.use('/api/', web);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server berjalan pada https://127.0.0.1:${PORT}\n`);
});
