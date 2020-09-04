const express = require('express');
const path= require('path');
const app = express();
const request = require('request');
const geocode= require('./until/geocode');
const forecast = require('./until/forecast');

const publicDirectoryPath= path.join(__dirname,'../public');

//set định dang views
app.set('view engine','ejs');
//đường dẫn đến thư mục
app.set('views','./views');
//cấu hình public
app.use(express.static(publicDirectoryPath));
//vị trí đồng bộ template
var engine = require('ejs-locals');
app.engine('ejs',engine);


//request sever
app.get('/weather-app',(req,res)=>{
  
    if(!req.query.address){
       return res.send({
           err:'you must provide an address...!!',
           messenger: 400
       })
    }
    geocode(req.query.address,(err,data)=>{
        if(err) return res.send({
            error:'unable to find location..!!',
            messenger:400
        });
        forecast(data.latitude,data.longitude,(error,dataWeather)=>{
            if(error) res.send({error});
            res.send({
                dataWeather,
                location: data.location,
                messenger: 200
            });
        });

    });
});

//client
app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Trang Chủ',
        content: 'trang chủ node js...!!'
    })
});

app.get('/about',(req,res)=>{
    let lists=[
        {name: 'Anh a', age: 20},
        {name: 'Anh b', age: 20},
        {name: 'Anh c', age: 20},
        {name: 'Anh d', age: 20},
    ]
    res.render('about',{
        title: 'About',
        content: 'trang about node js',
        lists: lists
    })
}); 
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        content:' trang giúp đỡ...!!'
    })
});
app.get('/weather',(rep,res)=>{
    res.render('weather',{
        title:'Weather-App',
    })
});
app.get('*',(rep,res)=>{
    res.render('not-found',{
        title:'404',
    })
});


app.listen(3001,()=>{
    console.log('app listen post 3001....!');
});