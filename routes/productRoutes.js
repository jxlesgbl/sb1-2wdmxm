import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:barcode', async (req, res) => {
  try {
    const product = await Product.findOne({ barcode: req.params.barcode }).populate('allergens');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;