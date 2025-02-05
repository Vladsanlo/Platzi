//importamos express
const express = require('express');
//importamos routes
const routerApi =require('./routes/index');

//Iniciamos aplicacion ejecutando nuestro "import"
const app = express();
//Y declaramos el puerto
const port = 3000;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app);



app.listen(port, () => {
  console.log('mi port' + port)
})
