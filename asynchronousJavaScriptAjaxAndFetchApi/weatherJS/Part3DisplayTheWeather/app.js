// INIT WEATHER CLASS
const weather = new Weather('Los Angeles');

// INIT UI CLASS
const ui = new UI();

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami')

function getWeather() {
  weather.getWeather()
  .then(res => {
    ui.paint(res);
  })
  .catch(err => console.log(err));
}