require('dotenv').config();

const express = require('express');
const mongosse = require('mongoose');
const routes = require('./routes');

const app = express();

const dataBaseConnection = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-tuars.mongodb.net/week10?retryWrites=true&w=majority`;
mongosse.connect(dataBaseConnection, { 
    useNewUrlParser: true, // Fix: DeprecationWarning: current URL string parser is deprecated
    useUnifiedTopology: true, // Fix: DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
    useCreateIndex: true, // Fix: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
});

app.use(express.json());
app.use(routes);

app.listen(3333);