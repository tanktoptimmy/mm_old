
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , fs       = require('fs')
  , util     = require('util');


var app = express();

var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mm');

var MatchSchema = require('./models/Match.js').MatchSchema;
var Match = db.model('matches', MatchSchema);

var ImageSchema = require('./models/Image.js').ImageSchema;
var Image = db.model('images',ImageSchema);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads/' }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index(Match));
app.get('/users', user.list);
app.get('/matches.json', routes.get(Match));

app.put('/match/:id.json', routes.update(Match));

app.post('/match.json', routes.addMatch(Match));

app.post('/uploadImage',routes.uploadImage(Image));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});