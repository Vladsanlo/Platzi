//importamos express
const express = require('express');
//importamos cors
const cors = require('cors');
//importamos routes
const routerApi = require('./routes/index');
//importamos unos middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./api/middlewares/error.handler')

//Iniciamos aplicacion ejecutando nuestro "import"
const app = express();
//Y declaramos el puerto
const port = process.env.PORT || 3000;

require("express-async-errors");


app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error);
    }
  }
}
app.use(cors());

routerApi(app);

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('mi port' + port)
})
