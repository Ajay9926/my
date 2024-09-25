const ProductData = require('../model/productSchema')

// app.post('/addProduct',
exports.addProduct = async (req, res) => {
  try {
    const body = req.body;

    if (!body || !body.category || !body.item || !body.size || !body.quantity || !body.description) {
      return res.status(400).json({ msg: "All Fields are Required" })
    }
    const result = await ProductData.create({
      category: body.category,
      item: body.item,
      size: body.size,
      quantity: body.quantity,
      description: body.description,
    })
    console.log('Result', result);
    res.status(200).json({ msg: 'Product added successfully' })

  } catch (err) {
    console.error('Product not added', err)
    res.status(500).json({ msg: 'Server Error' })
  }
}


// app.get('/getProduct'
exports.getProduct = async (req, res) => {
  try {
    let result = await ProductData.find({});
    if (!result) {
      console.log('Product is Required')
      res.status(404).json({ msg: 'product is not Found' })
    }
    return res.status(200).json(result)

  } catch (err) {
    return res.status(500).json({ msg: 'Server Error' })
  }
}


// app.delete('/deleteProduct/:id'
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, 'params id')
    if (!id) {
      return res.status(400).json({ msg: 'Product id is Required' })
    }
    const result = await ProductData.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ msg: 'Product Not Found' })
    }
    console.log('results', result)
    return res.status(200).json({ msg: 'Product Deleted Successfully' })

  } catch (err) {
    console.error('Server Error', err)
  }
}


// app.put( '/updateProduct/:id',
exports.updateProduct = async (req, res) => {

  const { id } = req.params;
  const { category, item, size, quantity, description } = req.body;

  if (!id) {
    return res.status(400).json({ msg: 'Product id is Required' })
  }
  const updateData = {}
  if (category) updateData.category = category;
  if (item) updateData.item = item;
  if (size) updateData.size = size;
  if (quantity) updateData.quantity = quantity;
  if (description) updateData.description = description;
  try {
    const result = await ProductData.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    )
    if (!result) {
      return res.status(404).json({ msg: 'Product not found' })
    }
    return res.status(200).json({ msg: 'Product updated successfully', data: result })
  } catch (err) {
    console.error('Server Error', err)
  }
}