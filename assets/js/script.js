console.log("hello world")



var APIkey = "16614a127342a5014cfcb8d183881e22";

var city = window.prompt("What city would you like to see the weather for?");
console.log("city: " + city);

queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + APIkey;

var weather = fetch(queryURL);
console.log(weather);

