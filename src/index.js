const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const morgan  = require('morgan');
const helmet  = require('helmet');
const cors    = require('cors');

const recaptcha = require('./recaptcha');

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());



app.listen(8180, () => console.info('Poniacz listening on 8180'));
module.exports = app;
