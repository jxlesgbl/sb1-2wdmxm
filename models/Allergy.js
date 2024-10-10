import mongoose from 'mongoose';

const allergySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

export default mongoose.model('Allergy', allergySchema);