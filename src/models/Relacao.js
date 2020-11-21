const mongoose = require('mongoose');


const RelacaoSchema = new mongoose.Schema({
    profissionalId: String,
    userId: String
});

module.exports = mongoose.model('Relacao', RelacaoSchema);