const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const geocode = require('./geocode/geocode');

const port = 4000;


var app = express();  //express 

app.engine('handlebars', exphbs({   //handlebars middleware
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));  //bodyparser middleware body parser
app.use(bodyParser.json());

app.get('/', (req, res) => {    //loading home page
    res.render('index');
});

app.get('/about', (req, res) => {          //loading about page
    res.render('about');
});

app.post('/showWeather', (req, res) => {
    var City = JSON.stringify(req.body.cityName, undefined, 2);

    geocode.geocodeAddress(City, (errorMsg, results) => {
        if (errorMsg) {
            console.log(errorMsg);
        } else {
            res.render('showWeather', {
                Temperature: results.Temperature,
                city: results.city,
                max_Temperature: results.max_Temperature,
                min_Temperature: results.min_Temperature
            })
        }
    });
    
});

app.listen(port, () => {
    console.log(`server is up and running at port ${port}`);
})