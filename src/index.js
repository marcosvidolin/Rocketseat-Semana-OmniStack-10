const express = require('express');
const mongosse = require('mongoose');
const routes = require('./routes');

const app = express();

mongosse.connect('mongodb+srv://omnistack:omnistack@cluster0-tuars.mongodb.net/week10?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);