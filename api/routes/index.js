const express = require('express');

const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')
const peopleRouter = require('./peopleRouter')

function routerApi(app) {
  //path global   {
  const router = express.Router();
  app.use('/api/v1',router);
  //  } sirve para "generalizar" una ruta,en este caso,todos van a usar /api/v1
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/people', peopleRouter);

}

module.exports = routerApi;
