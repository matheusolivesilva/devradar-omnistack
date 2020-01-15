const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

//WARNING!!! Replace <user> and <password> with your credentials
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-xsect.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/users/', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello oministack'});
});

app.listen(33333);