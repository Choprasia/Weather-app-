const fetch = require('node-fetch');

const API_KEY = '24df50f40af7fb1bda04526d5ada9ac1';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

module.exports = getWeatherData;