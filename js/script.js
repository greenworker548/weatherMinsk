const url = "http://api.weatherapi.com/v1/forecast.json?key=10677ee246284bbbac4180434242110&q=Minsk&days=5&lang=ru"

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

// fetchData(url)