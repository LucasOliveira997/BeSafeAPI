const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
},{
    toJSON: {
        virtuals: true,
    }
});

ProfissionalSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash; 

    next();
});

ProfissionalSchema.virtual('thumbnail_url').get(function(){
    return `https://besafeserver.herokuapp.com/files/${this.thumbnail}`
});

module.exports = mongoose.model('Profissional', ProfissionalSchema);