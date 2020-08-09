'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dns = require('dns');
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

app.get('/api/hello', (req, res) => {
  res.json({greeting: 'hello API'});
});

app.post('/api/shorturl/new', (request, response) => {
  const originalUrl = request.body.original_url;
  dns.lookup(originalUrl, err => {
    if(err){
      response.json({"error":"invalid URL"});
    } else {
      new URL({original_url: originalUrl}).save()
      .then(urlObject => {
        response.json({original_url: urlObject.original_url, short_url: urlObject.short_url});
      });
    }
  });
});