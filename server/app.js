const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT = 3001;
app.use(cors());

app.get('/', (req, res) => {
  res.send('We are up and running!');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})