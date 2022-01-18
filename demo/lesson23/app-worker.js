
const factorial = require('./factorial');
const { Worker } = require('worker_threads');

const compute = ({ array }) => {
  return Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: {
        array
      }
    });
    worker.on('message', (mes) => {
      console.log(worker.threadId);
      resolve(msg);
    });
    worker.on('error', err => {
      reject(err);
    })
    worker.on('exit', () => {
      console.log('Завершил работу');
    });
  })
}

const main = async () => {
  try {
    performance.mark('start');
    const result = await Promise.all([
      compute([23, 22, 31, 11, 44]),
      compute([23, 22, 31, 11, 44]),
      compute([23, 22, 31, 11, 44]),
      compute([23, 22, 31, 11, 44])
    ]);
    console.log(result);
  
    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
  } catch (error) {
    console.log(error.message);
  }

}

setTimeout(()=>{
console.log('timeOut');
},2000)

main();