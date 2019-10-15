const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5573f147a3b34fb10be206e0736c7f1&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}