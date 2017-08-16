import axios from 'axios';

const API_KEY = '2028d38f20d2c641e9fd0c95c862d42b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`; 
    const request = axios.get(url);

    console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}

 