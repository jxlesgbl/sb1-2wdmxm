import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import allergyRoutes from './routes/allergyRoutes.js';
import productRoutes from './routes/productRoutes.js';
import mealRoutes from './routes/mealRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/users', userRoutes);
app.use('/api/allergies', allergyRoutes);
app.use('/api/products', productRoutes);
app.use('/api/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});