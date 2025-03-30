const getBtn = document.getElementById('getBtn')


const getWeather = () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = '059387ea130253d06bec9c2abafbd3c0';

    const apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURl)
    .then(res => res.json())
    .then(data => {

        const showOutput = document.getElementById('show')

        

        console.log(data);
        
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;


        showOutput.innerHTML = `
            <p>description: ${description}</p>
            <p>temperature: ${temp} &#8451</p>
            <p>humidity: ${humidity} %</p>
            <p>windspeed: ${windspeed} m/s</p>
        `

    })
    .catch(error => {
        console.error('Opps!,sorry',error)
        document.getElementById('show').textContent = 'City not found'
    })


}

getBtn.addEventListener('click', ()=>{
    getWeather()
})