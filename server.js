const express = require('express');
const app = express();
const mongoose = require('mongoose');
//doten
require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: false,
    useUnifiedTopology: true
})
    .then(() =>
        console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});