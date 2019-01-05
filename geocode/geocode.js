const request = require('request');

var geocodeAddress = (address, callback) => {
    var apiKey = 'a008aa6283708efd9eaea105aea71740';
    request({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${apiKey}`,
        json:true
    },(error,response,body)=> {
         if(error){
            callback('Unable to connect to the servers');
        }else{
            callback(undefined,{
                Temperature: body.main.temp,
                city: body.name
            });           
        }
    }); 
    
};

module.exports.geocodeAddress = geocodeAddress;