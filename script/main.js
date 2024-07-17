
const SearchButton = document.querySelector('.Search-btn');
const CancelButton = document.querySelector('.cancel-button-diactive');
const APIKey = "4a301f16cac37a61a82606d4eda16fd5";

SearchButton.addEventListener('click',getWeather);



function getWeather() {
    const CityName = document.getElementById('txt-search-box').value;


    const image = document.getElementById('image-weather');
    const CountofTemp = document.getElementById('Number');
    const city = document.getElementById('city');
    const WindSpeed = document.getElementById('wind-speed-number');
    const humidity = document.getElementById('humidity-percentage');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${APIKey}&units=metric`)
        .then((response) => response.json()).then(data => {

            if (data.cod === "404") {
                alert("Spelling Mistake Check Again");
                return;
            }

            console.log(data);
            CountofTemp.innerText = Math.round(data.main.temp);
            city.innerText = data.name;
            humidity.innerText = data.main.humidity;
            WindSpeed.innerText = data.wind.speed;

            document.querySelector(".container-mid").style.display = "block";
          //  document.querySelector('.container-INFO').style.display="block";
            switch (data.weather.main) {
                case "Clouds":
                    image.src = "asset/cloud.png";
                    break;
                case "Clear":
                    image.src = "asset/clear.png";
                    break;
                case "Rain":
                    image.src = "asset/rain.png";
                    break;
                case "Drizzle":
                    image.src = "asset/Drizzle.png";
                    break;
                case "Mist":
                    image.src = "asset/mist.png";
                    break;
                case "Snow":
                    image.src = "asset/snow.png";
                    break;
                default:

                    break;
            }
        });


    if (!CityName) {
        alert("Please Enter City");
        return;
    }

}

//==================container-INFO======================
