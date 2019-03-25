1. HTML5新元素
#HTML5 的改进
    新元素
    新属性
    完全支持 CSS3
    Video 和 Audio
    2D/3D 制图
    本地存储
    本地 SQL 数据
    Web 应用：
        应用程序缓存
        webworks
        SSE
        websocket
    MathML 数学公式
    拖放
    定位
    新表单属性
        form属性：
            autocomplete
            novalidate
        input属性：
            autocomplete
            autofocus
            form
            formaction
            formenctype
            formmethod
            formnovalidate
            formtarget
            height 与 width
            list
            min 与 max
            multiple
            pattern (regexp)
            placeholder
            required
            step

# HTML5 应用
    本地数据存储
    访问本地文件
    本地 SQL 数据
    缓存引用
    Javascript 工作者
    XHTMLHttpRequest 2

#HTML5 图形
    使用 <canvas> 元素
    使用内联 SVG
    使用 CSS3 2D 转换、CSS3 3D 转换
    HTML5 使用 CSS3
    新选择器
    新属性
    动画
    2D/3D 转换
    圆角
    阴影效果
    可下载的字体

# 2d绘图：
    <canvas>	标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API

# 多媒体元素：
    <audio>	    定义音频内容
    <video>	    定义视频（video 或者 movie）
    <source>	定义多媒体资源 <video> 和 <audio>
    <embed>	    定义嵌入的内容，比如插件
    <track>	    为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道

# 新表单元素：
    <datalist>	定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值
    <keygen>	规定用于表单的密钥对生成器字段
    <output>	定义不同类型的输出，比如脚本的输出

# 新语义结构元素：
    <article>	定义页面独立的内容区域
    <aside>	    定义页面的侧边栏内容
    <bdi>	    允许您设置一段文本，使其脱离其父元素的文本方向设置
    <command>	定义命令按钮，比如单选按钮、复选框或按钮
    <details>	用于描述文档或文档某个部分的细节
    <dialog>	定义对话框，比如提示框
    <summary>	标签包含 details 元素的标题
    <figure>	规定独立的流内容（图像、图表、照片、代码等等）
    <figcaption>	定义 <figure> 元素的标题
    <footer>	定义 section 或 document 的页脚
    <header>	定义了文档的头部区域
    <mark>	    定义带有记号的文本
    <meter>	    定义度量衡。仅用于已知最大和最小值的度量
    <nav>	    定义导航链接的部分
    <progress>	定义任何类型的任务的进度
    <ruby>	    定义 ruby 注释（中文注音或字符）
    <rt>	    定义字符（中文注音或字符）的解释或发音
    <rp>	    在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容
    <section>	定义文档中的节（section、区段）
    <time>	    定义日期或时间
    <wbr>	    规定在文本中的何处适合添加换行符

# 已移除的元素
    <acronym>
    <applet>
    <basefont>
    <big>
    <center>
    <dir>
    <font>
    <frame>
    <frameset>
    <noframes>
    <strike>
    <tt>

2.canvas和svg比较
#canvas:
    依赖分辨率
    不支持事件处理器
    弱的文本渲染能力
    能够以 .png 或 .jpg 格式保存结果图像
    最适合图像密集型的游戏，其中的许多对象会被频繁重绘
# svg:
    不依赖分辨率
    支持事件处理器
    最适合带有大型渲染区域的应用程序（比如谷歌地图）
    复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
    不适合游戏应用

3.本地存储localstorage和sessionstorage及cookie的区别？
#更便捷的API：
    保存数据：localStorage.setItem(key,value);
    读取数据：localStorage.getItem(key);
    删除单个数据：localStorage.removeItem(key);
    删除所有数据：localStorage.clear();
    得到某个索引的key：localStorage.key(index);

    cookie：通过documen.cookie来获取，得到的是字符串形式的值，包含了当前网站下所有的cookie，把所有的cookie通过一个分号+空格的形式串联起来

#更大的存储空间
    storage：每个域支持5MB甚至更多的本地存储
    cookie：支持4kB的存储，不同浏览器cookie个数也是有限制的
#更安全高效
    storage：只在客户端读取传递，不用每次都传递给服务端，服务端不可读取本地存储
    cookie：数据有路劲的概念，每次请求都会带着cookie，所以尽量用作小数据，如会话标识
#数据有效期：
    sessionstorage：会话期间有效，浏览器或窗口关闭后失效，临时存储
    localstorage：持久化存储，一直有效，只有没有清除，无论浏览器关闭与否
    cookie：具有过期时间，过期时间内有效，无论浏览器或窗口是否关闭
#作用域不同：
    sessionstorage：不同的窗口不共享数据，即使是同一个页面
    localstorage：所有同源窗口共享数据
    cookie：所有同源窗口中共享数据
#便于感知观察值的变化
    storage修改、删除时可以触发监听，通知开发者变化情况
#ios或安卓无痕浏览模式
    storage：ocalstorage.getItem()方法报错