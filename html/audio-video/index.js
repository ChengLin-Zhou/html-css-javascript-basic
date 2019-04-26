var express = require('express');
var ejs = require('ejs');
var path = require('path');
var WebSocketServer = require('websocket').server;
var app = new express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 设置静态资源目录
app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat', function(msg) {
        console.log(msg);
        setTimeout(function() {
            socket.emit('message', msg+"\n");
        }, 500);
    });

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

  });

app.get('/', function(req, res) {
    res.render('audio-video');
});

app.get('player', function(req, res) {
    res.render('music-player');
});

app.get('/canvas', function(req, res) {
    res.render('canvas');
});

app.get('/sql', function(req, res) {
    res.render('web-sql');
});

app.get('/cache', function(req, res) {
    res.render('app-cache');
});

app.get('/webworker', function(req, res) {
    res.render('webworks');
});

app.get('/server-sent', function(req, res) {
    res.render('server_sent');
});

app.get('/sse-demo', function(req, res) {
    console.log(111);
    res.header({'Content-Type': 'text/event-stream'});
    res.header({'Cache-Control': 'no-cache'});
    res.header({'Connection': 'keep-alive'});
    res.header({'Access-Control-Allow-Origin': '*'});
    res.send("retry:10000\n" + "id:" + new Date() + "\n" + "data:"+ new Date() +"\n\n");
    // res.send()会不成功报can not set header after they are sent 是因为多次使用send方法的原因
    // 客户端始终都会进入onerror方法
    // 直接报错，是因为"\n\n"使用单引号的原因
    // res.send("retry:10000\n" + "id:" + new Date() + "\n" + "data: The server time is" + new Date()+"\n\n");
    // return;
});

app.get('/websocket', function(req, res) {
    res.render('websocket');
});

app.get('/css-practies', function(req, res) {
    res.render('css/css-practies');
});

app.get('/css/border', function(req, res) {
    res.render('css/border');
});

app.get('/css/background', function(req, res) {
    res.render('css/background');
});

app.get('/css/gradient', function(req, res) {
    res.render('css/gradient');
});

app.get('/css/text', function(req, res) {
    res.render('css/text');
});

app.get('/css/transform', function(req, res) {
    res.render('css/transform');
});

app.get('/css/column', function(req, res) {
    res.render('css/column');
});

// app.listen('5050');
http.listen('5050', function() {
    console.log('server is started');
});

