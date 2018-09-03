// INIT STORAGE CLASS
const storage = new Storage();

// GET STORED LOCATION DATA 
const weatherLocation = storage.getLocationData();

// INIT WEATHER CLASS
const weather = new Weather(weatherLocation.city);

// INIT UI CLASS
const ui = new UI();

// GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded', getWeather);

// CHANGE LOCATION EVENT
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  // CHANGE LOCATION
  weather.changeLocation(city);

  // SET LOCATION IN LOCAL STORAGE
  storage.setLocationData(city);

  // GET AND DISPLAY WEATHER
  getWeather();

  // CLOSE MODAL
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
  .then(res => {
    ui.paint(res);
  })
  .catch(err => console.log(err));
}