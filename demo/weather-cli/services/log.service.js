
import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
  console.log(chalk.bgRed('ERROR') + ' ' + err);
}

const printSuccess = message =>{
  console.log(chalk.bgGreen('Success') + ' ' + message);
}

const printHelp = () => {
console.log(
  dedent`${chalk.bgCyan(' HELP')}
  Без параметров - вывод погоды
  -s [CITY] для установки города
  -h для выода помощи
  -t [API_KEY] для сохранения токена 
  `);
}

const printWeather = (res, icon) =>{
  console.log(
    dedent`${chalk.bgYellow(' Weather')} Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (ощащается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed}
    `);
}

export {printError, printSuccess, printHelp, printWeather}