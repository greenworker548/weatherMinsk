// current-card
const humidityKnot = document.querySelector(".current-indicators__humidity")
const tempKnot = document.querySelector(".current-indicators__temp")
const feelingKnot = document.querySelector(".current-indicators__feeling")
const windSpeedKnot = document.querySelector(".card__wind-speed")
const conditionKnot = document.querySelector(".card__condition")
const cardIconKnot = document.querySelector(".icon__image")

const futureCardKnot = document.querySelectorAll(".card__item")

const urlAPI = "http://api.weatherapi.com/v1/forecast.json?key=10677ee246284bbbac4180434242110&q=Minsk&days=5&lang=en"

function render(data) {
    const valueHumidity = data.current.humidity + "%"
    const valueTemp = Math.round(data.current.temp_c) + "°C"
    const valueFeeling = Math.round(data.current.feelslike_c) + "°C"
    const valueWindSpeed = data.current.wind_kph + " km/h"
    const valueCondition = data.current.condition.text
    const valueCard = data.current.is_day === 1 ? "./img/Frame 5.svg" : "./img/Frame 8.svg"

    humidityKnot.textContent = valueHumidity
    tempKnot.textContent = valueTemp
    feelingKnot.textContent = valueFeeling
    windSpeedKnot.textContent = valueWindSpeed
    conditionKnot.textContent = valueCondition
    cardIconKnot.src = valueCard

    document.body.classList.toggle("on")
}

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    render(data)
}

document.addEventListener("DOMContentLoaded", fetchData(urlAPI))