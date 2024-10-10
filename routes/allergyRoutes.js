import express from 'express';
import Allergy from '../models/Allergy.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const allergy = new Allergy(req.body);
    await allergy.save();
    res.status(201).json(allergy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const allergies = await Allergy.find();
    res.json(allergies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;