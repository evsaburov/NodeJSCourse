const EventEmmiter = require('events');
const { connected } = require('process');

const myEmitter = new EventEmmiter();

const logDbConnetion = () => {
  console.log('DB connetor');
}

myEmitter.addListener('connected', logDbConnetion); //подписка на событие
myEmitter.emit('connected') //вызов события connected

myEmitter.removeListener('connected', logDbConnetion);
// myEmitter.removeAllListeners('connected');
// myEmitter.off('connected',logDbConnetion);
myEmitter.emit('connected') //вызов события connected


myEmitter.on('msg',(data) => {
  console.log(`${data}`);
});
myEmitter.emit('msg', 'Привет.') //вызов события connected

// подписаться только на одно событие
myEmitter.once('off', 'Вызывается только один раз, и не больше.');
myEmitter.once('off', 'Вызывается только один раз, и не больше.');


console.log(myEmitter.getMaxListeners()); //10
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners()); //1

myEmitter.listenerCount('msg');
myEmitter.listenerCount('off'); //0 т.к once

myEmitter.listeners(); //показать все листенеры. Все листенеры выполняются в порядке добавления

// можно добавить листенер в начало.
myEmitter.prependListener('msg',(data) => {
  console.log(`${data}`);
});

//вывести сами собитея на которые мы подписались
console.log(myEmitter.eventNames());

//обработка ошибок

myEmitter.on('error', err =>{
  console.log(`ошибка ${err.message}`);
});

myEmitter.emit('error', new Error('boom'));



// event target
const target = new EventTarget();

const logTarget = () => {
  console.log('connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));