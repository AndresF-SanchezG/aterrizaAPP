
const express = require('express');
const { json } = require('react-router-dom');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express')

})

app.get('/admin', (req, res) => {
  res.json({
    name:'Andres',
    contraseña:'xxxx'
  })

})

app.listen(port, () => {
  console.log('Mi port ' + port)
})


