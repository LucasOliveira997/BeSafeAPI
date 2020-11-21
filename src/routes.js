const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const AuthController = require('./controllers/AuthController');
const ProfissionalAuthController = require('./controllers/ProfissionalAuthController');
const UserController = require('./controllers/UserController');
const ProfissionalController = require('./controllers/ProfissionalController');
const RelacaoController = require('./controllers/RelacaoController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Authenticate User
routes.post('/authenticate', AuthController.store);
//Authenticate Profissional
routes.post('/proauthenticate', ProfissionalAuthController.store);

//User
routes.post('/users', upload.single('thumbnail'), UserController.store);
routes.get('/users', UserController.index);

//Profissional
routes.post('/profissionais', upload.single('thumbnail'),ProfissionalController.store);
routes.get('/profissionais', ProfissionalController.index);

//Relação
routes.get('/relacoes', RelacaoController.index);
routes.post('/relacoes', RelacaoController.store);



module.exports = routes;