import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  barcode: { type: String, unique: true },
  ingredients: [String],
  allergens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Allergy' }]
});

export default mongoose.model('Product', productSchema);