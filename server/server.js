'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Require routes
const routes = require('./lib/endpoints');

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen('8081', () => console.log('Listening on port 8081...')); 