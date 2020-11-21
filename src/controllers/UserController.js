const User =  require('../models/User');

//teste

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

        }

        return res.json(user);
    }
};