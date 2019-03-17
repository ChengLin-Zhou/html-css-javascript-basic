var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = new express();

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 设置静态资源目录
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('audio-video');
});

app.get('player', function(req, res) {
    res.render('music-player');
});

app.get('/canvas', function(req, res) {
    res.render('canvas');
});

app.listen('5050');