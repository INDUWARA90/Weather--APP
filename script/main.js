
const SearchButton = document.querySelector('.Search-btn');
const CancelButton = document.querySelector('.cancel-button-diactive');


SearchButton.addEventListener('click', getWeather);



function getWeather() {
    const CityName = document.getElementById('txt-search-box').value;


    const image = document.getElementById('image-weather');
    const CountofTemp = document.getElementById('Number');
    const city = document.getElementById('city');
    const WindSpeed = document.getElementById('wind-speed-number');
    const humidity = document.getElementById('humidity-percentage');

    const CountryName =document.getElementById('Name-Country');
    const Sunrise =document.getElementById('Sunrise');
    const sunset =document.getElementById('Sunset');
    const FeelLike =document.getElementById('feels-like-temp');
    const date =document.getElementById('Date');
    const Time =document.getElementById('time');
    const Pressure =document.getElementById('Pressure');
    const UV =document.getElementById('UV');
    


    fetch(`https://api.weatherapi.com/v1/forecast.json?key=a06fe2c5d2114212a6291249242608&q=${CityName}&days=7`)
        .then((response) => response.json()).then(data => {
         
                console.log(data);
         

                
                        //=========Main details==============
                        CountofTemp.innerText = Math.round(data.current.temp_c);
                        city.innerText = data.location.name;
                        humidity.innerText = data.current.humidity;
                        WindSpeed.innerText = data.current.wind_kph;
                        image.src=data.current.condition.icon;
                        
                        //=========Sub details==============
                        CountryName.innerText=data.location.country;
                        Sunrise.innerText=data.forecast.forecastday[0].astro.sunrise;
                        sunset.innerText=data.forecast.forecastday[0].astro.sunset;
                        FeelLike.innerText=data.current.feelslike_c+"°C";
                        date.innerText=data.forecast.forecastday[0].date;
                        Time.innerText=remove(data.location.localtime,0,11);
                        Pressure.innerText=data.current.pressure_in+" PSI";
                        UV.innerText=Math.round(data.current.uv);
                        



                        //=========Display Property====================
                        const showContent=document.querySelectorAll(".content");
                        showContent.forEach(element=>{element.style.display = "block";})
                        document.querySelector(".container-mid").style.display = "block";

                        document.getElementById('txt-search-box').value="";          

                        
                

               
        });

        
}

// https://api.weatherapi.com/v1/current.json?key=3bf3cf9506af4f6f89f90150242608&q=London

function remove(string, from, to) {
        return string.substring(0, from) + string.substring(to);
}


// Alret bottom eke box