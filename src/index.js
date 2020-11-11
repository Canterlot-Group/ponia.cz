const express = require('express');
const mongodb = require('mongodb').MongoClient;
const morgan  = require('morgan');
const helmet  = require('helmet');
const cors    = require('cors');

const app = express();
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());



app.listen(8180, () => console.info('Poniacz listening on 8180'));
