import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000

//Middleware
app.use(express.json());

//Routes
app.use('/api', routes);

//Start Server

app.listen(port, () => {
    console.log(`Server is running on ${PORT}`)
});