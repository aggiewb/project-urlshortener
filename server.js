'use strict';

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);

app.listen(port, () => {
  console.log('Node.js listening ...');
});

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});