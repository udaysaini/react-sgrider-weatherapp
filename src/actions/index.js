import axios from 'axios';

const API_KEY = '9cf8ef7644bf157a3c43de637e7e840c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url =`${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    //console.log('request', request);

    return {
        type : FETCH_WEATHER,
        payload: request
    };
}