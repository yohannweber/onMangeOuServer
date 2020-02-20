const express = require('express');
const app = express();
//const SurveysRoutes = require('./api/routes/surveys');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
//app.use('/api/surveys', SurveysRoutes);
app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());
/*
const Restaurants = require('./api/routes/restaurants');
const restaurants = new Restaurants(expressApp);
const Surveys = require('./controllers/surveys');
const surveys = new Surveys(expressApp);*/


/*
const db = require("./database/db");
db.connect( (err) => {
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    else{
        console.log('connected to database');
        //PORT 
        const port = process.env.PORT || 3000;
        expressApp.listen(port, () => console.log(`listening port ${port}...`) );
    }
});

const server = http.createServer( app );

//PORT 
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening port ${port}...`) );*/

module.exports = app;

