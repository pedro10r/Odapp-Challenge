const mongoose = require('mongoose');
const Paciente = mongoose.model('Paciente');

//Listagem de todos pacientes
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pacientes = await Paciente.paginate({}, { page, limit: 9 });

    return res.json(pacientes);
  },

  //Detalhes do cadastro
  async show(req, res) {
    const paciente = await Paciente.findOne({ id: req.params.id })

    return res.json(paciente);
  },

  //Cadastrar paciente
  async chart(req, res) {
    const paciente = await Paciente.create(req.body);

    return res.json(paciente);
  },

  //Editar cadastro
  async update(req, res) {
    const paciente = await Paciente.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true
    });

    return res.json(paciente);
  },

  //Excluir cadastro
  async del(req, res) {
    await Paciente.findOneAndRemove({ id: req.params.id });

    return res.send();
  }
};