const { Router } = require('express');

const UserController = require('./controllers/UserController');
const CertificateController = require('./controllers/CertificateController');


const routes = Router();



routes.post('/users/create', UserController.store);
routes.get('/login', UserController.index);

routes.post('/certificate/create', CertificateController.store);
routes.get('/certificate/result', CertificateController.result);
routes.get('/certificate/search', CertificateController.search);


module.exports = routes;