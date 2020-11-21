const Relacao = require('../models/Relacao');

module.exports = {

    async index(req, res) {
        const { profissionalId } = req.query;

        const relacao = await Relacao.find({ profissionalId: profissionalId });

        
        return res.json(relacao);
      },

      async store(req, res){

        const { profissionalId, userId } = req.body;

             relacao = await Relacao.create({
             profissionalId,
             userId
            });

            return res.json(relacao);
    }
};