const Profissional = require('../models/Profissional');

module.exports = {

    async index(req, res) {
        const profissional = await Profissional.find();
        return res.json(profissional);
      },

    async store(req, res) {

        const { filename } = req.file;
        const { nome, cpf, cnpj, crp,  dataNascimento, email, senha, profissao, valor, preferenceId, descricao } = req.body;

        let profissional = await Profissional.findOne ({ email });

        if(!profissional){
            profissional = await Profissional.create({ 
                nome,
                cpf,
                cnpj,
                crp, 
                dataNascimento,
                email,
                senha,
                profissao,
                valor,
                descricao,
                preferenceId,
                thumbnail: filename });
        }

        return res.json(profissional);
    }


};