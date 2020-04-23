const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/users', UserController.create);

module.exports = routes;