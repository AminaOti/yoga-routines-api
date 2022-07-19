require('dotenv').config();
const express = require('express');
const router = require('./src/routes');
//var cors = require('cors');


const app = express();
app.locals.title = 'Yoga Routines API'

//app.use(cors());

app.use('/', router);



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT} for API: ${app.locals.title}`));



// get a list of assetNames
// get buySell data for each asset