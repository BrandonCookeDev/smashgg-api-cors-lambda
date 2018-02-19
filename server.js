'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Require routes
const routes = require('./server/endpoints');

app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.listen('8080', () => console.log('Listening on port 8080...')); 