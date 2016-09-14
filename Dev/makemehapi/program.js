var Hapi = require('hapi');
var server = new Hapi.Server();
var Inert = require('inert');

server.register(Inert, function (err) {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/{name}',
  method:'GET',
  handler: funfunHandler,
  file: "/Users/madgrid/Dev/makemehapi/index.html"
});

// Seperatly declared functions
function funfunHandler(request, reply) {
  // Request has all information
  // Reply handles client response

  // Lesson 1
  //reply('Hello hapi');
  //Lesson 2
  //reply('Hello ', request.params.name);
  // Lesson 3

}

server.start();

