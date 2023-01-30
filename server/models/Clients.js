const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    NumeroConta: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 80,
    },
    dataNascimento: {
        type: Date,
        required: true,
        minlength: 3,
        maxlength: 70
    },
    valor: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 70
    },
    dataEmissao: {
        type: Date,
        required: true,
        minlength: 3,
        maxlength: 70
    },
    dataVencimento: {
        type: Date,
        required: true,
        minlength: 3,
        maxlength: 80
    },
    cnpj: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 80
    },
    razaoSocial: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 80
    },
    nomeFantasia: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 80
    },
});
const client = mongoose.model('Client', clientSchema);

module.exports = client;