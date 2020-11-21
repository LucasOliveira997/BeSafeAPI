const mongoose = require('mongoose');

const ProfissionalSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    cnpj: String,
    crp: String,
    dataNascimento: String,
    email: String,
    senha: String,
    thumbnail: String,
    profissao: String,
    valor: String,
    descricao: String,
});

module.exports = mongoose.model('Profissional', ProfissionalSchema);