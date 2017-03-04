const https = require('https');
const api = require('./api.json');

function printWeather(weather) {
  const message = `Current temperature in ${weather.location.city} is ${weather.current_observation.temp_f}F`;
  console.log(message);
}

function get(query) {
  const request = https.get('https://api.wunderground.com/api/${api.key}/conditions/q/${query}.json', response => {
   if (response.statusCode == 200)
    let body = "";
    response.on('data', chunk => {
      body += chunk;
    });

    response.on('end', () => {
      try{
        const weather = JSON.parse(body);


      }
    });
  });
}

module.exports.get = get;
