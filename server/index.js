//add this require to ensure .env file works
require('dotenv').config();

const express = require('express');
const app = express();
const carsRoutes = require('./routes/carsRoutes.js');
const locationRoutes = require('./routes/locationRoutes.js');
const cors = require('cors');
const { Pool, Client } = require('pg');

app.use(express.json())
app.use(cors())
app.use(express.static('client/dist'))
//if PORT exists in our enviornment, set PORT to our enviornment for us. else, set it to 3000
app.use('/api/cars', carsRoutes);
app.use('/api/location', locationRoutes)
const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=>{ console.log(`server running on PORT: ${PORT}`)})
