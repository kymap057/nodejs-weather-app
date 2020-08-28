const https = require('https');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/sai%20gon%20%20viet%20nam.json?language=vi&access_token=pk.eyJ1Ijoia3ltYXAwNTciLCJhIjoiY2tlYXVlZmR0MDJkNjJ6bjFlNTZrZ3NhaSJ9.h0amB5Iv0YF3uc06AWbdaQ&limit=1';

const request = https.request(url,(res)=>{
    let data='';
    res.on('data',(chunk)=>{
        data= data+chunk.toString();
    });
    res.on('end',()=>{
        console.log(JSON.parse(data));
    });
});

request.on('error',(err)=>{
    console.log('error: ',err);
});
request.end();