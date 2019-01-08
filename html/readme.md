1. w3c基础html教程 http://www.runoob.com/html/html-tutorial.html
2. html5新特性
3. html5从入门到精通

HTML5 简介:

    HTML5 是下一代 HTML 标准。
    HTML , HTML 4.01的上一个版本诞生于 1999 年。自从那以后，Web 世界已经经历了巨变。
    HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

HTML5 <!DOCTYPE>：

    <!doctype> 声明必须位于 HTML5 文档中的第一行,使用非常简单: <!DOCTYPE html>

HTML5 的改进：

    新元素
    新属性
    完全支持 CSS3
    Video 和 Audio
    2D/3D 制图
    本地存储
    本地 SQL 数据
    Web 应用

HTML5 多媒体：

    HTML5 <video>
    HTML5 <audio>

HTML5 应用：

    本地数据存储
    访问本地文件
    本地 SQL 数据
    缓存引用
    Javascript 工作者
    XHTMLHttpRequest 2

HTML5 图形：

    使用 <canvas> 元素。
    使用内联 SVG。
    使用 CSS3 2D 转换、CSS3 3D 转换。

HTML5 使用 CSS3：

    新选择器
    新属性
    动画
    2D/3D 转换
    圆角
    阴影效果
    可下载的字体

语义元素:

    <article>	定义页面独立的内容区域。
    <aside>	    定义页面的侧边栏内容。
    <bdi>	    允许您设置一段文本，使其脱离其父元素的文本方向设置。
    <command>	定义命令按钮，比如单选按钮、复选框或按钮
    <details>	用于描述文档或文档某个部分的细节
    <dialog>	定义对话框，比如提示框
    <summary>	标签包含 details 元素的标题
    <figure>	规定独立的流内容（图像、图表、照片、代码等等）。
    <figcaption>	定义 <figure> 元素的标题
    <footer>	定义 section 或 document 的页脚。
    <header>	定义了文档的头部区域
    <mark>	    定义带有记号的文本。
    <meter>	    定义度量衡。仅用于已知最大和最小值的度量。
    <nav>	    定义导航链接的部分。
    <progress>	定义任何类型的任务的进度。
    <ruby>	    定义 ruby 注释（中文注音或字符）。
    <rt>	    定义字符（中文注音或字符）的解释或发音。
    <rp>	    在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
    <section>	定义文档中的节（section、区段）。
    <time>	    定义日期或时间。
    <wbr>	    规定在文本中的何处适合添加换行符。

HTML5 浏览器支持：

    最新版本的 Safari、Chrome、Firefox 以及 Opera 支持某些 HTML5 特性。Internet Explorer 9 将支持某些 HTML5 特性。
    现代的浏览器都支持 HTML5。
    此外，所有浏览器，包括旧的和最新的，对无法识别的元素会作为内联元素自动处理。
    正因为如此，你可以 "教会" 浏览器处理 "未知" 的 HTML 元素。
    
    IE9 以下版本浏览器兼容HTML5的方法，使用本站的静态资源的html5shiv包：
    针对IE浏览器html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。

    <!--[if lt IE 9]>
        <script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
    <![endif]-->

    HTML5 定了 8 个新的 HTML 语义（semantic） 元素。所有这些元素都是 块级 元素。
    为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 display 属性值为 block:
    载入后，初始化新标签的CSS：

    /*html5*/
    article,aside,dialog,footer,header,section,nav,figure,menu{display:block}


HTML5 新元素：

    <canvas> 新元素

        <canvas>	标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API

    新多媒体元素

        <audio>	    定义音频内容
        <video>	    定义视频（video 或者 movie）
        <source>	定义多媒体资源 <video> 和 <audio>
        <embed>	    定义嵌入的内容，比如插件。
        <track>	    为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。

    新表单元素

        <datalist>	定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。
        <keygen>	规定用于表单的密钥对生成器字段。
        <output>	定义不同类型的输出，比如脚本的输出。

HTML5 Canvas：

    <canvas> 标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形，浏览器支持性：ie9+、chrome4+、safari3.1+、firefox2+、opera9+