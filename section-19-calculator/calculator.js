const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/index.html', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('The result of the calculation is: ' + String(result));
});

app.listen(port, () =>
  console.log(`Calculator App listening on port ${port}!`)
);
