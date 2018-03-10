// # API routes
var express = require('express'),
    api = require('../controllers'),
    apiRoutes;
var path = require('path')

apiRoutes = function(router) {
    router = express.Router();

    // ## User Auth
    router.post('/users/signup', api.users.signup);
    router.post('/users/session', api.users.session);
    router.get('/users/signin', api.users.signin);
    router.get('/users/signout', api.users.signout);

    // ## Analytics
    router.get('/analytics/users', api.analytics.totalCountOfUsers);

    // ## Test    
    router.get('/user/create', api.user.create);
    router.get('/quiz/create', api.quiz.create);
    

    return router;
};

module.exports = apiRoutes;