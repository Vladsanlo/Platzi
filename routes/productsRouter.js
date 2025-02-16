//importamos express
const express = require('express');

const ProductsService = require('./../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});
//todo lo que sea especifico ,debe ir antes de lo que es dinamico
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

//cuando solo es un solo parametro ,solo se usa id/ 1.1

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
})
//tanto put y patch son iguales,pero se supone que patch es el que recibe los objetos de forma parcial
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product=service.update(id,body);
  res.json(product);
});

// patch y post utilizan la misma "estructura" para ser usados,lo unico que cambia es que para patch se requiere un id



router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta =service.delete(id);
  res.json(rta)
})


module.exports = router;
