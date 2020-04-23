const { Router } = require('express');
const middleware = require('./middlewares');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', middleware.auth, UserController.read);

routes.post('/users/auth', SessionController.create);

module.exports = routes;