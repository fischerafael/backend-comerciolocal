const express = require('express'); 
const routes = require('./src/routes'); 
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express(); 

mongoose.connect(process.env.DB_CONNECT,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },    
    () => console.log('Successfully connected to database')
);

app.use(express.json()); 
app.use(routes); 

app.listen(3333, () => console.log('Server running on port 3333'));