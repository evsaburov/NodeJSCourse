const crypto = require('crypto');
const start = performance.now();
const https = require('https');

process.env.UV_THREADPOOL_SIZE = 8;

for (let i = 0; i < 50; i++) {
  crypto.pbkdf2('test', 'salt', 1000, 64, 'sha512', () => {
    console.log(performance.now() - satrt);
  })
}

for (let i = 0; i < 50; i++) {
  https.get('https://yandex.ru', res => {
    res.on('data', ()=>{})
    res.on('end',  ()=>{
      console.log(performance.now() - satrt);
    })
  });
}