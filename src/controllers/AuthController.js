const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res) {
        const { email, senha } = req.body;

        const user = await User.findOne({ email }).select('+senha');
        if (!user)
            return res.status(400).send({ error: 'Email e/ou senha inválido(s)' });

        if (!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'Email e/ou senha inválido(s)' });

        user.password = undefined;        

        return res.status(200).send({ user });
    }
};