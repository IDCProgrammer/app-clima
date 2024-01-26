let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'a738206fcd9182dac01dcfbc40ad68ef'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
});

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperature = data.main.temp
    const humedad = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `La temperatura es de: ${Math.floor(temperature-difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${humedad}%`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descipcion metereologica es: ${description}`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    divDatosClima.appendChild(iconInfo)
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperatureInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descriptionInfo)
}
