//importamos express
const express = require('express');
//importamos faker
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
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
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

//cuando solo es un solo parametro ,solo se usa id/ 1.1
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;
