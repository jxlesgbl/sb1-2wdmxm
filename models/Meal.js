import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  guests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  date: { type: Date, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.model('Meal', mealSchema);