let data;


const inputBox= document.getElementById("inputBox");
const countryName= document.getElementById("countryName");

const statenName= document.getElementById("stateName");

// const localTime = document.getElementById("localtime");

const cityName= document.getElementById("cityName");
const humidity= document.getElementById("humidity");
const windSpeed= document.getElementById("windSpeed");
const temperature= document.getElementById("temperature");
const logoImage= document.getElementById("logoImage");
const weatherStatus= document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter The City Name: ");
        return;
    }


const city = inputBox.value;
     

//fetch details

const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?Key=70aaed8300204f92b62141403231007&q=${city}`
    );

     const orgData = await fetchData.json();
     data = orgData;
     console.log(data);

     // Diplaying the data in html

     countryName.innerHTML = data.location.country;
     statenName.innerHTML = data.location.region;
    //  localTime.innerHTML = data.location.localtime;
     cityName.innerHTML = data.location.name;
     humidity.innerHTML = data.current.condition.humidity;
     windSpeed.innerHTML = data.current.wind_kph;
     logoImage.src = data.current.condition.icon;
     weatherStatus.innerHTML = data.current.condition.text;
     temperature.innerHTML = data.current.condition.temp_c;

};

    