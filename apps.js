const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


//create an express instance
const app = express();


//const dbURI = 'mongodb + srv://Walnut654:<password>@cluster0.e7v3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//mongoDB connection URI, remember to change 'password' with your password and myFirstDatabase with your database name
const dbURI = 'mongodb+srv://Joel:123@full-stack-web-applicat.fqa1a2h.mongodb.net/';

//using mongoose to connect to MongoDB, the last two option to avoid deprecation warnings.
mongoose.connect(dbURI, { useNewUriParser: true, useUnifiedToplolgy: true })
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));



//register view engine
app.set('view engine', 'ejs');//it uses the default 'views' folder
//app.set('views', 'myviews');)// to set a different 'views' folder

//listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
