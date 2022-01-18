const start = performance.now();
setTimeout(() => {
  console.log(performance.now() - start);
  console.log('прошла секунда');
}, 1000);


function myFunc(arg) {
  console.log(`arg=>${arg}`);
}
setTimeout(myFunc, 1500, 'test');


const timerId = setTimeout(() => {
  console.log('boom');
}, 5000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log('clear');
}, 1000)


const intervalId = setInterval(() => {
  console.log( performance.now());
}, 1000);


setTimeout(() => {
  clearInterval(intervalId);
  console.log('clear');
}, 5000)


console.log('перед');
SetImmediate(()=>{
  console.log('после всего');
})
console.log('после');




const timerId = setTimeout(() => {
  console.log('boom');
}, 5000);
timerId.unref();

SetImmediate(()=>{
  timerId.ref();
})