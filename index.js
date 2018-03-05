const express = require('express');

const app = express()


app.use('/', express.static(__dirname + '/front-heroku/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/front-heroku/build/index.html');
})


const port = process.env.PORT || 3000





app.listen(port,() => {
  console.log('connected')
});
