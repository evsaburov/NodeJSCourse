import { characters, greet } from './characters.mjs';

for (const c of characters){
  greet(c);
}
// ---------------------------------
import * as char  from './characters.mjs';
for (const c of char.characters){
  char.greet(c);
}
// ---------------------------------
import log, {characters, greet}  from './characters.mjs';
log();
// ---------------------------------
import log, * as char from './characters.mjs';
log();
// ---------------------------------
import log, {characters, greet as hello}  from './characters.mjs'
for (const c of characters){
  hello(c);
}
// --------------------
//асинхронный импорт модуля
// благодяря промисам импорт здесь неблокирующий, выполнение продолжается.
async function main(){
  const {characters, greet} = await import('./characters.mjs');
  for (const c of characters){
    hello(c);
  }
}
main();
// --------------------
async function main(){
  try {
    const {characters, greet} = await import('./characters.mjs');
    for (const c of characters){
      hello(c);
    }
  } catch (error) {
    console.log('error');
  }
}
main();


