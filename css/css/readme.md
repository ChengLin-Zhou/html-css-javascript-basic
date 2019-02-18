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


----------------------------- css3基础内容 ------------------------------

css3简介：

    * css3已完全向后兼容，所以你就不必改变现有的设计。浏览器将永远支持css2
    * css3模块：
        选择器、盒模型、背景和边框、文字特效、2D/3D转换、动画、多列布局、用户界面
    * css3建议：
        规范仍在开发，许多新的属性已在现在浏览器使用

css3边框：

    * 可以创建圆角边框，添加阴影框，并作为边界的形象而不适用设计程序
    * 边框属性：
        border-radius：圆角
            css2中添加圆角，需在每个角落使用不同的图像
            css3中用border-radius:25px;创建圆角
            浏览器支持IE9+、chrome5.0(4.0使用-webkit-)、Firefox4.0(3.0使用-moz-)、safari5.0(3.1使用-webkit-)、opera10.5
            简写值：同margin
            单独设置某个角：border-top-left-radius\border-top-right-radius\border-bottom-left-radius\border-bottom-left-radius
        box-shadow：盒阴影
            css3中用box-shadow属性来添加阴影
        border-image：边界图片
            使用图像创建一个边框

css3背景：

    * 新的背景属性：
        background-image
            浏览器支持：IE9+、chrome4.0、Firefox3.6、safari3.1、opera11.5
        background-size
            浏览器支持：IE9+、chrome4.0(1.0 -webkit-)、Firefox4(3.6 -moz-)、safari4.1(3.1 -webkit-)、opera11.5(10.0 -o-)
        background-origin
            浏览器支持：IE9+、chrome1.0、Firefox4.0、safari3.0、opera10.5
        background-clip
            浏览器支持：IE9+、chrome4.0、Firefox4.0、safari3.0、opera10.5
    

css3渐变：

    * 让你在两个或多个指定的颜色之间显示平稳的过渡
    * 以前是用图像生成、现在是浏览器生成减小下载时间和带宽使用，放大效果更好
    * 两种类型：
        线性渐变：向下/向上/向左/向右/对角方向
            语法：background: linear-gradient(direction(left top), color1, color2, ...)
            使用角度：
                你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向
                语法：background: linear-gradient(angle, color-stop1, color-stop2);
                角度是指水平线和渐变线之间的角度，逆时针方向计算
                0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变
                换算公式 90 - x = y 其中 x 为标准角度，y为非标准角度。
            使用透明度：
                渐变也支持透明度（transparent），可用于创建减弱变淡的效果
                为了添加透明度，我们使用 rgba() 函数来定义颜色结点
            重复的线性渐变：
                background: repeating-linear-gradient(red, yellow 10%, green 20%);

        径向渐变：由他们的中心定义
            创建一个径向渐变，你也必须至少定义两种颜色结点
            可以指定渐变的中心、形状（圆形或椭圆形）、大小
            语法：background: radial-gradient(center, shape size, start-color, ..., last-color);
            重复的径向渐变：
                repeating-radial-gradient() 函数用于重复径向渐变

    * 浏览器兼容：IE10	chrome26(10 -webkit-)	firefox16(3.6 -moz-)	safari6.1(5.1 -webkit-)opera12.1(11.1 -o-)


css3文本效果：

    * 新的文本属性：
        text-shadow：文本阴影
            浏览器：chrome4、IE10、Firefox3.5、safari4.0、opera9.5
        box-shadow：盒子阴影
            浏览器：chrome10(4 -webkit-)、IE9、Firefox4(3.5 -moz-)、safari5(3.1 -webkit-)、opera10.5
        text-overflow：文本溢出
            浏览器：chrome4、IE6、Firefox7、safari3.1、opera11(9 -o-)
        word-wrap：文本换行
            浏览器：chrome23、IE5.5、Firefox3.5、safari6.1、opera12.1
        word-break：单词拆分换行
            浏览器：chrome4、IE5.5、Firefox15、safari3.1、opera15

css3字体：

    * @font-face来设置字体，只需要将字体文件包含在网站中，会自动下载
    * 浏览器支持：
        chrome4、ie9、Firefox3.5、safari3.2、opera10
        IE9+, Firefox, Chrome, Safari, 和 Opera 支持 WOFF (Web Open Font Format) 字体.
        Firefox, Chrome, Safari, 和 Opera 支持 .ttf(True Type字体)和.otf(OpenType)字体字体类型
        Chrome, Safari 和 Opera 也支持 SVG 字体/折叠.
        IE同样支持 EOT (Embedded OpenType) 字体.
        注意： IE8 以及更早的版本不支持新的 @font-face 规则

    * 定义：
        在@font-face规则中，需先定义字体的名称，然后指向该字体文件
        例：@font-face {font-family:myFont;src:url(sansation_light.woff)}

    * 使用：
        通过font-family引用字体名称
        例 div{font-family:myFont;}

css3 2D转换：

    * css3转换可以对元素进行移动、缩放、转动、拉长或拉伸
    * 浏览器支持：
        transform\transform-origin：chrome36(4 -webkit-)、IE10(9 -ms-)、firefox16(3.5 -moz-)、safari3.2 -webkit-、opera23(15 -webkit- 12.1\10.5 -o-)

    * 2D转换：
        translate()：从当前元素位置移动
            例：div{
                    transform: translate(50px,100px);
                    -ms-transform: translate(50px,100px); /* IE 9 */
                    -webkit-transform: translate(50px,100px); /* Safari and Chrome */
                }
        rotate()：在一个给定度数顺时针旋转，允许负值，逆时针旋转
            例：transform: rotate(30deg)
        scale()：元素增加或缩小的大小，取决于宽度和高度的参数
            例：transform: scale(2, 3);
        skew()：两个参数，表示X轴和Y轴倾斜的角度，第二个参数为空，则默认为0，参数为负表示向相反方向倾斜
            例：transform: skew(30deg,20deg);
        matrix()：有六个参数，包含旋转，缩放，移动（平移）和倾斜功能
            例：transform:matrix(0.866,0.5,-0.5,0.866,0,0);

    * 2D 转换方法：
        matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
        translate(x,y)	定义 2D 转换，沿着 X 和 Y 轴移动元素。
        translateX(n)	定义 2D 转换，沿着 X 轴移动元素。
        translateY(n)	定义 2D 转换，沿着 Y 轴移动元素。
        scale(x,y)	定义 2D 缩放转换，改变元素的宽度和高度。
        scaleX(n)	定义 2D 缩放转换，改变元素的宽度。
        scaleY(n)	定义 2D 缩放转换，改变元素的高度。
        rotate(angle)	定义 2D 旋转，在参数中规定角度。
        skew(x-angle,y-angle)	定义 2D 倾斜转换，沿着 X 和 Y 轴。
        skewX(angle)	定义 2D 倾斜转换，沿着 X 轴。
        skewY(angle)	定义 2D 倾斜转换，沿着 Y 轴。

css3 3D转换：

    * 3D转换方法：
        rotateX()：围绕其在一个给定度数X轴旋转的元素
            例：transform: rotateX(120deg);
        rotateY()：围绕其在一个给定度数Y轴旋转的元素
            例：transform: rotateY(120deg);
    * 浏览器支持：
        transform/transform-origin/transform-style/perspective/perspective-origin/backface-visibility：
            chrome36(12 -webkit-)、IE10、Firefox16(10 -moz-)、safari4 -webkit-、opera23(15 -webkit-)

    * 转换属性：
        transform	        向元素应用 2D 或 3D 转换。
        transform-origin	允许你改变被转换元素的位置。
        transform-style	    规定被嵌套元素如何在 3D 空间中显示。
        perspective	        规定 3D 元素的透视效果。
        perspective-origin	规定 3D 元素的底部位置。
        backface-visibility	定义元素在不面对屏幕时是否可见。

    * 3D 转换方法：
        matrix3d(n,n,n,n,n,n,
        n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
        translate3d(x,y,z)	定义 3D 转化。
        translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
        translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
        translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
        scale3d(x,y,z)	定义 3D 缩放转换。
        scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
        scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
        scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
        rotate3d(x,y,z,angle)	定义 3D 旋转。
        rotateX(angle)	定义沿 X 轴的 3D 旋转。
        rotateY(angle)	定义沿 Y 轴的 3D 旋转。
        rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
        perspective(n)	定义 3D 转换元素的透视视图。

css3过渡：

    * 浏览器支持：
        transition/transition-delay/transition-duration/transition-property/transition-timing-function：
            chrome26(4.0 -webkit-)、IE10、Firefox16(4.0 -moz-)、safari6.1(3.1 -webkit-)、opera12.1(10.5 -o-)

    * 元素从一中样式逐渐改变为另一种效果
    * 实现：
        1. 指定要添加效果的css属性
        2. 指定效果的持续时间
        例：transtion: width 2s;
    * 多项改变：
        例：transtion: width 2s, height 2s, transform 2s;
    * 过渡属性：
        transition	        简写属性，用于在一个属性中设置四个过渡属性。
        transition-property	规定应用过渡的 CSS 属性的名称。
        transition-duration	定义过渡效果花费的时间。默认是 0。
        transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。
        transition-delay	规定过渡效果何时开始。默认是 0。

css3动画：

    * 创建动画，需要使用@keyframes规则，指定一个css样式和动画逐步从目前样式更改为新样式
    * 浏览器支持：
        @keyframes/animation：
            chrome43(4 -webkit-)、IE10、firefox16(5 -moz-)、safari9(4 -webkit-)、opera30(15 -webkit- 12 -o-)
    * 实现：
        利用@keyframes规则创建动画：
            @keyframes myFirst{
                from {background: red;}
                to {background: yellow;}
                // 也可以用0%-100%替换from和to
            }
        利用animation将动画绑定到元素上：
            animation: myFirst 5s;
    * CSS3的动画属性：
        @keyframes	规定动画。
        animation	所有动画属性的简写属性，除了 animation-play-state 属性。
        animation-name	规定 @keyframes 动画的名称。
        animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。
        animation-timing-function	规定动画的速度曲线。默认是 "ease"。
        animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
        animation-delay	规定动画何时开始。默认是 0。
        animation-iteration-count	规定动画被播放的次数。默认是 1。
        animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。
        animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。

CSS3 多列:

    * 可以将文本内容设计成像报纸一样的多列布局
    * CSS3 多列属性:
        column-count	    指定元素应该被分割的列数。
        column-fill	        指定如何填充列
        column-gap	        指定列与列之间的间隙
        column-rule	所有 column-rule-* 属性的简写
        column-rule-color	指定两列间边框的颜色
        column-rule-style	指定两列间边框的样式
        column-rule-width	指定两列间边框的厚度
        column-span	        指定元素要跨越多少列
        column-width	    指定列的宽度
        columns	设置 column-width 和 column-count 的简写

css3用户界面：

    * CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框
    * 属性：
        resize：指定一个元素是否应该由用户去调整大小
            例：div{resize:both;overflow:auto;}
        box-sizing：允许您以确切的方式定义适应某个区域的具体内容
        outline-offset：对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓
            轮廓与边框不同：
                轮廓不占空间
                轮廓可能是非矩形
    * 新的用户界面特性：
        appearance	    允许您使一个元素的外观像一个标准的用户界面元素
        box-sizing	    允许你以适应区域而用某种方式定义某些元素
        icon	        为创作者提供了将元素设置为图标等价物的能力
        nav-down	    指定在何处使用箭头向下导航键时进行导航
        nav-index	    指定一个元素的Tab的顺序
        nav-left	    指定在何处使用左侧的箭头导航键进行导航
        nav-right	    指定在何处使用右侧的箭头导航键进行导航
        nav-up	        指定在何处使用箭头向上导航键时进行导航
        outline-offset	外轮廓修饰并绘制超出边框的边缘
        resize	        指定一个元素是否是由用户调整大小

css3图片：

    * 圆角图片
    * 缩略图
    * 响应式图片
    * 图片文本
    * 卡片式图片
    * 图片滤镜
    * 响应式图片相册
    * 图片Modal

css3按钮

css3分页实例

css3框大小：

    css3中box-sizing属性可以设置width和height属性中包含padding和border

css3弹性盒子：
    
    * 新的布局模式
    * 当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式
    * 引入弹性盒布局模型目的是提供更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间
    * CSS3 弹性盒子属性：
        display	        指定 HTML 元素盒子类型。
        flex-direction	指定了弹性容器中子元素的排列方式
        justify-content	设置弹性盒子元素在主轴（横轴）方向上的对齐方式。
        align-items	    设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。
        flex-wrap	    设置弹性盒子的子元素超出父容器时是否换行。
        align-content	修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐
        flex-flow	    flex-direction 和 flex-wrap 的简写
        order	        设置弹性盒子的子元素排列顺序。
        align-self	    在弹性子元素上使用。覆盖容器的 align-items 属性。
        flex	        设置弹性盒子的子元素如何分配空间。

CSS3 多媒体查询：

    * css2中@media规则是针对不同媒体类型可以定制不同的样式规则，如可以针对不同的媒体类型(显示器、便携    设备、电视机等)设置不同规则，但是在很多设备上支持不够友好。
    * css3中多媒体查询继承了2中的思想：取代了查找设备的类型，根据设置自适应显示
    * 媒体查询可用于检测很多事情：
        1. viewport(视窗) 的宽度与高度
        2. 设备的宽度与高度
        3. 朝向 (智能手机横屏，竖屏) 。
        4. 分辨率
    * 语法：
        由多种媒体组成，可包含一个或多个表达式，表达式根据条件是否成立返回true/false
        @media not | only mediatype and (expressions) {}
        如果指定的多媒体类型匹配设备类型则查询结果返回 true，文档会在匹配的设备上显示指定样式效果
        除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果：

            * not: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。
            * only: 用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键    字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持      Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式   文件。
            * all: 所有设备，这个应该经常看到。

    * CSS3 多媒体类型：
        all	用于所有多媒体类型设备
        print	用于打印机
        screen	用于电脑屏幕，平板，智能手机等。
        speech	用于屏幕阅读器
 

 css响应式设计：
    
    
        

