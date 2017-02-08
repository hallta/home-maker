var express = require('express') 
var app = express()
var path = require('path')

app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'jade' );

app.get('/', function(req, res) {
    res.render('home.jade', {
        content: { dat: 'trevor'}
    })
})

console.log('Starting server...')
app.listen(3000)

console.log('Server started!')
