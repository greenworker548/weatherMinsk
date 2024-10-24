// current-card
const valueHumidityKnot = document.querySelector(".current-indicators__humidity")
const valueTempKnot = document.querySelector(".current-indicators__temp")
const valueFeelingKnot = document.querySelector(".current-indicators__feeling")
const valueWindSpeedKnot = document.querySelector(".card__wind-speed")
const valueConditionKnot = document.querySelector(".card__condition")

const urlAPI = "http://api.weatherapi.com/v1/forecast.json?key=10677ee246284bbbac4180434242110&q=Minsk&days=5&lang=en"

function render(data) {
    valueHumidityKnot.textContent = data.current.humidity + "%"
    valueTempKnot.textContent = Math.round(data.current.temp_c) + "°C"
    valueFeelingKnot.textContent = Math.round(data.current.feelslike_c) + "°C"
    valueWindSpeedKnot.textContent = data.current.wind_kph + " km/h"
    valueConditionKnot.textContent = data.current.condition.text
}

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    render(data)
}

document.addEventListener("DOMContentLoaded", fetchData(urlAPI))