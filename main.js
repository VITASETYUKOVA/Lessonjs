const url = 'https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true';

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data && data.current_weather) {
            const weatherDiv = document.getElementById('weather');
            const temperature = data.current_weather.temperature;
            weatherDiv.innerHTML = `<p>Температура в Києві: ${temperature}°C</p>`;
        } else {
            document.getElementById('weather').innerHTML = '<p>Помилка отримання даних</p>';
        }
    })
    .catch(error => {
        document.getElementById('weather').innerHTML = `<p>Помилка: ${error.message}</p>`;
    });