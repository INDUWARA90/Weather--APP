
const SearchButton=document.querySelector('.Search-btn');
const CancelButton=document.querySelector('.cancel-button-diactive');


SearchButton.addEventListener('click',()=>{
    const CityName=document.getElementById('txt-search-box').value;
    if (!CityName) {
            return;
    }

    const image=document.getElementById('image-weather');
    const CountofTemp=document.getElementById('Number');
    const city=document.getElementById('city');
    const WindSpeed=document.getElementById('wind-speed-number');
    const humidity=document.getElementById('humidity-percentage');

    console.log(CityName);
    console.log(image);
    console.log(CountofTemp);
    console.log(WindSpeed);
    console.log(city);
    console.log(humidity);
    
});

