import express from 'express';
import Meal from '../models/Meal.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id)
      .populate('organizer')
      .populate('guests')
      .populate('products');
    if (!meal) return res.status(404).json({ message: 'Meal not found' });
    res.json(meal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;