
import { homedir } from 'os';
import { join } from 'path';
import { writeFileSync, promises } from 'fs';

const filePath = join(homedir(), './weather-data.json');

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
};

const saveKeyValue = async (key, value) => {
  if (await isExist(filePath)) {
    let file = await promises.readFile(filePath)
    let data = JSON.parse(file);
  }
  const data = {};
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath)
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined
}

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };