var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var app = koa();


// middleware

app.use(logger());


// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
