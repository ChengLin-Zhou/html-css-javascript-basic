css基础整理

css简介：

    * 层叠样式表
    * 样式定义如何显示HTML元素
    * 样式存储在样式表中
    * 把样式添加到HTML4.0中，是为了解决内容与表现分离的问题
    * 外部样式表可提高工作效率便于维护
    * 外部样式表存储在css文件中
    * 多个样式定义可层叠为一

css语法：

    * css规则由两个部分组成：选择器，以及一条或多条声明
    * 选择器是您要改变样式的HTML元素或者类和id名
    * 每条声明由一个属性和一个值组成
    * 属性是您希望设置的样式属性，每个属性有一个值被冒号分开
    * 例：h1 {colot: blue; font-size: 12px;}

css注释：

    * 注释用来解释你的代码，浏览器会忽略它
    * 以/*开始，以*/结束
    * 例：/*这是个注释*/

css选择器：id和class

    * id选择器
        为标有特定id的HTML元素指定特定的样式
        以id属性来设置id选择器，css中id选择器以#定义
        例：#para {text-align: center;}
    * class选择器
        用于描述一组元素的样式，区别于id选择器可在多个元素中使用
        在HTML中以class属性表示，在css中类选择器以.号显示
        例：.center {text-align: center;}
        可以指定特定的HTML元素使用class，p.center{text-align: center}

css创建：

    * 读取到一个样式表时，浏览器会根据它来格式化HTML文档
    * 插入样式表三种方法:
        1. 外部样式表：内容与表现分离，便于维护
            例：<link rel="stylesheet" type="text/css" href="style.css">
        2. 内部样式表：单文档单独需要特殊样式时使用
            例：<style>p {text-align: center}</style>
        3. 内联样式：表现与内容混杂，仅在样式需要在一个元素上应用一次是使用
            例：<p style="text-align: center;"></p>

    * 多重样式：
        某些属性在不同的样式表中被同样的选择器定义，属性值将从更具体的样式表中被继承过来
    * 多重样式优先级：
        内联样式>内部样式>外部样式>浏览器默认样式
    
        下列是一份优先级逐级增加的选择器列表：

        通用选择器（*）
        元素(类型)选择器
        类选择器
        属性选择器
        伪类
        ID 选择器
        内联样式
        !important 规则例外
        当 !important 规则被应用在一个样式声明中时,该样式声明会覆盖CSS中任何其他的声明, 无论它处在声明列表中的哪里. 尽管如此, !important规则还是与优先级毫无关系.使用 !important 不是一个好习惯，因为它改变了你样式表本来的级联规则，从而使其难以调试。

        一些经验法则：

        Always 要优化考虑使用样式规则的优先级来解决问题而不是          !important
        Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important
        Never 永远不要在全站范围的 css 上使用 !important
        Never 永远不要在你的插件中使用 !important

        权重计算:

        1. 内联样式表的权值最高 1000；
        2. ID 选择器的权值为 100
        3. Class 类选择器的权值为 10
        4. HTML 标签选择器的权值为 1

        CSS 优先级法则：
        A 选择器都有一个权值，权值越大越优先；
        B 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
        C 创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；
        D 继承的CSS 样式不如后来指定的CSS 样式；
        E 在同一组属性设置中标有“!important”规则的优先级最大

css背景：  

    * 背景效果
        background-color：背景颜色
            例：body {background-color: "#fff000"}
            属性值三种方式：十六进制、RGB、颜色名称
        background-image：背景图像
            例：body {background-image: url('paper.gif')}
        background-repeat：背景图像-水平或垂直平铺
            例：body {
                background-image: url('p.png');
                background-repeat: repeat-x;
            }
        background-position：背景图像-设置定位
            例：body {
                background-iamge: url('p.png');
                background-repeat: no-repeat;
                background-position: top right;
            }
        background-attachment：背景图像是否随着页面的其余部分滚动

        简写：body {
            background: #ffffff url('img_tree.png') no-repeat right top;
        }

css文本格式：

    * 文本颜色：
        颜色属性被用来设置文字的颜色
        属性值的三种方式：十六进制、RGB、颜色名称
        例：body {color: "#fff" | RGB(255,0,0) | red}

    * 文本对齐方式：
        文本排列属性用来设置文本的水平对齐方式
        文本可居中、左右、两端对齐
        例：body {
            text-align: center | right | left | justify
        }

    * 文本修饰：
        text-decoration属性来设置或删除文本的装饰
        删除链接的下划线：a {text-decoration: none | overline | line-through | underline}

    * 文本转换：
        用来指定一个文本中的大写和小写字母
        例：p {text-transform: uppercase | lowercase | capitalize}

    * 文本缩进：
        用来指定文本的第一行的缩进
        例：p {text-indent: 50px}

    * 所有文本属性
        color	        设置文本颜色
        direction	    设置文本方向。
        letter-spacing	设置字符间距
        line-height	    设置行高
        text-align	    对齐元素中的文本
        text-decoration	向文本添加修饰
        text-indent	    缩进元素中文本的首行
        text-shadow	    设置文本阴影
        text-transform	控制元素中的字母大小写
        unicode-bidi	设置或返回文本是否被重写 
        vertical-align	设置元素的垂直对齐
        white-space	    设置元素中空白的处理方式
        word-spacing	设置字间距

css字体：

    font	        在一个声明中设置所有的字体属性
    font-family	    指定文本的字体系列
    font-size	    指定文本的字体大小
    font-style	    指定文本的字体样式
    font-variant	以小型大写字体或者正常字体显示文本。
    font-weight	    指定字体的粗细。

css链接：

    * 链接的样式
        可使用任何css属性
        链接状态四种：
            a:link - 正常，未访问过的链接
            a:visited - 用户已访问过的链接
            a:hover - 当用户鼠标放在链接上时
            a:active - 链接被点击的那一刻

        当设置为若干链路状态的样式，也有一些顺序规则：
            a:hover 必须跟在 a:link 和 a:visited后面
            a:active 必须跟在 a:hover后面

css列表：

    * css列表属性作用如下：
        设置不同的列表项标记为有序列表
        设置不同的列表项标记为无序列表
        设置列表项标记为图像

    * 列表：
        两种类型：
            无序列表 - 列表项标记用特殊图形（如小黑点、小方框等）
            有序列表 - 列表项的标记有数字或字母

    * 不同的列表项标记：
        ul.a {list-style-type: circle;}
        ul.b {list-style-type: square;}
        ol.c {list-style-type: upper-roman;}
        ol.d {list-style-type: lower-alpha;}

    * 作为列表项标记的图像：
        ul
        {
            list-style-image: url('sqpurple.gif');
        }

    * 浏览器兼容性解决方案
        ul
        {
            list-style-type: none;
            padding: 0px;
            margin: 0px;
        }
        ul li
        {
            background-image: url(sqpurple.gif);
            background-repeat: no-repeat;
            background-position: 0px 5px; 
            padding-left: 14px; 
        }

    * 列表-简写属性

        ul
        {
            list-style: square url("sqpurple.gif");
        }

        可以按顺序设置如下属性：

            list-style-type
            list-style-position (有关说明，请参见下面的CSS属性表)
            list-style-image
            如果上述值丢失一个，其余仍在指定的顺序，就没关系

    * 所有列表属性：

        list-style	简写属性。用于把所有用于列表的属性设置于一个声明中
        list-style-image	将图象设置为列表项标志。
        list-style-position	设置列表中列表项标志的位置。
        list-style-type	设置列表项标志的类型。

CSS 表格:

    * 表格边框
        指定CSS表格边框，使用border属性
        例：table, th, td
            {
                border: 1px solid black;
            }

    * 折叠边框
        border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开
        例：table
            {
                border-collapse:collapse;
            }
            table,th, td
            {
                border: 1px solid black;
            }

    * 表格宽度和高度:
        Width和height属性定义表格的宽度和高度。
        table 
        {
            width:100%;
        }
        th
        {
            height:50px;
        }

    * 表格文字对齐：
        表格中的文本对齐和垂直对齐属性。
        td
        {
            text-align:right;
        }
        td
        {
            height:50px;
            vertical-align:bottom;
        }

    * 表格填充:
        td
        {
            padding:15px;
        }

    * 表格颜色：
        table, td, th
        {
            border:1px solid green;
        }
        th
        {
            background-color:green;
            color:white;
        }

CSS 盒子模型：

    * 所有HTML元素可以看作盒子，CSS中，"box model"这一术语是用来设计和布局时使用
    * CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容
    * 盒模型允许我们在其它元素和周围元素边框之间的空间放置元素

    * 盒模型包含的内容：

        Margin(外边距) - 清除边框外的区域，外边距是透明的。
        Border(边框) - 围绕在内边距和内容外的边框。
        Padding(内边距) - 清除内容周围的区域，内边距是透明的。
        Content(内容) - 盒子的内容，显示文本和图像

    * 元素的宽度和高度: 
        当您指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，你还必须添加填充，边框和边距

        最终元素的总宽度计算公式是这样的：

            总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

        元素的总高度最终计算公式是这样的：

            总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

    * 浏览器的兼容性问题：

        一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。

        虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。也就是，不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。

        IE8 及更早IE版本不支持设置填充的宽度和边框的宽度属性。

        解决IE8及更早版本不兼容问题可以在HTML页面声明 <!DOCTYPE html>即可。

CSS 边框属性：

    border	简写属性，用于把针对四个边的属性设置在一个声明。
    border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。
    border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。
    border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。
    border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。
    border-bottom-color	设置元素的下边框的颜色。
    border-bottom-style	设置元素的下边框的样式。
    border-bottom-width	设置元素的下边框的宽度。
    border-left	简写属性，用于把左边框的所有属性设置到一个声明中。
    border-left-color	设置元素的左边框的颜色。
    border-left-style	设置元素的左边框的样式。
    border-left-width	设置元素的左边框的宽度。
    border-right	简写属性，用于把右边框的所有属性设置到一个声明中。
    border-right-color	设置元素的右边框的颜色。
    border-right-style	设置元素的右边框的样式。
    border-right-width	设置元素的右边框的宽度。
    border-top	简写属性，用于把上边框的所有属性设置到一个声明中。
    border-top-color	设置元素的上边框的颜色。
    border-top-style	设置元素的上边框的样式。
    border-top-width	设置元素的上边框的宽度。