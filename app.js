'use strict';

var SwaggerRestify = require('swagger-restify-mw');
var SwaggerUi = require('swagger/node_modules/swagger-tools/middleware/swagger-ui');
var restify = require('restify');
var app = restify.createServer();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};


SwaggerRestify.create(config, function(err, swaggerRestify) {
  if (err) { throw err; }


  app.use(swaggerRestify.runner.swaggerTools.swaggerUi()); // MUST BE BEFORE APP REGISTER

  swaggerRestify.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerRestify.runner.swagger.paths['/countries']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + 'countries');
  }
});
