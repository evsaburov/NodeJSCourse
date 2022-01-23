import express from 'express';

const port = 8000;
const app = express();


app.all('/hello', (req, resp, next) => {
  console.log(all);
  next();
})

// '/he?lo' //hello, helo ноль или один
// '/h(el)?o' //группа символов не обязательна
// '/he+lo' //hellllllo Один и ноль
// '/he*lo' //hello, helkdsfsdfdsfdsflo Один, ноль или более
// app.get(/.*a$/) //строка любой длинны заканчивается на a
app.get('/he?lo', (req, res) => { //hello, helo
  res.send('Привет');
})


const cb = (req, res, next) => {
  console.log('CB');
}

// можно включить допольнительный колбек cb
app.post('/hello', cb, (req, res) => {
  res.send('Привет');
})
// колбеки в массиве
app.post('/hello', [cb, dd, ss, (req, res) => { res.send('Привет') }])
app.post('/user/hello', [cb, dd, ss, (req, res) => { res.send('Привет') }])

//роутинг
app.route('/user')
  .post('/hello', cb, (req, res) => {
    res.send('Привет post');
  })
  .get('/hello', cb, (req, res) => {
    res.send('Привет get');
  })



app.listen(port, () => {
  console.log(`сервер запущен на localhost ${port}`);
})

