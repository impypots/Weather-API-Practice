

let temperature = document.getElementById("temperature");
let humid = document.getElementById("humidity");
let btn = document.getElementById("button");
let input = document.getElementById("input");



function getWeather() {
let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
let city = input.value;
let key = '&appid=fe939d3ba23f6a6e45a8f8a0bedd6acd';
let units = '&units=imperial';
let totalUrl = url + city + key + units;

    fetch(totalUrl)
    .then(response => response.json())
    .then(function(data) {
        console.log(data.main, data.name);
        input.value = "";
        console.log(data.main.temp)
        temperature.innerText = `The temperature in ${data.name} is ${data.main.temp} degrees Fahrenheit, but it feels like ${data.main.feels_like} degrees. The humidity is ${data.main.humidity}%.`;
    })
}



btn.addEventListener("click", getWeather, false)

