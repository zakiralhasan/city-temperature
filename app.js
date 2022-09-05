
// gets the data from weather API 
const getCityTemperature = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aea8d2188dcf9461a69803b36ba2f6de&units=metric`)
    .then(res => res.json())
    .then(data => processTempData(data))
    .catch(error => consloe.log(error));
};
getCityTemperature('dhaka');