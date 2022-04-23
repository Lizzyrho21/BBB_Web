const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT;
app.use(cors());


// mongoose connection
const mongoose = require('mongoose'); // pull in mongoose 
mongoose.connect(process.env.MONGODB_URL); // conenct to mongodb using mongoose
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});


// This is the route Jerrod can call to practice with react
app.get('/home', (req, res) => {
    res.send('We are up and running!');
})

// app.get('/allbracelets', (req, res) => {
//  // Code our braclet data here
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);  
})