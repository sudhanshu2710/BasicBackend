const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const studentRoute = require('./routes/studentRoutes');
const subjectRoute = require('./routes/subjectRoutes');
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());

app.use('/student', studentRoute);
app.use('/subject', subjectRoute);
module.exports = app;
