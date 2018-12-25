w3c-html基础整理

概念：HTML - 超文本标记语言，用于创建网页的标准标记语言。可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，     由浏览器来解析。
     HTML 不是一种编程语言，而是一种标记语言
     HTML 标记语言是一套标记标签
     HTML 使用标记标签来描述网页
     HTML 文档包含了HTML 标签及文本内容
     HTML 文档也叫做 web 页面

     HTML 标记标签通常被称为 HTML 标签 (HTML tag):

        HTML 标签是由尖括号包围的关键词，比如 <html>
        HTML 标签通常是成对出现的，比如 <b> 和 </b>
        标签对中的第一个标签是开始标签，第二个标签是结束标签
        开始和结束标签也被称为开放标签和闭合标签

    "HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思：HTML 文档由嵌套的 HTML 元素构成

        HTML 元素以开始标签起始
        HTML 元素以结束标签终止
        元素的内容是开始标签与结束标签之间的内容
        某些 HTML 元素具有空内容（empty content）
        空元素在开始标签中进行关闭（以开始标签的结束而结束）
        大多数 HTML 元素可拥有属性
        没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的如<br/>。未来版本元素必须关闭
        元素/标签名称推荐使用小写，未来版本强制小写

    Web浏览器（如谷歌浏览器，Internet Explorer，Firefox，Safari）是用于读取HTML文件，并将其作为网页显示。
    浏览器并不是直接显示的HTML标签，但可以使用标签来决定如何展现HTML页面的内容给用户

版本：
    HTML	            1991
    HTML+	            1993
    HTML 2.0	        1995
    HTML 3.2	        1997
    HTML 4.01	        1999
    XHTML 1.0	        2000
    HTML5	            2012
    XHTML5	            2013

编码：中文网页需要使用 <meta charset="utf-8"> 声明编码，否则会出现乱码
     有些浏览器(如 360 浏览器)会设置 GBK 为默认编码，则你需要设置为 <meta charset="gbk">

后缀名：.html 和 .htm 两种

基本实例：

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>runoob.com</title>
    </head>
    <body>
        <h1>我的第一个标题</h1>
        <p>我的第一个段落。</p>
    </body>
    </html>

简介：

    <!DOCTYPE html>             文档声明
    <html>                      定义文档，页面根元素
    <head>                      元素包含了文档的元（meta）数据
    <title>                     元素描述了文档的标题
    <body>                      文档主体，元素包含了可见的页面内容

文档声明：

    所有主流浏览器都支持 <!DOCTYPE> 声明
    声明位于文档中的最前面的位置，处于 <html> 标签之前
    声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本
    <!DOCTYPE>声明有助于浏览器中正确显示网页
    网络上有很多不同的文件，如果能够正确声明HTML的版本，浏览器就能正确显示网页内容

    通用声明: 不区分大小写

        HTML5
            HTML5 不是基于 SGML，因此不要求引用 DTD，HTML5仅规定了一中声明：
            <!DOCTYPE html>

        HTML 4.01
            在html 4中，声明需引用 DTD （文档类型声明）因为 HTML 4.01 是基于 SGML （标准通用标记语言）DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容，HTML4规定了三种不同（Strict、Transitional 和 Frameset）的声明：

            HTML 4.01 Strict
                这个 DTD 包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

            HTML 4.01 Transitional
                这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

            HTML 4.01 Frameset
                这个 DTD 与 HTML 4.01 Transitional 相同，但是允许使用框架集内容。
                <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

        HTML 1.0
            XHTML 1.0 Strict
                这个 DTD 包含所有 HTML 元素和属性，但不包括表象或过时的元素（如 font ）。框架集是不允许的。结构必须按标准格式的 XML 进行书写。
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

            XHTML 1.0 Transitional
                这个 DTD 包含所有 HTML 元素和属性，包括表象或过时的元素（如 font ）。框架集是不允许的。结构必须按标准格式的 XML 进行书写。
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

            XHTML 1.0 Frameset
                这个 DTD 与 XHTML 1.0 Transitional 相同，但是允许使用框架集内容。
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

            XHTML 1.1
                这个 DTD 与 XHTML 1.0 Strict 相同，但是允许您添加模块（例如为东亚语言提供 ruby 支持）。
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

    HTML 元素 - 有效 DOCTYPES:

        所有的 HTML5/HTML 4.01/XHTML 元素，以及它们会出现在什么文档类型 (!DOCTYPE)http://www.runoob.com/tags/html-elementsdoctypes.html 该地址是详细表格

HTML 属性：

    HTML 元素可以设置属性
    属性可以在元素中添加附加信息
    属性一般描述于开始标签
    属性总是以名称/值对的形式出现，比如：name="value"。

    属性和属性值对大小写不敏感。
    不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。
    而新版本的 (X)HTML 要求使用小写属性

    html 元素列表及可用属性表格：http://www.runoob.com/tags/html-reference.html

HTML 标题：

    标题（Heading）是通过 <h1> - <h6> 标签进行定义的
    <h1> 定义最大的标题。 <h6> 定义最小的标题

    重要性：请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。
           搜索引擎使用标题为您的网页的结构和内容编制索引。
           因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的

HTML 水平线：<hr> 标签在 HTML 页面中创建水平线

HTML 注释：可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们
           <!-- 这是一个注释 -->
        
HTML 段落：HTML 可以将文档分割为若干段落，段落是通过 <p> 标签定义的，例：<p>这是一个段落 </p>

HTML 折行：<br/>如果您希望在不产生一个新段落的情况下进行换行（新行）可使用，对于 HTML，您无法通过在 HTML 代码中添             加额外的空格或换行来改变输出的效果。
           当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格



