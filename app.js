
// gets the data from weather API 
const getCityTemperature = (cityName) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aea8d2188dcf9461a69803b36ba2f6de&units=metric`)
    .then(res => res.json())
    .then(data => processTempData(data))
    .catch(error => consloe.log(error));
};
getCityTemperature('dhaka');

// process the data which got from the API 
const processTempData = (data) => {
    // destructuring object 
    const {main, name, weather, } = data;

    document.getElementById('city-name-display-field').innerText = name;
    document.getElementById('temperature-data-display-field').innerText = main.temp;
    document.getElementById('weathe-type-display-field').innerText = weather[0].main;
};

// get and process search field value 
const getValueFromInputField = () => {
    const getSearchField = document.getElementById('search-field');
    const searchFieldValue = getSearchField.value;
    getSearchField.value = '';
    getCityTemperature(searchFieldValue);
};