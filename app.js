const request = require('request');
require('dotenv').config();
const geocode = require('./until/geocode');
const forecast = require('./until/forecast')


const address=process.argv[2];


geocode.geocode(address, (err, data) => {


    if (err) console.log('error:', err);
    else {
        console.log('data: ', data);
        forecast.forecast(data.latitude, data.longitude, (error, res) => {
            console.log('data: ',res );
        })
    }
});




//const url ='https://api.openweathermap.org/data/2.5/onecall?lat=13.312230&lon=109.216280&exclude=hourly,daily&appid=2967e25e97c66f1a694641102be5f7b8';
// const url_wether = process.env.URL_API_WEATHER;

// request({ url: url_wether, json: true }, (err, Response) => {
//     //console.log(Response.body.current);
// });

// const address = 'phu yen';
// const url_location = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}%20viet%20nam.json?language=vi&access_token=pk.eyJ1Ijoia3ltYXAwNTciLCJhIjoiY2tlYXVlZmR0MDJkNjJ6bjFlNTZrZ3NhaSJ9.h0amB5Iv0YF3uc06AWbdaQ&limit=1`;
// console.log(url_location);
// request({ url: url_location, json: true }, (err, res) => {
//     if (err) {
//         console.log(`err: ${err}`);
//     }
//     else if(res.body.features.length==0){
//         console.log('something wrong!!');
//     }
//     else {
//         const lat = res.body.features[0].center[1];
//         const lon = res.body.features[0].center[0];
//         console.log(`lat: ${lat} lon:${lon}`);

//         const url_wether = `${process.env.URL_API_WEATHER}lat=${lat}&lon=${lon}&appid=${process.env.API_KEY_WEATHER}`;
//         console.log(url_wether);
//         request({ url: url_wether, json: true }, (err, Response) => {
//             console.log(Response.body.list[0]);
//         });
//     }
// })


// const geocode = (address, callback)=>{

//     const url_location = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}%20viet%20nam.json?language=vi&access_token=pk.eyJ1Ijoia3ltYXAwNTciLCJhIjoiY2tlYXVlZmR0MDJkNjJ6bjFlNTZrZ3NhaSJ9.h0amB5Iv0YF3uc06AWbdaQ&limit=1`;
//     console.log(url_location);
//     request({ url: url_location, json: true }, (error, Response) => {
//         if (error) {
//             callback('error connect location service!',undefined);
//         }
//         else if(Response.body.features.length===0){
//             callback('something wrong!!!',undefined);
//         }
//         else
//             callback('no err',{
//                 'lat': Response.body.features[0].center[1],
//                 'lon': Response.body.features[0].center[0],
//                 'location': Response.body.features[0].place_name
//             });
//     });
// }

