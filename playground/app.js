const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'Address',
            describe: 'Name of city whose weather is to be known',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

    var city = argv.address;
    var apiKey = 'a008aa6283708efd9eaea105aea71740';
request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
    json:true
},(error,response,body)=> {
     if(error){
        console.log('Unable to connect to the servers');
    }else{
        console.log(`Temperature of ${body.name} = ${body.main.temp}°C`);
    }
}); 