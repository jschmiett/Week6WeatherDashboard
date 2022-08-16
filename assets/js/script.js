console.log("hello world")
var submitButton = document.getElementById('citySearchButton');

// var APIkey = "16614a127342a5014cfcb8d183881e22";
// console.log(APIkey);

// var city = document.getElementById('cityWeatherSearch').submit();
// console.log(city);


function getCityWeather() {
    var city = document.getElementById('cityWeatherSearch').submit();
    console.log(city);
    var APIkey = "16614a127342a5014cfcb8d183881e22";
    console.log(APIkey);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    console.log(queryURL);

    fetch(queryURL)
        .then(function (response) {
            console.log(response)
        })
        .then(function (data) {
            console.log(data);
        });

}

submitButton.addEventListener("onClick", getCityWeather);