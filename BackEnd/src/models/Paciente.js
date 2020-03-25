const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const AutoIncrement = require('mongoose-sequence')(mongoose);

//Atributos do cadastro de pacientes no banco de dados.
const PacienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  idade: {
    type: Number,
    required: true,
  },

  //Data e hora do cadastro
  createdAt: {
    type: Date,
    default: Date.now,
  },

  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

PacienteSchema.plugin(mongoosePaginate);
PacienteSchema.plugin(AutoIncrement, { inc_field: 'id' })

mongoose.model('Paciente', PacienteSchema);