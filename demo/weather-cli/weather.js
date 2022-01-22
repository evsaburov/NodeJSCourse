#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printError, printSuccess, printWeather } from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.servise.js';

const saveToken = async (token) => {
  if (!token.lenght) {
    printError('Не передан токен');
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Токен сохранен');
  } catch (error) {
    printError(e.message);
  }
}
const saveCity = async (city) => {
  if (!token.lenght) {
    printError('Не передан токен');
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('город сохранен');
  } catch (error) {
    printError(e.message);
  }
}

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.responce?.status == 404) {
      printError('Неверно указан город');
    }
    else if (error?.responce?.status == 401) {
      printError('Неверно указан токен');
    }
    else {
      printError(error.message);
    }
  }
}

const initCli = () => {
  console.log('started');
  // console.log(process.env);
  const args = getArgs(process.argv)
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken('token', args.t)
  }
  return getForecast();
}

initCli();