const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5dd31714cemsh99e235c295397c2p1897bdjsncd42ad354213',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .then(err => console.log(err))
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

submit.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        getWeather(city.value)
    }
})
getWeather("Ahmedabad")