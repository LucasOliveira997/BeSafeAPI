const Profissional = require('../models/Profissional');

module.exports = {
    async store(req, res) {

        const { filename } = req.file;
        const { nome, cpf, cnpj, crp,  dataNascimento, email, senha, profissao, valor, descricao } = req.body;

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
                thumbnail: filename });
        }

        return res.json(profissional);
    }


};