// importScripts('/other.js');

// var i=0;

// function timedCount()
// {
//     i=i+1;
//     postMessage(i);
//     setTimeout(timedCount, 500);
// }

// worker线程监听主线程发来的消息
// self.addEventListener('message', function (e) {

//     var data = e.data;
//     switch (data.cmd) {
//         case 'start':
//         self.postMessage('WORKER STARTED: ' + data.msg);
//         break;
//         case 'stop':
//         self.postMessage('WORKER STOPPED: ' + data.msg);
//         // 自身内部关闭线程
//         self.close(); // Terminates the worker.
//         break;
//         default:
//         self.postMessage('Unknown command: ' + data.msg);
//     };

//     self.postMessage('You said: ' + e.data);
//     timedCount();
// }, false);

// worker中创建worker
var num_workers = 2;
var items_per_worker = 1000;

// start the workers
var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i++) {
  var worker = new Worker('core.js');
  worker.postMessage(i * items_per_worker);
  worker.postMessage((i + 1) * items_per_worker);
  worker.onmessage = storeResult;
}

// handle the results
function storeResult(event) {
  result += event.data;
  pending_workers -= 1;
  if (pending_workers <= 0)
    postMessage(result); // finished!
}


/** 
 * self代表子线程自身，即子线程的全局对象。因此，等同于下面两种写法
 * 除了使用self.addEventListener()指定监听函数，也可以使用self.onmessage指定
 * 函数返回event对象data属性包含主线程发来的消息，postMessage()方法发送消息给主线程
    // 写法一
    this.addEventListener('message', function (e) {
    this.postMessage('You said: ' + e.data);
    }, false);

    // 写法二
    addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
    }, false);
*/

