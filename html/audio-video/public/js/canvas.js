(function() {

    /*
    * <canvas> 标签用于绘制图像
    * 本身并没有绘制能力（它仅仅是图形的容器） - 您必须使用脚本来完成实际的绘图任务
    * IE9、Firefox、Opera、Chrome 和 Safari 支持 <canvas> 标签的属性及方法
    * 可用于在画布上绘制文本、线条、矩形、圆形等等
    * 
    * 颜色、样式和阴影：
        fillStyle	    设置或返回用于填充绘画的颜色、渐变或模式
        值：
            color	    指示绘图填充色的 CSS 颜色值。默认值是 #000000 或 颜色名
            gradient	用于填充绘图的渐变对象（线性 或 放射性）
            pattern	    用于填充绘图的 pattern 对象(createPattern(img,"repeat")用该方法填充图像)

        strokeStyle	    设置或返回用于笔触的颜色、渐变或模式
        值：
            同fillStyle
        shadowColor	    设置或返回用于阴影的颜色
        值：
            color：#ffffff | red
        shadowBlur	    设置或返回用于阴影的模糊级别
        值：
            nmber：默认0，值越大模糊级别越高
        shadowOffsetX	设置或返回阴影与形状的水平距离
        值：
            number：正值或负值
        shadowOffsetY	设置或返回阴影与形状的垂直距离
        值：同上

    * 方法：
        createLinearGradient(x0,y0,x1,y1)	创建线性渐变（用在画布内容上）
        值：返回值作为fillStyle或strokeStyle的值使用
            x0	渐变开始点的 x 坐标
            y0	渐变开始点的 y 坐标
            x1	渐变结束点的 x 坐标
            y1	渐变结束点的 y 坐标
        createPattern(img, repeat)	        在指定的方向上重复指定的元素
        值：img可以是图片、视频，或者其他 <canvas> 元素，可用于绘制/填充矩形、圆形或线条等等
            mage	    规定要使用的模式的图片、画布或视频元素
            repeat	    默认。该模式在水平和垂直方向重复
            repeat-x	该模式只在水平方向重复
            repeat-y	该模式只在垂直方向重复
            no-repeat	该模式只显示一次（不重复）
        createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
        值：同线性渐变概念，用addColorStop方法来设置渐变不同的颜色
            x0	渐变的开始圆的 x 坐标
            y0	渐变的开始圆的 y 坐标
            r0	开始圆的半径
            x1	渐变的结束圆的 x 坐标
            y1	渐变的结束圆的 y 坐标
            r1	结束圆的半径
        addColorStop(stop, color)	        规定渐变对象中的颜色和停止位置
        值：
            stop	介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
            color	在 stop 位置显示的 CSS 颜色值

    * 线条样式：
        lineCap	    设置或返回线条的结束端点样式
        值："round" 和 "square" 值会使线条略微变长
            butt	默认。向线条的每个末端添加平直的边缘
            round	向线条的每个末端添加圆形线帽
            square	向线条的每个末端添加正方形线帽
        lineJoin	设置或返回两条线相交时，所创建的拐角类型
        值：
            bevel	创建斜角
            round	创建圆角
            miter	默认。创建尖角
        lineWidth	设置或返回当前的线条宽度
        值：number 像素计
        miterLimit	设置或返回最大斜接长度
        值：斜接长度指的是在两条线交汇处内角和外角之间的距离，lineJoin值为miter时有效
            number	正数。规定最大斜接长度。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示


    * 矩形：
        rect()	        创建矩形
        值：使用 stroke() 或 fill() 方法在画布上实际地绘制矩形
            x	    矩形左上角的 x 坐标
            y	    矩形左上角的 y 坐标
            width	矩形的宽度，以像素计
            height	矩形的高度，以像素计
        fillRect()	    绘制"被填充"的矩形
        值：同rect，但是是填充的矩形，可通过fillStyle设置填充
        strokeRect()	绘制矩形（无填充）
        值：同rect，无填充矩形，可通过strokeStyle设置笔触颜色
        clearRect()	    在给定的矩形内清除指定的像素
        值：
            x	    要清除的矩形左上角的 x 坐标
            y	    要清除的矩形左上角的 y 坐标
            width	要清除的矩形的宽度，以像素计
            height	要清除的矩形的高度，以像素计


    * 路径:
        fill()	            填充当前绘图（路径）
            方法：默认填充黑色，通过fillStyle来设置，如果路径未关闭，那么 fill() 方法会从路径结束点到开始点之间添加一条线，以关闭该路径（正如 closePath() 一样），然后填充该路径
        stroke()	        绘制已定义的路径
        beginPath()	        起始一条路径，或重置当前路径
            方法：使用这些方法来创建路径 moveTo()、lineTo()、quadricCurveTo()、bezierCurveTo()、arcTo() 和 arc()
        moveTo()	        把路径移动到画布中的指定点，不创建线条
        closePath()	        创建从当前点回到起始点的路径
        lineTo()	        添加一个新点，然后在画布中创建从该点到最后指定点的线条
        clip()	            从原始画布剪切任意形状和尺寸的区域
            方法：一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）
        quadraticCurveTo()	创建二次贝塞尔曲线
            参数：
                cpx	贝塞尔控制点的 x 坐标
                cpy	贝塞尔控制点的 y 坐标
                x	结束点的 x 坐标
                y	结束点的 y 坐标
        bezierCurveTo()	    创建三次贝塞尔曲线
        arc()	            创建弧/曲线（用于创建圆形或部分圆）
            参数：
                x	    圆的中心的 x 坐标
                y	    圆的中心的 y 坐标
                r	    圆的半径
                sAngle	起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
                eAngle	结束角，以弧度计
                counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针
        arcTo()	            创建两切线之间的弧/曲线
        isPointInPath()	    如果指定的点位于当前路径中，则返回 true，否则返回 false

    * 转换：
        scale()	        缩放当前绘图至更大或更小
            参数：如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。如果您 scale(2,2)，那么绘图将定位于距离画布左上角两倍远的位置
                scalewidth	缩放当前绘图的宽度（1=100%，0.5=50%，2=200%，依次类推）
                scaleheight	缩放当前绘图的高度（1=100%，0.5=50%，2=200%，依次类推）
        rotate()	    旋转当前绘图
            参数：旋转只会影响到旋转完成后的绘图
                angle	旋转角度，以弧度计
                        如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算
                        实例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180

        translate()	    重新映射画布上的 (0,0) 位置
            参数：当您在 translate() 之后调用诸如 fillRect() 之类的方法时，值会添加到 x 和 y 坐标值上
                x	添加到水平坐标（x）上的值
                y	添加到垂直坐标（y）上的值
        transform()	    替换绘图的当前转换矩阵
            参数： 允许您缩放、旋转、移动并倾斜当前的环境，只会影响 transform() 方法调用之后的绘图
                a	水平缩放绘图
                b	水平倾斜绘图
                c	垂直倾斜绘图
                d	垂直缩放绘图
                e	水平移动绘图
                f	垂直移动绘图
        setTransform()	将当前转换重置为单位矩阵。然后运行 transform()
            参数：只会影响 setTransform() 方法调用之后的绘图，会重置前一个变换矩阵然后构建新的矩阵
                a	水平缩放绘图
                b	水平倾斜绘图
                c	垂直倾斜绘图
                d	垂直缩放绘图
                e	水平移动绘图
                f	垂直移动绘图


    * 文本:
        font	        设置或返回文本内容的当前字体属性
            值：
                font-style	规定字体样式。可能的值：normal|italic|oblique
                font-variant	规定字体变体。可能的值：normal|small-caps
                font-weight	规定字体的粗细。可能的值：
                normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900
                font-size/line-height	规定字号和行高，以像素计
                font-family	规定字体系列
                caption	使用标题控件的字体（比如按钮、下拉列表等）
                icon	使用用于标记图标的字体
                menu	使用用于菜单中的字体（下拉列表和菜单列表）
                message-box	使用用于对话框中的字体
                small-caption	使用用于标记小型控件的字体
                status-bar	使用用于窗口状态栏中的字体
        textAlign	    设置或返回文本内容的当前对齐方式
            值：
                start	默认。文本在指定的位置开始
                end	    文本在指定的位置结束
                center	文本的中心被放置在指定的位置
                left	文本在指定的位置开始
                right	文本在指定的位置结束
        textBaseline	设置或返回在绘制文本时使用的当前文本基线
            值：
                alphabetic	默认。文本基线是普通的字母基线
                top	        文本基线是 em 方框的顶端
                hanging	    文本基线是悬挂基线
                middle	    文本基线是 em 方框的正中
                ideographic	文本基线是表意基线
                bottom	    文本基线是 em 方框的底端

        fillText()	在画布上绘制"被填充的"文本
            参数：
                text	    规定在画布上输出的文本
                x	        开始绘制文本的 x 坐标位置（相对于画布）
                y	        开始绘制文本的 y 坐标位置（相对于画布）
                maxWidth	可选。允许的最大文本宽度，以像素计,safari不支持
        strokeText()	在画布上绘制文本（无填充）
            同fillText
        measureText()	返回包含指定文本宽度的对象
            参数：
                text	要测量的文本
            属性：
                width   返回测量文本的宽度


    * 图像绘制:
        drawImage()	向画布上绘制图像、画布或视频
            在画布上定位图像：
            JavaScript 语法：	context.drawImage(img,x,y);

            在画布上定位图像，并规定图像的宽度和高度：
            JavaScript 语法：	context.drawImage(img,x,y,width,height);

            剪切图像，并在画布上定位被剪切的部分：
            JavaScript 语法：	context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
            参数：
                img	        规定要使用的图像、画布或视频
                sx	        可选。开始剪切的 x 坐标位置
                sy      	可选。开始剪切的 y 坐标位置
                swidth	    可选。被剪切图像的宽度
                sheight	    可选。被剪切图像的高度
                x	        在画布上放置图像的 x 坐标位置
                y	        在画布上放置图像的 y 坐标位置
                width	    可选。要使用的图像的宽度（伸展或缩小图像）
                height	    可选。要使用的图像的高度（伸展或缩小图像）

    * 像素操作:
        width	返回 ImageData 对象的宽度
        height	返回 ImageData 对象的高度
        data	返回一个对象，其包含指定的 ImageData 对象的图像数据

        createImageData()	创建新的、空白的 ImageData 对象
        1. 以指定的尺寸（以像素计）创建新的 ImageData 对象：
        JavaScript 语法：	var imgData=context.createImageData(width,height);

        2. 创建与指定的另一个 ImageData 对象尺寸相同的新 ImageData 对象（不会复制图像数据）：
        JavaScript 语法：	var imgData=context.createImageData(imageData);
            参数：data属性返回数据，每四个值是一个像素分别代表R、G、B、A
                width	    ImageData 对象的宽度，以像素计
                height	    ImageData 对象的高度，以像素计
                imageData	另一个 ImageData 对象
        getImageData()	    返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据
            参数：
                x	    开始复制的左上角位置的 x 坐标（以像素计）
                y	    开始复制的左上角位置的 y 坐标（以像素计）
                width	要复制的矩形区域的宽度
                height	要复制的矩形区域的高度
        putImageData()	    把图像数据（从指定的 ImageData 对象）放回画布上
            参数：
                imgData	    规定要放回画布的 ImageData 对象
                x	        ImageData 对象左上角的 x 坐标，以像素计
                y	        ImageData 对象左上角的 y 坐标，以像素计
                dirtyX	    可选。水平值（x），以像素计，在画布上放置图像的位置
                dirtyY	    可选。垂直值（y），以像素计，在画布上放置图像的位置
                dirtyWidth	可选。在画布上绘制图像所使用的宽度
                dirtyHeight	可选。在画布上绘制图像所使用的高度


    * 合成:
        globalAlpha	                设置或返回绘图的当前 alpha 或透明值
            值：
                number	透明值。必须介于 0.0（完全透明） 与 1.0（不透明） 之间
        globalCompositeOperation	设置或返回新图像如何绘制到已有的图像上
            值：
                source-over	        默认。在目标图像上显示源图像
                source-atop	        在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的
                source-in	        在目标图像中显示源图像。只有目标图像之内的源图像部分会显示，目标图像是透明的
                source-out	        在目标图像之外显示源图像。只有目标图像之外的源图像部分会显示，目标图像是透明的
                destination-over	在源图像上显示目标图像
                destination-atop	在源图像顶部显示目标图像。目标图像位于源图像之外的部分是不可见的
                destination-in	    在源图像中显示目标图像。只有源图像之内的目标图像部分会被显示，源图像是透明的
                destination-out	    在源图像之外显示目标图像。只有源图像之外的目标图像部分会被显示，源图像是透明的
                lighter	            显示源图像 + 目标图像
                copy	            显示源图像。忽略目标图像
                xor	                使用异或操作对源图像与目标图像进行组合


    * 其他
        save()	        保存当前环境的状态
        restore()	    返回之前保存过的路径状态和属性
        createEvent()	 
        getContext()	 
        toDataURL()	 
    */
    // 获取画布对象
    var canvasShape = document.getElementById('canvasShape');
    var canvasLine = document.getElementById('canvasLine');
    var canvasArc = document.getElementById('canvasArc');
    var canvasText = document.getElementById('canvasText');
    var canvasImg = document.getElementById('canvasImg');
    var canvasGradient = document.getElementById('canvasGradient');
    var img4g = document.getElementById('img4g');

    // 绘制矩形
    function createShape(shapeObj) {
        // 创建绘制对象
        var shapeCtx = shapeObj.getContext("2d");
        // 设置绘制的相关样式
        // shapeCtx.fillStyle = '#FF0000';
        // shapeCtx.shadowColor = '#000000';
        // shapeCtx.shadowOffsetX = '2';
        // shapeCtx.shadowOffsetY = '2';
        // shapeCtx.shadowBlur = '20';
        // 绘制图形-实心矩形
        // shapeCtx.fillRect(10,10,50,50);

        // var pat = shapeCtx.createPattern(img4g, 'repeat');
        // shapeCtx.fillStyle = pat;
        // 填充图片矩形
        // shapeCtx.fillRect(0, 0, 180, 180);

        // 空心矩形
        // shapeCtx.strokeStyle = "#FF0000";
        // shapeCtx.strokeRect(20,20,150,100);

        // shapeCtx.fillStyle = '#FF0000';
        // shapeCtx.strokeStyle = '#fff';
        // shapeCtx.rect(20,20,150,100);
        // shapeCtx.fill();
        // shapeCtx.stroke();
        // shapeCtx.clearRect(30,30,30,30);

        shapeCtx.strokeStyle = 'black';
        shapeCtx.rect(10,10,100,100);
        shapeCtx.stroke();
        shapeCtx.clip();
        shapeCtx.fillStyle = "red";
        shapeCtx.fillRect(20, 20, 50, 50);
    }

    // 绘制路劲
    function createLine(lineObj) {
        // 创建绘制对象
        var lineCtx = lineObj.getContext("2d");
        // 设置绘制的线条颜色
        // lineCtx.strokeStyle = '#FF0000';
        // lineCtx.lineWidth = '10';
        // lineCtx.lineCap = 'round';

        // lineCtx.beginPath();
        // lineCtx.moveTo(20,20);
        // lineCtx.lineTo(20,100);
        // lineCtx.lineTo(70,100);
        // lineCtx.strokeStyle = "red";
        // lineCtx.closePath();
        // lineCtx.stroke();
        // lineCtx.fill();

        // 二次贝塞尔曲线
        lineCtx.beginPath();
        lineCtx.moveTo(20,20);
        lineCtx.quadraticCurveTo(20,100,200,20);
        lineCtx.stroke();
        
        // 三次贝塞尔曲线
        lineCtx.beginPath();
        lineCtx.moveTo(20,80);
        lineCtx.bezierCurveTo(20,150,200,150,200,80);
        lineCtx.stroke();

        // lineCtx.beginPath();
        // // 设置线条起始坐标
        // lineCtx.moveTo(10,10);
        // // 设置线条结束坐标
        // lineCtx.lineTo(100,10);
        // // 开始绘制
        // lineCtx.stroke();

        // lineCtx.beginPath();
        // lineCtx.lineCap = 'butt';
        // lineCtx.moveTo(10,30);
        // lineCtx.lineTo(100,30);
        // lineCtx.stroke();

        // lineCtx.beginPath();
        // lineCtx.lineJoin = 'round';
        // lineCtx.moveTo(30,0);
        // lineCtx.lineTo(30,100);
        // lineCtx.stroke();

        // lineCtx.beginPath();
        // lineCtx.lineJoin = 'round';
        // lineCtx.moveTo(30,100);
        // lineCtx.lineTo(50,70);
        // lineCtx.stroke();

        // lineCtx.beginPath();
        // lineCtx.lineJoin = 'bevel';
        // lineCtx.moveTo(50,70);
        // lineCtx.lineTo(80,100);
        // lineCtx.stroke();

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

        arcCtx.beginPath();
        arcCtx.fillStyle = 'red';
        // 设置参数
        arcCtx.arc(200,50,40,0,2*Math.PI);
        // 开始绘制
        arcCtx.fill();

        // 创建两条切线的弧
        arcCtx.beginPath(); 
        arcCtx.moveTo(20,20);           // 创建起始点
        arcCtx.lineTo(100,20);          // 创建水平线 
        arcCtx.arcTo(150,20,150,70,50); // 创建弧
        arcCtx.lineTo(150,120);         // 创建垂直线
        arcCtx.stroke();                // 画出来

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
    function createImg(imgObj) {
        // 创建绘制对象
        var imgCtx = imgObj.getContext("2d");
        // 绘制图像
        imgCtx.drawImage(img4g, 0, 0);
    }

    // 绘制渐变图形
    function createGradient(gradientObj) {
        /*
            createLinearGradient(x,y,x1,y1) - 创建线条渐变
            createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
        */
        // 创建绘制对象
        var gradientCtx = gradientObj.getContext("2d");
        // 创建渐变
        var grd = gradientCtx.createLinearGradient(0,0,200,0);
        // var grdR = gradientCtx.createRadialGradient(0,0,);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        
        // 填充渐变
        gradientCtx.fillStyle = grd;
        // 渐变矩形
        gradientCtx.fillRect(10,10,150,80);

        gradientCtx.moveTo(200,0);
        // 设置线条结束坐标
        gradientCtx.lineTo(200,100);
        // 开始绘制
        gradientCtx.stroke();
    }

    // 调用绘制方法
    createShape(canvasShape);
    createLine(canvasLine);
    createText(canvasText);
    createArc(canvasArc);
    createImg(canvasImg);
    createGradient(canvasGradient);

})();