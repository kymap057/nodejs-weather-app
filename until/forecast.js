const request = require('request');
require('dotenv').config();

module.exports.forecast = (latitude, longitude, callback) => {
    const url_wether = `${process.env.URL_API_WEATHER}lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY_WEATHER}`;
    console.log(url_wether);
    request({ url: url_wether, json: true }, (err, {body}) => {
      if(err) callback('fail connected api!',undefined);
      else if(body.cod==='400') callback('wrong position!',undefined)
      else callback(undefined,{
          'temp': body.list[0].main.temp,
          'wind': body.list[0].wind.speed,
          'rain': body.list[0].rain,
          'description': body.list[0].weather[0].description,
          'icon':  body.list[0].weather[0].icon,
          'position':{
              'name':body.list[0].name,
              'country': body.list[0].sys.country
          }
      })
    });
}