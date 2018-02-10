const path = require('path')
const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static(publicPath));

massive("postgres://gqbgmzro:j4IgQnY4qQoSFsXN0NdJsujRyi1jUfva@baasu.db.elephantsql.com:5432/gqbgmzro")
.then(db => {
  app.set('db', db)
  db.init()
})
app.get('/api/cars', async (req, res) => {
  const db = req.app.get('db');
  try {
    const cars =  await db.select_cars() || []
    console.log(cars);
    return res.json(cars)
  } catch(err) {
    return res.send(err)
  }
})


app.get('/*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port,() => console.log('server is up'))
