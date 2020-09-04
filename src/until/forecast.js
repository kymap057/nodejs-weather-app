const request = require('request');


module.exports = (latitude, longitude, callback) => {
    const key_api='2967e25e97c66f1a694641102be5f7b8';
    const url_wether = `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=${key_api}&lang=vi`;
    console.log(url_wether);
    request({ url: url_wether, json: true }, (err, { body }) => {
        if (err) callback('fail connected api!', undefined);
        else if (body.cod === '400') callback('wrong position!', undefined)
        else callback(undefined, {
            'temps': {
                'temp': body.list[0].main.temp - 273.15,
                'description': 'độ C'
            },
            'wind': body.list[0].wind.speed,
            'rain': body.list[0].rain,
            'description': body.list[0].weather[0].description,
            'icon': body.list[0].weather[0].icon,
            'position': {
                'name': body.list[0].name,
                'country': body.list[0].sys.country
            }
        })
    });
}