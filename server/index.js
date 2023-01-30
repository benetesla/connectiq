const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
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
//use .env file
env.config();
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
}).then(() => {
    console.log('DB CONNECTED');
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});