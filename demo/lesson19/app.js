const fs = require('fs');
console.log('init');

setTimeout(() => {
  console.log(perfomance.now(), 'timet 0');
}, 0);

SetImmediate(() => {
  console.log('SetImmediate');
})

fs.readFile(__filename, () => {
  console.log('file readed');
})

//можно вызвать блокировку 
setTimeout(() => {
  for (let i = 0; i < 1000000; i++) {
    console.log('done');
    Promise.resolve().then(() => {
      console.log('promise inside timeout');
    })
  }
}, 100);


Promise.resolve().then(() => {
  console.log('promise');
})

Process.nextTick(()=>{
  console.log('tick');
});

console.log('final');


## Фазы
// nextTick, microtaskQueue
таймеры
// nextTick, microtaskQueue
pending, callbacks 
// nextTick, microtaskQueue
idle, prepare
// nextTick, microtaskQueue
pool
// nextTick, microtaskQueue
check
// nextTick, microtaskQueue
close, callbacks

проверка на окончание
