import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({  extended: false}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});