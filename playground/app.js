const request = require('request');

request({
    url: 'https://samples.openweathermap.org/data/2.5/weather?q=Londo, uk&appid=b6907d289e10d714a6e88b30761fae22',
    json:true
},(error,response,body)=> {
    console.log(`Longitude : ${body.coord.lon} Latitude : ${body.coord.lat}`);
}); 