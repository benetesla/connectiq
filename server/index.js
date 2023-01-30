const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

//with this line we can use the .env file
mongoose.connect('mongodb+srv://bene:369369@cluster0.k9q6vh5.mongodb.net/?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: false }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});