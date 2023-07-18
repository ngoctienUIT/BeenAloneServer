import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/configs/db.js';
import route from './src/routes/index.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({  extended: false}));

app.use('/api/v1', route);
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Been Alone App</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

export default app