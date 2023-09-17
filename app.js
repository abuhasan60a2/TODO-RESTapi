const express = require('express')
const TodoRoute = require('./routes/TodoRoute')
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use('/api/v1/todo', TodoRoute)
module.exports = app;