var input= document.querySelector('input'),
    frm = document.querySelector('form'),
    info= document.querySelector('.inf-weather'),
    iconWeb= document.querySelector('#icon-web'),
    notification= document.createElement('p'),
    temp = document.createElement('p'), 
    detail = document.createElement('p')
    image= document.createElement('img');


notification.className='notification';
info.appendChild(notification);
notification.textContent='loading...';

temp.className='temp';
detail.className='description';

frm.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    fetch(`http://localhost:3001/weather-app?address=${input.value}`)
    .then((response) => {
        response.json().then((data) => {
            if (data.error) {
                notification.textContent=data.error;
                info.removeChild(image);
                info.removeChild(temp);
                info.removeChild(detail);
            }
            else {
                // weatherInf.location=data.location;
                // weatherInf.temp=data.dataWeather.temps.temp;
                // weatherInf.description=data.dataWeather.description;
                // weatherInf.icon=data.dataWeather.icon; 
                //notification.textContent= JSON.stringify(data);
                info.innerHTML='';
                
                image.src=`./img/icons/${data.dataWeather.icon}.png`;
                temp.textContent= `${data.dataWeather.temps.temp.toFixed(2)}°C`;
                notification.textContent= data.location;
                detail.textContent= data.dataWeather.description;

                info.appendChild(image)
                info.appendChild(temp);
                info.appendChild(notification);
                info.appendChild(detail);
                iconWeb.href=`./img/icons/${data.dataWeather.icon}.png`;
            }
        })
    });
});
