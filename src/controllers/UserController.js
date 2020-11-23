const User =  require('../models/User');

module.exports = {

    async index(req, res) {
        const user = await User.find();
        return res.json(user);
      },

    async store(req, res) {

        const { filename } = req.file;
        const { nome, cpf, dataNascimento, email, senha, chatId } = req.body;

        let user = await User.findOne ({ email });

        if(!user){
            user = await User.create({ nome, cpf, dataNascimento, email, senha, chatId, thumbnail: filename });
            return res.status(200).send({ user });
        }

        if(user){
            return res.status(400).send({ error: 'Esse e-mail já está em uso' });
        }

        return res.json(user);
    }
};