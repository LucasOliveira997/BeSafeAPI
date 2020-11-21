const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    dataNascimento: String,
    email: String,
    senha: String,
    thumbnail: String,
    chatId: String,
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash; 

    next();
});

module.exports = mongoose.model('User', UserSchema);