
const factorial = require('./factorial');

const compute = (array) => {
  arr = [];
  for (let i = 0; i < 1000000000; i++) {
    arr.push(i * i);
  }
  return array.map(el => factorial(el));
}

const main = () => {
  performance.mark('start');
  const result = [
    compute([23, 22, 31, 11, 44]),
    compute([23, 22, 31, 11, 44]),
    compute([23, 22, 31, 11, 44]),
    compute([23, 22, 31, 11, 44])
  ]
  console.log(result);
  performance.mark('end');
  performance.measure('main', 'start', 'end');
  console.log(performance.getEntriesByName('main').pop());
}
setTimeout(()=>{
  console.log('timeOut');
  },2000);
  
main();