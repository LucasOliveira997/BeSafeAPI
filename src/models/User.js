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
},{
    toJSON: {
        virtuals: true,
    }
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash; 

    next();
});

UserSchema.virtual('thumbnail_url').get(function(){
    return `https://besafeserver.herokuapp.com/files/${this.thumbnail}`
});

module.exports = mongoose.model('User', UserSchema);