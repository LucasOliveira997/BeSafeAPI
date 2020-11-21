const Profissional = require('../models/Profissional');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res) {
        const { email, senha } = req.body;

        const profissional = await Profissional.findOne({ email }).select('+senha');
        if (!profissional)
            return res.status(400).send({ error: 'Email e/ou senha inválido(s)' });

        if (!await bcrypt.compare(senha, profissional.senha))
            return res.status(400).send({ error: 'Email e/ou senha inválido(s)' });

        profissional.password = undefined;        

        return res.status(200).send({ profissional });
    }
};