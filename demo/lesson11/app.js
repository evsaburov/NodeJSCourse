fs = requite('fs');

const data = fs.readFileSync('./data.txt');
console.log(data.toSting());