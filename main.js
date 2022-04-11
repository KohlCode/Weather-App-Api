// https://github.com/robertoduessmann/weather-api

document.querySelector('button').addEventListener('click', getWeather)
let  city = ''

function getWeather(){
  city = document.querySelector('input').value;
  let url = "https://goweather.herokuapp.com/weather/" + city;
  
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    document.querySelector('h1').innerText = 
    city + ' weather';
    document.querySelector('h2').innerText = data.temperature
    document.querySelector('p').innerText = data.description
    })
    .catch(err => {
        console.log(`error ${err}`)
    }); 
}


