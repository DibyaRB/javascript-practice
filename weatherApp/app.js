window.addEventListener('load',() =>{
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');

    let locationTimeZone = document.querySelector('.location-timezone');

    // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1a0046ff88b027d07e04ffab01334466`;
           console.log(api);

           fetch(api).then((response)=>response.json()).then((res)=> {
               console.log(res)

               const temperature= res.main;

               console.log(temperature);

               //Set DOM Elements from API

               temperatureDegree.textContent= temperature.temp;
               temperatureDescription.textContent = res.weather[0].description;
               locationTimeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
            
            });
        });
    }
    // else{
    //     h1.textContent= "Hey this is not working";
    // }
});