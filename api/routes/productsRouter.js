const express = require('express');
const ProductService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');
const router = express.Router();
const service = new ProductService(); //instancia de la clase

router.get('/', async (req, res) => {
  const products = await service.find()
  console.log({
    products
  });
  res.json(products)

});

router.get('/filter', (req, res) => {

  res.send('soy un filter')
})


router.get('/:id', validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {

    try {
      const {
        id
      } = req.params

      const product_id = await service.findOne(id)

      res.json(product_id)
    } catch (err) {
      /*  res.status(404).json({
         message: err.message
       })
      */
      next(err)
    }
  })

router.post("/",
  validatorHandler(createProductSchema, 'body')
  , async (req, res) => {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json({
      message: "created",
      data: newProduct
    })
  })


router.patch("/:id",
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {

    try {

      const {
        id
      } = req.params
      const body = req.body
      const product = await service.update(id, body)
      res.json({
        message: "update",
        data: product
      })
    } catch (error) {
      next(error)
    }
  })

router.delete("/:id", async (req, res) => {
  const {
    id
  } = req.params
  const rta = await service.delete(id)
  res.json({
    message: "delete",
    data: rta
  })
})
module.exports = router;
