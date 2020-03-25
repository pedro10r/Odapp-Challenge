const express = require('express');
const routes = express.Router();

//Rotas CRUD
const PacienteController = require('./controllers/PacienteController');

routes.get('/pacientes', PacienteController.index);

routes.get('/pacientes/:id', PacienteController.show);

routes.post('/pacientes', PacienteController.chart);

routes.put('/pacientes/:id', PacienteController.update);

routes.delete('/pacientes/:id', PacienteController.del);

module.exports = routes;