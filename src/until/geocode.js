const request= require('request');
module.exports = (address, callback)=>{

    const url_location = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=5f_JyKIARfCTCwRBMS_h7xDi7okxSc3G8fKbZW9Uw5c&limited=1`;
    //console.log(url_location);
    request({ url: url_location, json: true }, (error, Response) => {
        if (error) {
            callback('error connect location service!',undefined);
        }
        else if(Response.body.items.length===0){
            callback('something wrong!!!',undefined);
        }
        else
            callback(undefined,{
                'latitude': Response.body.items[0].position.lat,
                'longitude': Response.body.items[0].position.lng,
                'location': Response.body.items[0].title
            });
    });
}