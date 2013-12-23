
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var api = require('./routes/api');
var joyce = require('./routes/joyce');
var card = require('./routes/card');
var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/1/api', api.index);
app.get('/joyce', joyce.index);

// REST API
app.get('/1/card/:name', card.read); //name:群組
app.post('/1/card/:nickname', card.create); //nickname: 其中一人
app.put('/1/card/:nickname', card.update);
app.delete('/1/card/:nickname', card.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
