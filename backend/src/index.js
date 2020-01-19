const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();


//WARNING!!! Replace <user> and <password> with your credentials
mongoose.connect('mongodb+srv://matheus:root@cluster0-xsect.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(33333);