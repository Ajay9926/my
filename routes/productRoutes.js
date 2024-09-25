const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const { validQuantity, validDescription } = require('../middleware/productMiddleware')

router.post('/addProduct', validQuantity,validDescription,productController.addProduct)
router.get('/getProduct', productController.getProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)
router.put('/updateProduct/:id', productController.updateProduct)

module.exports = router;