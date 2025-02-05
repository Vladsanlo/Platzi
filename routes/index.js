const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRouter')
const peopleRouter = require('./peopleRouter')

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/people', peopleRouter);

}

moduele.exports = routerApi;
