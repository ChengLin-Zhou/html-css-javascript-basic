var ws = require("nodejs-websocket");

var server = ws.createServer(function(connect) {
    connect.on("text",function(msg) {
        console.log("收到的消息是："+msg);
        if(msg) {
            connect.send('接收到的消息是：'+msg);
        }
    });
}).listen(8000);