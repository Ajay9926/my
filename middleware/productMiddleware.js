const validQuantity = ((req, res, next) => {
  const { quantity } = req.body;

  if (!quantity == 'number' || quantity < 1) {
    return res.status(400).json({ msg: 'Product must be a number and cant not be less than 1' })
  }
  next();
})

const validDescription = (req, res, next) => {
  const { description } = req.body;

  const wordCount = description.trim().split(/\s+/).length;

  if (wordCount > 20) {
    return res.status(400).json({ error: 'Description should not exceed 20 words.' });
  }
  next();
};

module.exports = { validQuantity, validDescription };