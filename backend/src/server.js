import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middleware/errorHandler.js'; // Corrected import for default export
import sequelize from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to Database
sequelize.sync({ force: false }).then(() => {
  console.log('Database connected successfully.');
}).catch((error) => console.error('Unable to connect to the database:', error));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Rate limiting

// Routes
app.use('/api/auth', authRoutes);
// More routes can be added here...

// Error Handling Middleware
app.use(errorHandler); 

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
