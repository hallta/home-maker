var express = require('express') ;
var app = express();
var path = require('path');
var morgan = require('morgan');
var fs = require('fs');

app.use(morgan('short'))

app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'jade' );

fs.readFile('app_config.json', 'utf8', function(err, data) {
    if (err) console.log(err);

    app.get('/', function(req, res) {
        res.render('home.jade', {
            config: data 
        });
    });

    console.log('Starting server...');
    app.listen(3000);

    console.log('Server started!');

});
