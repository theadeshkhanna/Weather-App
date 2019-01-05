
const yargs = require('yargs');

const geocode = require('../geocode/geocode.js');

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

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if(errorMsg){
        console.log(errorMsg);
    }else{
        console.log(`It's currently ${results.Temperature}°C in ${results.city}.`);
    }
});