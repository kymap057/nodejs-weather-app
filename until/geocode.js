const request= require('request');
module.exports.geocode = (address, callback)=>{

    const url_location = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}%20viet%20nam.json?language=vi&access_token=pk.eyJ1Ijoia3ltYXAwNTciLCJhIjoiY2tlYXVlZmR0MDJkNjJ6bjFlNTZrZ3NhaSJ9.h0amB5Iv0YF3uc06AWbdaQ&limit=1`;
    console.log(url_location);
    request({ url: url_location, json: true }, (error, Response) => {
        if (error) {
            callback('error connect location service!',undefined);
        }
        else if(Response.body.features.length===0){
            callback('something wrong!!!',undefined);
        }
        else
            callback(undefined,{
                'latitude': Response.body.features[0].center[1],
                'longitude': Response.body.features[0].center[0],
                'location': Response.body.features[0].place_name
            });
    });
}