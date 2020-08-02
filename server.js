'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const URL = require('./models/URL.js');
const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Node.js listening ...');
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.get("/api/hello", (req, res) => {
  res.json({greeting: 'hello API'});
});