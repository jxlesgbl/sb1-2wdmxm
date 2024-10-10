import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  organization: String,
  age: Number,
  sex: String,
  allergies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Allergy' }]
});

export default mongoose.model('User', userSchema);