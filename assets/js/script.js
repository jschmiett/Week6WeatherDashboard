console.log("hello world")
var submitButton = document.getElementById('citySearchButton');
// var todaysForcast = document.getElementById('todaysForcast');
// var fiveDayForecast = document.getElementById('fiveDayForcast')

console.log(submitButton);
// console.log(todaysForcast);
// console.log(fiveDayForecast);
// var APIkey = "16614a127342a5014cfcb8d183881e22";
// console.log(APIkey);

// var city = document.getElementById('cityWeatherSearch').submit();
// console.log(city);


function getCityWeather(event) {
    event.preventDefault();
    var city = document.getElementById('cityWeatherSearch').value;
    console.log(city);
    var APIkey = "16614a127342a5014cfcb8d183881e22";
    console.log(APIkey);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";
    console.log(queryURL);

    fetch(queryURL)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Adding Title for todays forcast
            var todaysForcast = document.getElementById('todaysForcast');
            var todaysForcastTitle = document.createElement('h2');
            todaysForcastTitle.textContent = city + " (" + data.dt + ")";
            todaysForcast.append(todaysForcastTitle);

            // Adding List for forcast information
            var todaysforcastList = document.createElement('ul');
            todaysForcastTitle.append(todaysforcastList);

            // Adding today's tempurature to today's forcast list
            var todaysTemp = document.createElement('li');
            todaysTemp.textContent = "Temp: " + data.main.temp + " degrees";
            todaysForcastTitle.append(todaysTemp);

            // Adding today's Wind Speed to today's forcast list
            var todaysWind = document.createElement('li');
            todaysWind.textContent = "Wind: " + data.wind.speed + "mph";
            todaysForcastTitle.append(todaysWind);

            // Adding today's humidity to today's forcast list
            var todaysHumidity = document.createElement('li');
            todaysHumidity.textContent = "Humidity: " + data.main.humidity + " %";
            todaysForcastTitle.append(todaysHumidity);

            // Adding today's UV Index to today's forcast list
            // var todaysUVIndex = document.createElement('li');
            // todaysUVIndex.textContent = data.

            uVIndexAndForcast(data.coord.lat, data.coord.lon)
        });

}

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function uVIndexAndForcast(lat, lon) {
    var APIkey = "16614a127342a5014cfcb8d183881e22";
    console.log(APIkey);
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&appid=" + APIkey + "&units=imperial";
    console.log(queryURL);

    fetch(queryURL)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // fiveDayForecast(data)
            // Creating Title of Five Day Forecast
            var fiveDayTitle = document.createElement('h2');
            console.log(fiveDayTitle);
            fiveDayTitle.textContent = "Five Day Forecast";
            console.log(fiveDayTitle.textContent);
            document.getElementById('fiveDayForecast').appendChild(fiveDayTitle);

            // Adding five days of future forecasts
            for (i = 0; i < 5; i++) {
                // Create div to contain that day[i]'s forecast information
                var fiveDayForcastCard = document.createElement('div');
                fiveDayTitle.append(fiveDayForcastCard);
                console.log(i);

                // Add date of day[i]
                console.log(data.daily[i].dt);
                var date = data.daily[i].dt;
                fiveDayForcastCard.append(date);
                console.log(date);

                // Create unordered list for forecast information
                var forcastList = document.createElement('ul');
                fiveDayForcastCard.append(forcastList);

                // Add daytime tempurature for day[i] to unordered forcast list
                console.log(data.daily[i].temp.day);
                var dailyTemp = document.createElement('li');
                dailyTemp.textContent = "Temp: " + data.daily[i].temp.day + " degrees";
                forcastList.append(dailyTemp);
                console.log(dailyTemp);

                // Add wind speed for day[i] to unordered forcast list
                console.log(data.daily[i].wind_speed);
                var dailyWindSpeed = document.createElement('li');
                dailyWindSpeed.textContent = "Wind: " + data.daily[i].wind_speed + " mph";
                forcastList.append(dailyWindSpeed);
                console.log(dailyWindSpeed);

                // Add humidity for day[i] to unordered forcast list
                console.log(data.daily[i].humidity);
                var dailyHumidity = document.createElement('li');
                dailyHumidity.textContent = "Humidity: " + data.daily[i].humidity + " %";
                forcastList.append(dailyHumidity);
                console.log(dailyHumidity);

            }
        })

    // fiveDayForecast() {
    //     let fiveDayTitle = document.createElement('h2');
    //     console.log(fiveDayTitle);
    //     fiveDayTitle.textContent = "Five Day Forecast";
    //     console.log(fiveDayTitle.textContent);
    //     document.getElementById("fiveDayForecast").appendChild(fiveDayTitle);

    //     fiveDayForcastCard() {
    //         for (i = 0; i < 5; i++) {
    //             console.log(i);
    //             console.log(data.coord.dt);
    //         }
    //     }
    // }
};





submitButton.addEventListener("click", getCityWeather);
