var parse = require('co-body');
var koa = require('koa');
var app = koa();

var port = process.argv[2];

// handlers here
// app.use(handlers);
app.use(function* (next) {
  if (this.path !== '/') {
    return yield next;
  }

  this.body = 'hello koa';
});

app.use(function* (next) {
  if (this.path !== '/404') {
    return yield next;
  }

  this.body = 'page not found';
});

app.use(function* (next) {
  if (this.path !== '/500') {
    return yield next;
  }

  this.body = 'internal server error';
});

app.listen(port);
