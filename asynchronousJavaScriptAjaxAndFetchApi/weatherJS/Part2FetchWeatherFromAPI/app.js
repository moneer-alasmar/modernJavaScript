// INIT WEATHER CLASS
const weather = new Weather('Los Angeles');

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami')

function getWeather() {
  weather.getWeather()
  .then(res => console.log(res))
  .catch(err => console.log(err));
}