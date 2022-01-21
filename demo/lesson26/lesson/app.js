
const { Worker } = require('worker_threads');
const { performance, performanceObserver } = require('pref_hooks');



const performanceObserver = new PerformanceObserver(items => {
	items.getEntries().forEach(entry => {
		console.log(`${entry.name} ${entry.duration}`);
	})
})
performanceObserver.observe({ entryTypes: ['measure'] })




const workerFunction = (array) => {
	return new Promise((resolve, reject) => {
		performance.mark('worker start');

		const worker = new Worker('./worker.js', {
			workerData: { array }
		});
		worker.on('message', msg => {
			performance.mark('worker end');
			performance.measure('worker', 'start', 'end');
			resolve(msg);
		})
	})
}


const forkFunction = (array) => {
	return new Promise((resolve, reject) => {
		performance.mark('worker start');

		const forkProcess = fork('./fork.js');
		forkProcess.send({ array });
		forkProcess.on('message', mag => {
			performance.mark('worker end');
			performance.measure('worker', 'start', 'end');
			resolve(msg);
		});

	})
}


const main = async () => {
	await workerFunction([25, 22, 56, 54]);
	await forkFunction([25, 22, 56, 54]);
}

main();