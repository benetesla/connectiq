const express = require('express');
const mongoose = require('mongoose');
const Clients = require('./models/Clients');

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const clients = new Clients({
        name: 'Bene',
        NumeroConta: "5",
        dataNascimento: '1999-12-31',
        valor: 1000,
        dataEmissao: '2020-12-31',
        dataVencimento: '2021-12-31',
        cnpj: 123456789,
        razaoSocial: 'Bene',
        nomeFantasia: 'Bene'
    });
    try{
        const result = await clients.save();
        res.send(result);
    } catch(e) {
        res.send(e.message);
    }
    
});
mongoose.connect('mongodb+srv://bene:369369@cluster0.k9q6vh5.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: false }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});