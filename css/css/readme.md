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

css轮廓：

    * 轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
    * 轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。
    * 所有CSS 轮廓（outline）属性：

        outline	在一个声明中设置所有的轮廓属性	
            outline-color
            outline-style
            outline-width
            inherit	

        outline-color	设置轮廓的颜色	
            color-name
            hex-number
            rgb-number
            invert
            inherit	
        outline-style	设置轮廓的样式
            none
            dotted
            dashed
            solid
            double
            groove
            ridge
            inset
            outset
            inherit
        outline-width	设置轮廓的宽度
            thin
            medium
            thick
            length
            inherit

    * outline是不占空间的，既不会增加额外的width或者height（这样不会导致浏览器渲染时出现reflow或是  repaint）
    * outline有可能是非矩形的（火狐浏览器下）

CSS margin(外边距)：

    * 属性定义元素周围的空间
    * 可能的值
        auto	设置浏览器边距。这样做的结果会依赖于浏览器
        length	定义一个固定的margin（使用像素，pt，em等）
        %	    定义一个使用百分比的边距
        Margin可以使用负值，重叠的内容
    * 单边外边距属性
        可以指定不同的侧面不同的边距：
            margin-top:100px;
            margin-bottom:100px;
            margin-right:50px;
            margin-left:50px;

    * 简写属性: 
        margin: value1(上下) value2(左右);
        margin: value1(上) value2(左右) value3(下)
        margin: value1(上) value2(右) value3(下) value4(左)
        margin: value(上下左右)

CSS padding（填充）：

    * 是一个简写属性，定义元素边框与元素内容之间的空间，即上下左右的内边距
    * 填充区域将会受到元素背景颜色的填充
    * 可能的值：
        length	定义一个固定的填充(像素, pt, em,等)
        %	    使用百分比值定义一个填充    
    * 单边内边距属性：
        padding-top:25px;
        padding-bottom:25px;
        padding-right:50px;
        padding-left:50px;
        
    * 简写属性: 同margin
    * 设置负值无效
    * 对于margin和padding百分比按照父元素的宽计算，只发生在默认的writing-mode: horizontal-tb; 和direction: ltr; 的情况下。当书写模式变为纵向时，参照会变成包含块的高度。对于定位元素备份比是按照定位了的父元素来计算(未定位的父元素会被跳过)。

CSS 分组 和 嵌套 选择器：

    1. 分组选择器

        * 样式表中很多具有相同样式的元素，为了减少代码，可使用分组选择器
        * 例：h1,p,h2 {colot: green;}

    2. 嵌套选择器

        * 它可能适用于选择器内部的选择器的样式。
        * 例：
            p{ }: 为所有 p 元素指定一个样式。
            .marked{ }: 为所有 class="marked" 的元素指定一个样式。
            .marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。
            p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。

CSS 尺寸：
    * CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距
    * 所有CSS 尺寸 (Dimension)属性：
        height	    设置元素的高度。
        line-height	设置行高。
        max-height	设置元素的最大高度。
        max-width	设置元素的最大宽度。
        min-height	设置元素的最小高度。
        min-width	设置元素的最小宽度。
        width	    设置元素的宽度。

CSS Display(显示) 与 Visibility（可见性）：
    * display属性设置一个元素应如何显示，visibility属性指定一个元素应可见还是隐藏
    * 隐藏元素：
        两种方法会产生不同的结果：display:none或visibility:hidden
        隐藏后不占用空间不影响布局：display:none
        隐藏后仍占用空间影响布局：visibility:hidden
    
    * Display - 块和内联元素：
        块元素是一个元素，占用了全部宽度，在前后都是换行符(宽高内外边距都可控)
        内联元素只需要必要的宽度，不强制换行(宽高内外边距都不可变)
        display: inline(内联) | block(块级) | inline-block(行内块)

CSS Position(定位)：

    * position 属性指定了元素的定位类型
    * 五个值：
        static          默认值，遵循正常文档流对象
        relative        相对定位元素的定位是相对其他正常位置，所占空间不会改变
        fixed           元素位置相对于浏览器窗口是固定位置，不随窗口滚动而移动，不占据空间会和其他元素                 重叠，在ie7-8下需描述doctype才能支持
        absolute        绝对定位，位置相对于最近的已定位元素，无定位父元素相对于html，不占空间，和元                  素重叠
        sticky          粘性定位，基于用户的滚动位置来定位。依赖于用户的滚动，在 position:relative                   与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚                 动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。元素定位                 表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top,                     right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个                  阈值其中之一，才可使粘性定位生效
    * 重叠的元素:
        元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
        z-index属性指定了一个元素的堆叠顺序
        具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面

CSS 布局 - Overflow：

    * 可以控制内容溢出元素框时在对应的元素区间内添加滚动条
    * 属性有以下值：
        visible	默认值。内容不会被修剪，会呈现在元素框之外。
        hidden	内容会被修剪，并且其余内容是不可见的。
        scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
        auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
        inherit	规定应该从父元素继承 overflow 属性的值。
    * overflow 属性只工作于指定高度的块元素上

CSS Float(浮动)：

   * 会使元素向左或向右移动，其周围的元素也会重新排列。
   * 往往是用于图像，但它在布局时一样非常有用
   * 元素的水平方向浮动，意味着元素只能左右移动而不能上下移动
   * 一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止
   * 浮动元素之后的元素将围绕它。浮动元素之前的元素将不会受到影响
   * 彼此相邻的浮动元素：
        如果你把几个浮动的元素放到一起，如果有空间的话，它们将彼此相邻
   * 清除浮动 - 使用 clear

CSS 布局 - 水平 & 垂直对齐：
    
    * 元素居中对齐
        设置元素宽度
        设置外边距margin: auto
    * 文本居中对齐
        设置text-align: center
    * 图片居中对齐
        设置图片为块元素
        设置margin: auto
    * 左右对齐-使用定位方式
        使用position: absolute;属性来对齐元素
    * 左右对齐-float方式
        设置float: right;
    * 垂直居中对齐-使用padding
        使用padding: 20px
    * 垂直居中对齐-使用line-height
        首先设置高度height: 200px
        使用line-height: 200px
        如果多行文本：
        display: inle-block;
        line-height: 1.5;
        vertical-align: middle;
    * 垂直居中 - 使用 position 和 transform
        .center { 
            height: 200px;
            position: relative;
            border: 3px solid green; 
        }
        
        .center p {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

CSS 组合选择符：

    * CSS组合选择符包括各种简单选择符的组合方式。
    * 在 CSS3 中包含了四种组合方式:
        1. 后代选择器(以空格分隔)
            后代选择器用于选取某元素的后代元素
            例：div p {}    div元素中的p元素
        2. 子元素选择器(以大于号分隔）
            与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素
            例：div>p {}    div元素中所有直接子元素
        3. 相邻兄弟选择器（以加号分隔）
            可选择紧接在另一元素后的元素，且二者有相同父元素
            例：div+p {}    div元素后的第一个p元素
        4. 普通兄弟选择器（以破折号分隔）
            后续兄弟选择器选取所有指定元素之后的相邻兄弟元素
            例：div~p {}    div元素之后的所有相邻兄弟元素p

CSS 伪类(Pseudo-classes)：

    * 伪类是用来添加一些选择器的特殊效果
    * anchor伪类：
        a:link {color:#FF0000;} /* 未访问的链接 */
        a:visited {color:#00FF00;} /* 已访问的链接 */
        a:hover {color:#FF00FF;} /* 鼠标划过链接 */
        a:active {color:#0000FF;} /* 已选中的链接 */
    * 伪类和CSS类：
        伪类可以与 CSS 类配合使用：a.red:visited {color:#FF0000;}
    * :first-child 伪类
        使用 :first-child 伪类来选择父元素的第一个子元素。
        注意：在IE8的之前版本必须声明<!DOCTYPE> ，这样 :first-child 才能生效
    * CSS - :lang 伪类
        :lang 伪类使你有能力为不同的语言定义特殊的规则
        注意：IE8必须声明<!DOCTYPE>才能支持;lang伪类
        为属性值为 no 的q元素定义引号的类型：q:lang(no) {quotes: "~" "~";}

    * 所有伪类：
        :checked	    input:checked	选择所有选中的表单元素
        :disabled	    input:disabled	选择所有禁用的表单元素
        :empty	        p:empty	选择所有没有子元素的p元素
        :enabled	    input:enabled	选择所有启用的表单元素
        :first-of-type	p:first-of-type	选择每个父元素是p元素的第一个p子元素
        :in-range	    input:in-range	选择元素指定范围内的值
        :invalid	    input:invalid	选择所有无效的元素
        :last-child	    p:last-child	选择所有p元素的最后一个子元素
        :last-of-type	p:last-of-type	选择每个p元素是其母元素的最后一个p元素
        :not(selector)	:not(p)	选择所有p以外的元素
        :nth-child(n)	p:nth-child(2)	选择所有 p 元素的父元素的第二个子元素
        :nth-last-child(n)	p:nth-last-child(2)	选择所有p元素倒数的第二个子元素
        :nth-last-of-type(n)	p:nth-last-of-type(2)	选择所有p元素倒数的第二个为p的子元素
        :nth-of-type(n)	p:nth-of-type(2)	选择所有p元素第二个为p的子元素
        :only-of-type	p:only-of-type	选择所有仅有一个子元素为p的元素
        :only-child	p:only-child	选择所有仅有一个子元素的p元素
        :optional	input:optional	选择没有"required"的元素属性
        :out-of-range	input:out-of-range	选择指定范围以外的值的元素属性
        :read-only	input:read-only	选择只读属性的元素属性
        :read-write	input:read-write	选择没有只读属性的元素属性
        :required	input:required	选择有"required"属性指定的元素属性
        :root	root	选择文档的根元素
        :target	#news:target	选择当前活动#news元素(点击URL包含锚的名字)
        :valid	input:valid	选择所有有效值的属性
        :link	a:link	选择所有未访问链接
        :visited	a:visited	选择所有访问过的链接
        :active	a:active	选择正在活动链接
        :hover	a:hover	把鼠标放在链接上的状态
        :focus	input:focus	选择元素输入后具有焦点
        :first-letter	p:first-letter	选择每个<p> 元素的第一个字母
        :first-line	p:first-line	选择每个<p> 元素的第一行
        :first-child	p:first-child	选择器匹配属于任意元素的第一个子元素的 <p> 元素
        :before	p:before	在每个<p>元素之前插入内容
        :after	p:after	在每个<p>元素之后插入内容
        :lang(language)	p:lang(it)	为<p>元素的lang属性选择一个开始值

CSS 伪元素：

    * :first-line 伪元素
        用于向文本的首行设置特殊样式
        例：p:first-line{color:#ff0000;font-variant:small-caps;} 对p元素第一行文本进行格式化
        只能用于块级元素
        可用属性：font、color、background、word-spacing、letter-spacing、text-decoration、vertical-align、text-transform、line-height、clear
    
    * :first-letter 伪元素
        用于向文本的首字母设置特殊样式
        其它同:first-line
    
    * 伪元素和CSS类
        伪元素可以结合CSS类： p.article:first-letter {color:#ff0000;}
    
    * 多个伪元素
        可以结合多个伪元素来使用
    
    * :before 伪元素
        可以在元素的内容前面插入新内容

    * :after 伪元素
        可以在元素的内容之后插入新内容

CSS 媒体类型：

    * 媒体类型允许你指定文件将如何在不同媒体呈现。该文件可以以不同的方式显示在屏幕上，在纸张上，或听觉浏览器等等
    * @media 规则

        @media 规则允许在相同样式表为不同媒体设置不同的样式
        例：浏览器屏幕上显示一个 14 像素的 Verdana 字体样式。但是如果页面打印，将是 10 个像素的 Times 字体
        @media screen
        {
            p.test {font-family:verdana,sans-serif;font-size:14px;}
        }
        @media print
        {
            p.test {font-family:times,serif;font-size:10px;}
        }
        @media screen,print
        {
            p.test {font-weight:bold;}
        }

    * 其他媒体类型
        all	        用于所有的媒体设备。
        aural	    用于语音和音频合成器。
        braille	    用于盲人用点字法触觉回馈设备。
        embossed	用于分页的盲人用点字法打印机。
        handheld	用于小的手持的设备。
        print	    用于打印机。
        projection	用于方案展示，比如幻灯片。
        screen	    用于电脑显示器。
        tty	        用于使用固定密度字母栅格的媒体，比如电传打字机和终端。
        tv	        用于电视机类型的设备。

CSS 属性 选择器：

    * 具有特定属性的HTML元素样式
    * 具有特定属性的HTML元素样式不仅仅是class和id。
    * 注意：IE7和IE8需声明!DOCTYPE才支持属性选择器！IE6和更低的版本不支持属性选择器

    * 属性选择器：
        把包含标题（title）的所有元素变为蓝色：
            [title]
            {
                color:blue;
            }

    * 属性和值选择器：
        改变了标题title='runoob'元素的边框样式:
        [title=runoob]
        {
            border:5px solid green;
        }

    * 属性和值的选择器 - 多值
        包含指定值的title属性的元素样式的例子，使用（~）分隔属性和值:[title~=hello] { color:blue; }
        包含指定值的lang属性的元素样式的例子，使用（|）分隔属性和值:[lang|=en] { color:blue; }
    * 表单样式
        属性选择器样式无需使用class或id的形式:
            input[type="text"]{}
            input[type="button"]{}

    * CSS 属性选择器 *=, |=, ^=, $=, *= 的区别
