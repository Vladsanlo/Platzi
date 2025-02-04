//importamos express
const express = require('express');
//Iniciamos aplicacion ejecutando nuestro "import"
const app = express();
//Y declaramos el puerto
const port = 3000;
//importamos faker
const { faker } = require('@faker-js/faker');


app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

app.get('/products', (req, res) => {
  const products = [];
  const{size}=req.query;
  const limit=size  || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),

    });
  }
  res.json(products);
});
//todo lo que sea especifico ,debe ir antes de lo que es dinamico
app.get('/products/filter',(req,res)=>{
  res.send('yo soy un filter');
});

//cuando solo es un solo parametro ,solo se usa id/ 1.1
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
})



//cuando son muchos Id en la url,se pone con nombreId/ 1.1
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});


//ejercicio
app.get('/categories', (req, res) => {
  res.json([
    {
      blue: true,
      green: false,
    },
    {
      blue: false,
      red: true,
    }
  ])
})
//ejercicio
app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  })
})
//ejercicio
app.get('/people', (req, res) => {
  res.json([
    {
      name: 'jose',
      type: 'employee'
    },
    {
      name: 'katy',
      type: 'customer'
    }
  ])
})
//ejercicio
app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'jose',
    type: 'employee',
  })
})


app.listen(port, () => {
  console.log('mi port' + port)
})
