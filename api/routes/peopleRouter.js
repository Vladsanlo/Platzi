//importamos express
const express = require('express');

const router = express.Router();

//ejercicio
router.get('/', (req, res) => {
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
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'jose',
    type: 'employee',
  })
})

module.exports = router;
