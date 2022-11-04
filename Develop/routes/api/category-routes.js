const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'stock', 'id', 'category_id']
    }
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {

    },
    include: {
      model: Product,
      attributes: ['product_name', 'stock', 'id', 'category_id']
    }
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({

  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      
    }
  })
});

module.exports = router;
