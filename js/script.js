// current-card
const currentHumidityKnot = document.querySelector(".current-indicators__humidity")
const currentTempKnot = document.querySelector(".current-indicators__temp")
const currentFeelingKnot = document.querySelector(".current-indicators__feeling")
const currentWindSpeedKnot = document.querySelector(".card__wind-speed")
const currentConditionKnot = document.querySelector(".card__condition")
const currentCardIconKnot = document.querySelector(".icon__image")

// future-hour-card
const futureHourSectionKnot = document.querySelector(".future-hour-card")

// template-card
const templateCardKnot = document.querySelector(".template__card")

// API url
const urlAPI = "http://api.weatherapi.com/v1/forecast.json?key=10677ee246284bbbac4180434242110&q=Minsk&days=5&lang=en"

function renderFutureCard(knot, data = {}) {
    let card = knot.content.cloneNode(true)

    // template-card-item
    const itemTempKnot = card.querySelector(".item__temp")
    const itemImageKnot = card.querySelector(".item__image")
    const itemWindSpeedKnot = card.querySelector(".item__wind-speed")
    const itemTimeKnot = card.querySelector(".item__time")

    itemTempKnot.textContent = Math.round(data.temp_c) + "°C"
    itemImageKnot.src = data.is_day === 1 ? "./img/Frame 5.svg" : "./img/Frame 8.svg"
    itemWindSpeedKnot.textContent = data.wind_kph + " km/h"
    itemTimeKnot.textContent = data.time

    futureHourSectionKnot.appendChild(card)
}

function renderFutureHourSection(data) {
    const arrHourData = data.forecast.forecastday[0].hour

    const currentTime = new Date().getHours()
    console.log(currentTime)

    // const sliceHourData = arrHourData.slice(currentTime, currentTime + 4)

    // arrHourData.forEach((item) => {
    //     renderFutureCard(templateCardKnot, item)
    // })

    const sliceHourData = arrHourData.slice(0, 4)

    sliceHourData.forEach((item) => {
        renderFutureCard(templateCardKnot, item)
    })
}

function renderCurrentCard(data) {
    const valueHumidity = data.current.humidity + "%"
    const valueTemp = Math.round(data.current.temp_c) + "°C"
    const valueFeeling = Math.round(data.current.feelslike_c) + "°C"
    const valueWindSpeed = data.current.wind_kph + " km/h"
    const valueCondition = data.current.condition.text
    const valueCard = data.current.is_day === 1 ? "./img/Frame 5.svg" : "./img/Frame 8.svg"

    currentHumidityKnot.textContent = valueHumidity
    currentTempKnot.textContent = valueTemp
    currentFeelingKnot.textContent = valueFeeling
    currentWindSpeedKnot.textContent = valueWindSpeed
    currentConditionKnot.textContent = valueCondition
    currentCardIconKnot.src = valueCard

    // document.body.classList.toggle("on")
}

function render(data) {
    renderCurrentCard(data)
    renderFutureHourSection(data)
}

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    render(data)
}

document.addEventListener("DOMContentLoaded", fetchData(urlAPI))