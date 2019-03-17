(function() {
    // 获取画布对象
    var canvasShape = document.getElementById('canvasShape');
    var canvasLine = document.getElementById('canvasLine');
    var canvasArc = document.getElementById('canvasArc');
    var canvasText = document.getElementById('canvasText');
    var canvasImg = document.getElementById('canvasImg');
    var canvasGradient = document.getElementById('canvasGradient');

    // 绘制矩形
    function createShape(shapeObj) {
        // 创建绘制对象
        var shapeCtx = shapeObj.getContext("2d");
        // 设置绘制的相关样式
        shapeCtx.fillStyle = '#FF0000';
        // 绘制图形
        shapeCtx.fillRect(0,0,50,50);
    }

    // 绘制路劲
    function createLine(lineObj) {
        // 创建绘制对象
        var lineCtx = lineObj.getContext("2d");
        // 设置绘制的相关样式
        lineCtx.fillStyle = '#FF0000';
        // 设置线条起始坐标
        lineCtx.moveTo(0,0);
        // 设置线条结束坐标
        lineCtx.lineTo(100,0);
        // 开始绘制
        lineCtx.stroke();

        lineCtx.moveTo(100,0);
        lineCtx.lineTo(100,50);
        lineCtx.stroke();

        lineCtx.moveTo(100,50);
        lineCtx.lineTo(0,50);
        lineCtx.stroke();

    }

    // 绘制圆形
    function createArc(arcObj) {
        // 创建绘制对象
        var arcCtx = arcObj.getContext("2d");
        // 设置绘制的相关样式
        arcCtx.fillStyle = '#FF0000';
        // 开始
        arcCtx.beginPath();
        // 设置参数
        arcCtx.arc(95,50,40,0,2*Math.PI);
        // 开始绘制
        arcCtx.stroke();
    }

    // 绘制文本
    function createText(textObj) {
        // 创建绘制对象
        var textCtx = textObj.getContext("2d");
        // 设置字体
        textCtx.font="30px Arial";
        // 实心字
        textCtx.fillText("Hello World",10,50);
        // 空心字
        textCtx.strokeText("Hello World",10,100);
    }

    // 绘制图像
    function createShape(shapeObj) {
        // 创建绘制对象
        var shapeCtx = shapeObj.getContext("2d");
        // 设置绘制的相关样式
        shapeCtx.fillStyle = '#FF0000';
        // 绘制图形
        shapeCtx.fillRect(0,0,50,50);
    }

    // 绘制渐变图形
    function createShape(shapeObj) {
        // 创建绘制对象
        var shapeCtx = shapeObj.getContext("2d");
        // 设置绘制的相关样式
        shapeCtx.fillStyle = '#FF0000';
        // 绘制图形
        shapeCtx.fillRect(0,0,50,50);
    }

    // 调用绘制方法
    createShape(canvasShape);
    createLine(canvasLine);
    createText(canvasText)

})();