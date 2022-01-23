import express from 'express';

const port = 8000;
const app = express();


app.get('/hello', (req, resp) => {
  res.status(200).send({ success: true });  
  res.status(200).json({ success: true });  
  res.status(200).jsonp({ success: true });  
  res.download('/test.pdf', 'test.pdf');
  res.redirect(301, 'httt://example.com');
});
app.get('/hello2', (req, resp) => {
  res.set('Content-Type', 'text/plain')
  res.appent('Content-Type', 'text/plain')
  res.appent('warning', 'code');
  res.type('application/json');
  res.location('');
  res.links({
    next:'test',
    next2:'test',
  });
  res.cookie('token','sdfsdaf',{
    domain:'',
    path:"/",
    secure: true,
    expires: 500000
  }),
  res.clearCookie('token');
  res.send('hello');  
  res.status(404).end();
  res.end();

);


app.listen(port, () => {
  console.log(`сервер запущен на localhost ${port}`);
});
