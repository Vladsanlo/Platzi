//importamos express
const express = require('express');

const ProductsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductsSchema, getProductsSchema } = require('./../schemas/product.schema')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});
//todo lo que sea especifico ,debe ir antes de lo que es dinamico
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

//cuando solo es un solo parametro ,solo se usa id/ 1.1

router.get('/:id',
  validatorHandler(getProductsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
)

//tanto put y patch son iguales,pero se supone que patch es el que recibe los objetos de forma parcial
router.patch('/:id',
  validatorHandler(getProductsSchema, 'params'),
  validatorHandler(updateProductsSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }

  }
);

// patch y post utilizan la misma "estructura" para ser usados,lo unico que cambia es que para patch se requiere un id

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta)
})


module.exports = router;
