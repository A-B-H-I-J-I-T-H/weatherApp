async function weather() {
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    let key;

    try {
        key = input.value;
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=%20ead5c6c076b84a808a591110230608&q='+key, {mode : 'cors'})
        const result = await response.json();

        console.log(result);
        concise(result);
        console.log(currentweather);
    }
    catch {
        console.log(Error);
    }
}

const currentweather = {
    condition: "",
    icon: "",
    humidity: "",
    ctemp: "",
    ftemp: "",
    wind: "",
    region: ""
}

function concise(obj) {
    currentweather.condition = obj.current.condition.text
    currentweather.icon = obj.current.condition.icon
    currentweather.humidity = obj.current.humidity
    currentweather.ctemp = obj.current.temp_c
    currentweather.ftemp = obj.current.temp_f
    currentweather.wind = obj.current.wind_kph
    currentweather.region = obj.location.region
}