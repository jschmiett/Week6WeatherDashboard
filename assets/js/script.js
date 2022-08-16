console.log("hello world")
var submitButton = document.getElementById('cityWeatherSearch');

var APIkey = "16614a127342a5014cfcb8d183881e22";
console.log(APIkey);

var city = document.getElementById('cityWeatherSearch');
console.log(city);


function getCityWeather() {
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
