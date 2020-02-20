const app = require('./app');
const Restaurants = require('./api/routes/restaurants');
//const Surveys = require('./api/routes/surveys');

let restaurants = new Restaurants(app);
//let surveys     = new Surveys(app);

//PORT 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening port ${port}...`) );
