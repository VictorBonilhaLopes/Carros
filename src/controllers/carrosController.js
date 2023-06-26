const Carros = require('../models/Carros')

module.exports = {
    create: async(req, res) => {
        const body = req.body;
        await Carros.create(body);
        return res.redirect('/carros/list')
    },
    list: async(_, res) => {
        const carro =  await Carros.findAll();
        return res.render('Carros/list', {carro})
    },
    edit: async(req, res) => {
        const body = req.body;
        const carro =  await Carros.findByPk(body.id);
        carro.update({
            modelo: body.modelo,
            marca: body.marca,
            valor: body.valor
        })
        carro.save()
        return res.redirect('/carros/list')
    },
    destroy: async(req, res) => {
        const id = req.params.id;
        Carros.destroy({
            where: {id: id}
        })
        return res.redirect('/carros/list')
    },
    formNew: async(_, res) => {
        return res.render('Carros/formNew')
    },
    formEdit: async(req, res) =>{
        const carro = await Carros.findByPk(req.params.id);
        return res.render('Carros/formEdit', {carro})
    }
    
}