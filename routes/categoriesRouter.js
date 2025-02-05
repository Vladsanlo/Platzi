//importamos express
const express = require('express');


const router = express.Router();

//cuando son muchos Id en la url,se pone con nombreId/ 1.1
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});


//ejercicio
router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  })
})

module.exports = router;
