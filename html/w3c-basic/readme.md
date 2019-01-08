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

HTML 文本格式化：

    <b>	        定义粗体文本
    <em>	    定义着重文字
    <i>	        定义斜体字
    <small> 	定义小号字
    <strong>	定义加重语气
    <sub>	    定义下标字
    <sup>	    定义上标字
    <ins>	    定义插入字
    <del>	    定义删除字
    // 引文 引用
    <abbr>	        定义缩写
    <address>	    定义地址
    <bdo>	        定义文字方向
    <blockquote>	定义长的引用
    <q>	            定义短的引用语
    <cite>  	    定义引用、引证
    <dfn>	        定义一个定义项目

HTML 链接：
    
    <a href="url">链接文本</a> 
    HTML 链接 - target 属性：使用 target 属性，你可以定义被链接的文档在何处显示

    在HTML文档中插入ID:

        <a id="tips">有用的提示部分</a>
        在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：

        <a href="#tips">访问有用的提示部分</a>
        或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：

        <a href="http://www.runoob.com/html/html-links.html#tips">
        访问有用的提示部分</a>

    注释： 请始终将正斜杠添加到子文件夹。假如这样书写链接：href="http://www.runoob.com/html"，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：href="http://www.runoob.com/html/"。

HTML <head> 元素：

    <head> 元素包含了所有的头部标签元素。在 <head>元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。可以添加在头部区域的元素标签为: <title>, <style>, <meta>, <link>, <script>, <noscript>, and <base>.

HTML <title> 元素：

    <title> 标签定义了不同文档的标题。
    <title> 在 HTML/XHTML 文档中是必须的。
    <title> 元素:
        定义了浏览器工具栏的标题
        当网页添加到收藏夹时，显示在收藏夹中的标题
        显示在搜索引擎结果页面的标题

HTML <base> 元素：

    <base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
        <base href="http://www.runoob.com/images/" target="_blank">

HTML <link> 元素：

    <link> 标签定义了文档与外部资源之间的关系。
    <link> 标签通常用于链接到样式表:

HTML <style> 元素：

    <style> 标签定义了HTML文档的样式文件引用地址.
    在<style> 元素中你也可以直接添加样式来渲染 HTML 文档:

HTML <meta> 元素：

    meta标签描述了一些基本的元数据。
    <meta> 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
    META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。
    元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
    <meta> 一般放置于 <head> 区域

    为搜索引擎定义关键词:
        <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

    为网页定义描述内容:
        <meta name="description" content="免费 Web & 编程 教程">

    定义网页作者:
        <meta name="author" content="Runoob">

    每30秒钟刷新当前页面:
        <meta http-equiv="refresh" content="30">

HTML <script> 元素：

    <script>标签用于加载脚本文件，如： JavaScript。

HTML 样式- CSS：

    如何使用CSS：

        内联样式- 在HTML元素中使用"style" 属性
        内部样式表 -在HTML文档头部 <head> 区域使用<style> 元素 来包含CSS
        外部引用 - 使用外部 CSS 文件

    已弃用的标签和属性：

        在HTML 4, 原来支持定义HTML元素样式的标签和属性已被弃用。这些标签将不支持新版本的HTML标签。
        不建议使用的标签有: <font>, <center>, <strike>
        不建议使用的属性: color 和 bgcolor.

HTML 图像：

    图像标签（ <img>）和源属性（src）,在 HTML 中，图像由<img> 标签定义。<img> 是空标签，意思是说，它只包含属性，并且没有闭合标签。要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址.

        <img src="url" alt="some_text">

    HTML 图像- Alt属性：无法显示图像时，替换文本属性告诉读者她们失去的信息

HTML 表格：

    <table> 标签来定义表格。
    <th> 标签进行定义表头。
    <tr> 标签定义每个表格均有若干行。
    <td> 标签定义每行被分割为若干单元格，字母td指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等。
    <caption>	定义表格标题
    <colgroup>	定义表格列的组
    <col>	定义用于表格列的属性
    <thead>	定义表格的页眉
    <tbody>	定义表格的主体
    <tfoot>	定义表格的页脚

    HTML 表格和边框属性：border属性

HTML 列表：

    有序列表：<ol><li></li></ol>
    无序列表：<ul><li></li></ul>
    自定义列表：<dl><dt></dt><dd></dd></dl>，自定义列表不仅仅是一列项目，而是项目及其注释的组合。自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。

HTML <div> 和<span>：

    HTML 可以通过 <div> 和 <span>将元素组合起来。

    HTML 区块元素:

        大多数 HTML 元素被定义为块级元素或内联元素。
        块级元素在浏览器显示时，通常会以新行来开始（和结束）。
        实例: <h1>, <p>, <ul>, <table>
        结合css用作布局，取代之前错误的用table布局的方法

    HTML 内联元素：

        内联元素在显示时通常不会以新行开始。
        实例: <b>, <td>, <a>, <img>
        结合css组合文档中的行内元素

HTML 表单和输入：表单用于收集不同类型的用户输入

    表单是一个包含表单元素的区域。表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。

    HTML 表单 - 输入元素：多数情况下被用到的表单标签是输入标签（<input>）。输入类型是由类型属性（type）定义的。大多数经常被用到的输入类型如下：
        
        文本域：<input type="text"> 标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域
        密码字段：通过标签<input type="password"> 来定义
        单选按钮：<input type="radio"> 标签定义了表单单选框选项
        复选框：<input type="checkbox"> 定义了复选框. 用户需要从若干给定的选择中选取一个或若干选项
        提交按钮：<input type="submit"> 定义了提交按钮

        <form>	定义供用户输入的表单
        <input>	定义输入域
        <textarea>	定义文本域 (一个多行的输入控件)
        <label>	定义了 <input> 元素的标签，一般为输入标题
        <fieldset>	定义了一组相关的表单元素，并使用外框包含起来
        <legend>	定义了 <fieldset> 元素的标题
        <select>	定义了下拉选项列表
        <optgroup>	定义选项组
        <option>	定义下拉列表中的选项
        <button>	定义一个点击按钮
        <datalist>New	指定一个预先定义的输入控件选项列表
        <keygen>New	定义了表单的密钥对生成器字段
        <output>New	定义一个计算结果

HTML 框架：

    iframe语法: <iframe src="URL"></iframe>，该URL指向不同的网页。

    Iframe - 移除边框：<iframe src="demo_iframe.htm" frameborder="0"></iframe>
    使用iframe来显示目标链接页面：
        <iframe src="demo_iframe.htm" name="iframe_a"></iframe>
        <p><a href="http://www.runoob.com" target="iframe_a">RUNOOB.COM</a></p>

HTML 颜色：

    三种设置方式：十六禁制符号(#ffffff)、颜色RGB(255， 255， 255)、颜色名称(red)、带透明度的颜色RGBA(255,255,255,0)

HTML 脚本:

    JavaScript 使 HTML 页面具有更强的动态和交互性
    <script> 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件
    JavaScript 最常用于图片操作、表单验证以及内容动态更新

    HTML<noscript> 标签:

        <noscript> 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时

HTML 统一资源定位器(Uniform Resource Locators)：

    语法规则：scheme://host.domain:port/path/filename

    scheme - 定义因特网服务的类型。最常见的类型是 http
    host - 定义域主机（http 的默认主机是 www）
    domain - 定义因特网域名，比如 runoob.com
    :port - 定义主机上的端口号（http 的默认端口号是 80）
    path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
    filename - 定义文档/资源的名称

    常见的 URL Scheme:

        http	超文本传输协议	以 http:// 开头的普通网页。不加密。
        https	安全超文本传输协议	安全网页，加密所有信息交换。
        ftp	    文件传输协议	用于将文件下载或上传至网站。
        file	您计算机上的文件。

    URL 字符编码：

        URL 只能使用 ASCII 字符集，来通过因特网进行发送。
        由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。
        URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
        URL 不能包含空格。URL 编码通常使用 + 来替换空格。




HTML 速查列表

HTML 基本文档

    <!DOCTYPE html>
    <html>
        <head>
            <title>文档标题</title>
        </head>
        <body>
            可见文本...
        </body>
    </html>

基本标签（Basic Tags）

    <h1>最大的标题</h1>
    <h2> . . . </h2>
    <h3> . . . </h3>
    <h4> . . . </h4>
    <h5> . . . </h5>
    <h6>最小的标题</h6>
    <p>这是一个段落。</p>
    <br> （换行）
    <hr> （水平线）
    <!-- 这是注释 -->

文本格式化（Formatting）

    <b>粗体文本</b>
    <code>计算机代码</code>
    <em>强调文本</em>
    <i>斜体文本</i>
    <kbd>键盘输入</kbd> 
    <pre>预格式化文本</pre>
    <small>更小的文本</small>
    <strong>重要的文本</strong>
    
    <abbr> （缩写）
    <address> （联系信息）
    <bdo> （文字方向）
    <blockquote> （从另一个源引用的部分）
    <cite> （工作的名称）
    <del> （删除的文本）
    <ins> （插入的文本）
    <sub> （下标文本）
    <sup> （上标文本）

链接（Links）

    普通的链接：<a href="http://www.example.com/">链接文本</a>
    图像链接： <a href="http://www.example.com/"><img src="URL" alt="替换文本"></a>
    邮件链接： <a href="mailto:webmaster@example.com">发送e-mail</a>

书签：

    <a id="tips">提示部分</a>
    <a href="#tips">跳到提示部分</a>

图片（Images）

    <img src="URL" alt="替换文本" height="42" width="42">

样式/区块（Styles/Sections）

    <style type="text/css">
    h1 {color:red;}
    p {color:blue;}
    </style>
    <div>文档中的块级元素</div>
    <span>文档中的内联元素</span>

无序列表

    <ul>
        <li>项目</li>
        <li>项目</li>
    </ul>

有序列表

    <ol>
        <li>第一项</li>
        <li>第二项</li>
    </ol>

定义列表

    <dl>
    <dt>项目 1</dt>
        <dd>描述项目 1</dd>
    <dt>项目 2</dt>
        <dd>描述项目 2</dd>
    </dl>

表格（Tables）

    <table border="1">
    <tr>
        <th>表格标题</th>
        <th>表格标题</th>
    </tr>
    <tr>
        <td>表格数据</td>
        <td>表格数据</td>
    </tr>
    </table>

框架（Iframe）

    <iframe src="demo_iframe.htm"></iframe>

表单（Forms）

    <form action="demo_form.php" method="post/get">
    <input type="text" name="email" size="40" maxlength="50">
    <input type="password">
    <input type="checkbox" checked="checked">
    <input type="radio" checked="checked">
    <input type="submit" value="Send">
    <input type="reset">
    <input type="hidden">
    <select>
    <option>苹果</option>
    <option selected="selected">香蕉</option>
    <option>樱桃</option>
    </select>
    <textarea name="comment" rows="60" cols="20"></textarea>
    
    </form>

实体（Entities）

    &lt; 等同于 <
    &gt; 等同于 >
    &#169; 等同于 ©
