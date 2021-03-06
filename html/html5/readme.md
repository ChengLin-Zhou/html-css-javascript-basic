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

    使用 JavaScript 来绘制图像：
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        ctx.fillStyle="#FF0000";
        ctx.fillRect(0,0,150,75);

    Canvas - 路径：定义开始坐标(0,0), 和结束坐标 (200,100)。然后使用 stroke() 方法来绘制线条
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();

        绘制圆：arc(x,y,r,start,stop)
    
    Canvas - 文本：
        ctx.font="30px Arial";
        // 实心字
        ctx.fillText("Hello World",10,50);
        // 空心字
        ctx.strokeText("Hello World",10,50);

    Canvas - 渐变：
        // 创建渐变
        var grd=ctx.createLinearGradient(0,0,200,0);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        
        // 填充渐变
        ctx.fillStyle=grd;
        ctx.fillRect(10,10,150,80);

    Canvas - 图像：
        var img=document.getElementById("scream");
        ctx.drawImage(img,10,10);

HTML5 内联 SVG：

    SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
    SVG 用于定义用于网络的基于矢量的图形
    SVG 使用 XML 格式定义图形
    SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
    SVG 是万维网联盟的标准

    SVG优势: 
        
        与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：
        IE 9+, Firefox, Opera, Chrome, 和 Safari 支持内联SVG

            SVG 图像可通过文本编辑器来创建和修改
            SVG 图像可被搜索、索引、脚本化或压缩
            SVG 是可伸缩的
            SVG 图像可在任何的分辨率下被高质量地打印
            SVG 可在图像质量不下降的情况下被放大

    SVG 与 Canvas两者间的区别:
        SVG 是一种使用 XML 描述 2D 图形的语言。
        Canvas 通过 JavaScript 来绘制 2D 图形。
        SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
        在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
        Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

        canvas：
            依赖分辨率
            不支持事件处理器
            弱的文本渲染能力
            能够以 .png 或 .jpg 格式保存结果图像
            最适合图像密集型的游戏，其中的许多对象会被频繁重绘

        svg：
            不依赖分辨率
            支持事件处理器
            最适合带有大型渲染区域的应用程序（比如谷歌地图）
            复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
            不适合游戏应用

HTML5 MathML：

    HTML5 可以在文档中使用 MathML 元素，对应的标签是 <math>...</math> 。
    MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。
    大部分浏览器都支持 MathML 标签，如果你的浏览器不支持该标签，可以使用最新版的 Firefox 或 Safari 浏览器查看

        <body>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mrow>
                    <msup><mi>a</mi><mn>2</mn></msup> // a2 + b2 = c2
                    <mo>+</mo>
                        
                    <msup><mi>b</mi><mn>2</mn></msup>
                    <mo>=</mo>
                        
                    <msup><mi>c</mi><mn>2</mn></msup>
                </mrow>
            </math>
        </body>

HTML5 拖放（Drag 和 Drop）：拖放（Drag 和 drop）是 HTML5 标准的组成部分

    拖放是一种常见的特性，即抓取对象以后拖到另一个位置。任何元素都能够拖放。
    IE 9+, Firefox, Opera, Chrome, 和 Safari 支持拖动。注意:Safari 5.1.2不支持拖动。

    例子：
    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <img id="drag1" src="/images/logo.png" draggable="true" ondragstart="drag(event)" width="336" height="69">

    设置元素为可拖放：
        首先，为了使元素可拖动，把 draggable 属性设置为 true , <img draggable="true">

    拖动什么 - ondragstart 和 setData():
        ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。dataTransfer.setData() 方法设置被拖数据的数据类型和值：
            function drag(ev) 
            {
                ev.dataTransfer.setData("Text",ev.target.id);
            }

    放到何处 - ondragover：
        ondragover 事件规定在何处放置被拖动的数据。默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。这要通过调用 ondragover 事件的 event.preventDefault() 方法：
            event.preventDefault();

    进行放置 - ondrop：
        当放置被拖数据时，会发生 drop 事件。在上面的例子中，ondrop 属性调用了一个函数，drop(event)：
            function drop(ev)
            {
                ev.preventDefault();
                var data=ev.dataTransfer.getData("Text");
                ev.target.appendChild(document.getElementById(data));
            }
            调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
            通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
            被拖数据是被拖元素的 id ("drag1")
            把被拖元素追加到放置元素（目标元素）中

HTML5 Geolocation（地理定位）：用于定位用户的位置

    定位用户的位置：
        HTML5 Geolocation API 用于获得用户的地理位置。
        鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。
    
    浏览器支持：
        IE9+, Firefox, Chrome, Safari 和 Opera 支持，对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。

    HTML5 - 使用地理定位：getCurrentPosition() 方法来获得用户的位置
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
        }
        else
        {
            console.log("该浏览器不支持获取地理位置。");
        }

        成功：
            纬度: position.coords.latitude 
            经度: position.coords.longitude

        错误处理：
            error.PERMISSION_DENIED: "用户拒绝对获取地理位置的请求。"
			error.POSITION_UNAVAILABLE: "位置信息是不可用的。"
			error.TIMEOUT: "请求用户地理位置超时。"
			error.UNKNOWN_ERROR: "未知错误。"

    在地图中显示结果：
        在地图中显示结果，您需要访问可使用经纬度的地图服务，比如谷歌地图或百度地图。
        position.coords.latitude+","+position.coords.longitude

    给定位置的信息：用处
        更新本地信息
        显示用户周围的兴趣点
        交互式车载导航系统 (GPS)

    getCurrentPosition() 方法 - 返回数据：
        getCurrentPosition() 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性：
            coords.latitude	    十进制数的纬度
            coords.longitude	十进制数的经度
            coords.accuracy	    位置精度
            coords.altitude	    海拔，海平面以上以米计
            coords.altitudeAccuracy	位置的海拔精度
            coords.heading	    方向，从正北开始以度计
            coords.speed	    速度，以米/每秒计
            timestamp	        响应的日期/时间

    Geolocation 对象 - 其他有趣的方法:
        watchPosition() - 返回用户的当前位置，并继续返回用户移动时的更新位置，clearWatch() - 停止 watchPosition() 方法：
            function getLocation()
            {
                if (navigator.geolocation)
                {
                    navigator.geolocation.watchPosition(showPosition);
                }
                else
                {
                    x.innerHTML="该浏览器不支持获取地理位置。";
                }
            }
            function showPosition(position)
            {
                x.innerHTML="纬度: " + position.coords.latitude + 
                "<br>经度: " + position.coords.longitude; 
            }

HTML5 Video(视频)：很多站点都会使用到视频. HTML5 提供了展示视频的标准

    Web站点上的视频：
        直到现在，仍然不存在一项旨在网页上显示视频的标准。
        大多数视频是通过插件（比如 Flash）来显示的。然而，并非所有浏览器都拥有同样的插件。
        HTML5 规定了一种通过 video 元素来包含视频的标准方法。
        支持：IE9+, Firefox, Opera, Chrome, 和 Safari 支持 <video> 元素。
        注意: IE8 或者更早的IE版本不支持 <video> 元素。

    HTML5 (视频)- 如何工作：
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            您的浏览器不支持Video标签。
        </video>

        <video> 元素提供了 播放、暂停和音量控件来控制视频。
        提供了 width 和 height 属性控制视频的尺寸。设置的高度和宽度，所需的视频空间会在页面加载时保留。没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。
        <video> 与</video> 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的
        <video> 元素支持多个 <source> 元素. <source> 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式

        支持的格式：MP4 WebM Ogg三种

            浏览器	    MP4	        WebM	    Ogg
            IE         YES	        NO	        NO
            Chrome	   YES	        YES	        YES
            Firefox	   YES  	    YES	        YES
            Safari	   YES	        NO	        NO
            Opera  YES(从Opera25起) YES	        YES

            MP4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件
            WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件
            Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件

    HTML5 <video> - 使用 DOM 进行控制：
        HTML5 <video> 和 <audio> 元素同样拥有方法、属性和事件。
        <video> 和 <audio>元素的方法、属性和事件可以使用JavaScript进行控制。
        其中的方法用于播放、暂停以及加载等。其中的属性（比如时长、音量等）可以被读取或设置。其中的 DOM 事件能够通知你，比方说，<video> 元素开始播放、已暂停，已停止，等等。
        <track>	定义在媒体播放器文本轨迹。

HTML5 Audio(音频)：播放音频文件的标准

    音频格式支持：<audio>元素支持三种音频格式文件: MP3, Wav, 和 Ogg
        浏览器	        MP3	        Wav	        Ogg
        IE9+	       YES	        NO	        NO
        Chrome 6+	   YES	        YES	        YES
        Firefox 3.6+   YES	        YES	        YES
        Safari 5+	   YES	        YES	        NO
        Opera 10+	   YES	        YES	        YES

HTML5 新的 Input 类型：

    新增的类型：color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week
    注意:并不是所有的主流浏览器都支持新的input类型，不过您已经可以在所有主流的浏览器中使用它们了。即使不被支持，仍然可以显示为常规的文本域。

    Input 类型: color：chrome、opera支持
        从拾色器中选择一个颜色:<input type="color" name="favcolor">

    Input 类型: date：chrome、safari、opera支持
        定义一个时间控制器:<input type="date" name="bday">
    
    Input 类型: datetime：safari、opera支持
        datetime 类型允许你选择一个日期（UTC 时间）：<input type="datetime" name="bdaytime">

    Input 类型: datetime-local：chrome、safari、opera支持
        datetime-local 类型允许你选择一个日期和时间 (无时区)：<input type="datetime-local" name="bdaytime">

    Input 类型: email：除safari都支持
        包含 e-mail 地址的输入域，提交时自动验证合法性：<input type="email" name="email">

    Input 类型: month：chrome、safari、opera支持
        month 类型允许你选择一个月份：<input type="month" name="bdaymonth">

    Input 类型: number：IE、chrome、safari、opera支持
        number 类型用于应该包含数值的输入域，可限定：<input type="number" name="quantity" min="1" max="5">

    属性	        描述
    disabled	规定输入字段是禁用的
    max	        规定允许的最大值
    maxlength	规定输入字段的最大字符长度
    min	        规定允许的最小值
    pattern	    规定用于验证输入字段的模式
    readonly	规定输入字段的值无法修改
    required	规定输入字段的值是必需的
    size	    规定输入字段中的可见字符数
    step	    规定输入字段的合法数字间隔
    value	    规定输入字段的默认值

    Input 类型: range：IE、chrome、safari、opera支持
        range 类型用于应该包含一定范围内数字值的输入域：<input type="range" name="points" min="1" max="10">
        step - 规定合法的数字间隔
        value - 规定默认值

    Input 类型: search：chrome、safari支持
        定义一个搜索字段 (类似站点搜索或者Google搜索)：<input type="search" name="googlesearch">

    Input 类型: tel：暂不支持
        定义输入电话号码字段：<input type="tel" name="usrtel">
    
    Input 类型: time：chrome、safari、opera支持
        定义可输入时间控制器（无时区）：<input type="time" name="usr_time">

    Input 类型: url：除safari都支持
        url 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值.
        <input type="url" name="homepage">
        iPhone 中的 Safari 浏览器支持 url 输入类型，并通过改变触摸屏键盘来配合它（添加 .com 选项）

    Input 类型: week：chrome、safari、opera支持
        定义周和年 (无时区): <input type="week" name="week_year">

HTML5 表单元素：

    HTML5 新的表单元素：<datalist>、<keygen>、<output>

    HTML5 <datalist> 元素：
        <datalist> 元素规定输入域的选项列表。

    HTML5 <keygen> 元素：
        <keygen> 元素的作用是提供一种验证用户的可靠方法。
        <keygen>标签规定用于表单的密钥对生成器字段。
        当提交表单时，会生成两个键，一个是私钥，一个公钥。
        私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书

        <form action="demo_keygen.asp" method="get">
            用户名: <input type="text" name="usr_name">
            加密: <keygen name="security">
            <input type="submit">
        </form>

    HTML5 <output> 元素：用于不同类型的输出
        <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
            0<input type="range" id="a" value="50">100 +
            <input type="number" id="b" value="50">=
            <output name="x" for="a b"></output>
        </form>

HTML5 表单属性：
    
    HTML5 新的表单属性：
        <form>新属性：autocomplete、novalidate
        <input>新属性：autocomplete、autofocus、form、formaction、formenctype、formmethod、formnovalidate、formtarget、height 与 width、list、min 与 max、multiple、pattern (regexp)、placeholder、required、step

    <form> / <input> autocomplete 属性：opear不支持
        autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。
        当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项。
        autocomplete 属性有可能在 form元素中是开启的，而在input元素中是关闭的
        autocomplete 适用于 <form> 标签，以及以下类型的 <input> 标签：text, search, url, telephone, email, password, datepickers, range 以及 color

    <form> novalidate 属性：
        novalidate 属性是一个 boolean(布尔) 属性。novalidate 属性规定在提交表单时不应该验证form或input域

    <input> autofocus 属性：
        autofocus 属性是一个 boolean 属性。属性规定在页面加载时，域自动地获得焦点

    <input> form 属性：
        form 属性规定输入域所属的一个或多个表单。如需引用一个以上的表单，请使用空格分隔的列表

    <input> formaction 属性：
        The formaction 属性用于描述表单提交的URL地址。
        The formaction 属性会覆盖<form> 元素中的action属性。
        注意: The formaction 属性用于 type="submit" 和 type="image"。

    <input> formenctype 属性：
        formenctype 属性描述了表单提交到服务器的数据编码 (只对form表单中 method="post" 表单)。
        formenctype 属性覆盖 form 元素的 enctype 属性。
        主要: 该属性与 type="submit" 和 type="image" 配合使用。

    <input> formmethod 属性：
        formmethod 属性定义了表单提交的方式。
        formmethod 属性覆盖了 <form> 元素的 method 属性。
        注意: 该属性可以与 type="submit" 和 type="image" 配合使用。

    <input> formnovalidate 属性：
        novalidate 属性是一个 boolean 属性.
        novalidate属性描述了 <input> 元素在表单提交时无需被验证。
        formnovalidate 属性会覆盖 <form> 元素的novalidate属性.
        注意: formnovalidate 属性与type="submit一起使用

    <input> formtarget 属性：
        formtarget 属性指定一个名称或一个关键字来指明表单提交数据接收后的展示。
        The formtarget 属性覆盖 <form>元素的target属性.
        注意: formtarget 属性与type="submit" 和 type="image"配合使用

    <input> height 和 width 属性：
        height 和 width 属性规定用于 image 类型的 <input> 标签的图像高度和宽度。

    <input> list 属性：
        list 属性规定输入域的 datalist。datalist 是输入域的选项列表。

    <input> min 和 max 属性：
        min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）。
        
    <input> multiple 属性：
        multiple 属性是一个 boolean 属性。
        multiple 属性规定<input> 元素中可选择多个值。
        注意: multiple 属性适用于以下类型的 <input> 标签：email 和 file。

    <input> pattern 属性：
        pattern 属性描述了一个正则表达式用于验证 <input> 元素的值。
        注意:pattern 属性适用于以下类型的 <input> 标签: text, search, url, tel, email, 和 password。

    <input> placeholder 属性：
        placeholder 属性提供一种提示（hint），描述输入域所期待的值

    <input> required 属性：
        required 属性是一个 boolean 属性
        required 属性规定必须在提交之前填写输入域（不能为空）

    <input> step 属性：
        step 属性为输入域规定合法的数字间隔。


HTML5 语义元素：

    一个语义元素能够清楚的描述其意义给浏览器和开发者。
    IE9+, Firefox, Chrome, Safari 和 Opera 支持语义元素。有兼容方案，文档顶部有介绍。


HTML5 Web 存储：

    * HTML5 web 存储,一个比cookie更好的本地存储方式。
    * 使用HTML5可以在本地存储用户的浏览数据。
    * 以前本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.它也可以存储大量的数据，而不影响网站的性能.
    * 数据以 键/值 对存在, web网页的数据只允许该网页访问使用
    * IE8+, Firefox, Opera, Chrome, 和 Safari支持Web 存储

    localStorage 和 sessionStorage ：

        客户端存储数据的两个对象为：
            localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
            sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。
            typeof(Storage)!=="undefined" - 是否支持存储

        localStorage 对象：
            localStorage 对象存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。
            设置方式：localStorage.name = 'z' 或 localStorage.setItem('name', 'z')

            localStorage\sessionStorage，可使用的API都相同：

                保存数据：localStorage.setItem(key,value);
                读取数据：localStorage.getItem(key);
                删除单个数据：localStorage.removeItem(key);
                删除所有数据：localStorage.clear();
                得到某个索引的key：localStorage.key(index);

        sessionStorage 对象：
            sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。


HTML5 Web SQL 数据库：

    * Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
    * Web SQL 数据库可以在最新版的 Safari, Chrome 和 Opera 浏览器中工作。

    核心方法：

        规范中定义的三个核心方法：

            openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
            transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
            executeSql：这个方法用于执行实际的 SQL 查询。

        打开数据库:

            可以使用 openDatabase() 方法来打开已存在的数据库，如果数据库不存在，则会创建一个新的数据库:

                var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

            参数说明：

                数据库名称、版本号、描述文本、数据库大小、创建回调

        执行查询操作：

            执行操作使用 database.transaction() 函数：

                db.transaction(function (tx) {  
                    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
                });

        插入数据:

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
            });

            也可以使用动态值来插入数据：
            db.transaction(function (tx) {  
                tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
                tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]);
            });

        读取数据:

            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                    var len = results.rows.length, i;
                    msg = "<p>查询记录条数: " + len + "</p>";
                    document.querySelector('#status').innerHTML +=  msg;
                    
                    for (i = 0; i < len; i++){
                        alert(results.rows.item(i).log );
                    }
                    
                }, null);
            });

        删除记录：

            db.transaction(function (tx) {
                tx.executeSql('DELETE FROM LOGS  WHERE id=1');
            });

            删除指定的数据id也可以是动态的：
            db.transaction(function(tx) {
                tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
            });

        更新记录：

            db.transaction(function (tx) {
                tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2');
            });

            更新指定的数据id也可以是动态的：
            db.transaction(function(tx) {
                tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=?', [id]);
            });


HTML5 应用程序缓存:

    使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

    什么是应用程序缓存：

        HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

        应用程序缓存为应用带来三个优势：

            离线浏览 - 用户可在应用离线时使用它们
            速度 - 已缓存资源加载得更快
            减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

        浏览器支持：IE10, Firefox, Chrome, Safari 和 Opera 支持应用程序缓存。

    Cache Manifest 基础：

        如需启用应用程序缓存，请在文档的<html> 标签中包含 manifest 属性：
            <!DOCTYPE HTML>
            <html manifest="demo.appcache">
            ...
            </html>

            * 每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。
            * manifest 文件的建议的文件扩展名是：".appcache"。
            * manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。

    Manifest 文件：

        manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

        manifest 文件可分为三个部分：

            CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
            NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
            FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

        CACHE MANIFEST：

            第一行，CACHE MANIFEST，是必需的：

            CACHE MANIFEST
            /theme.css
            /logo.gif
            /main.js

            上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然是可用的。

        NETWORK：

            下面的 NETWORK 小节规定文件 "login.php" 永远不会被缓存，且离线时是不可用的：

            NETWORK:
            login.php

            可以使用星号来指示所有其他资源/文件都需要因特网连接：

            NETWORK:
            *

        FALLBACK：

            下面的 FALLBACK 小节规定如果无法建立因特网连接，则用 "offline.html" 替代 /html5/ 目录中的所有文件：

            FALLBACK:
            /html/ /offline.html

            注意: 第一个 URI 是资源，第二个是替补。

    更新缓存：

        一旦应用被缓存，它就会保持缓存直到发生下列情况：

        用户清空浏览器缓存
        manifest 文件被修改（参阅下面的提示）
        由程序来更新应用缓存

    完整的 Manifest 文件：

        CACHE MANIFEST
        # 2012-02-21 v1.0.0
        /theme.css
        /logo.gif
        /main.js

        NETWORK:
        login.php

        FALLBACK:
        /html/ /offline.html

        提示：以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存会在其 manifest 文件更改时被更新。如果您编辑了一幅图片，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。

    关于应用程序缓存的说明：

        一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。

        注意: 浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。


HTML5 Web Workers： 

    web worker 是运行在后台的 JavaScript，不会影响页面的性能。

    什么是 Web Worker：

        当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

        web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

    浏览器支持：

        IE10, Firefox, Chrome, Safari 和 Opera 都支持Web workers。

    检测浏览器是否支持 Web Worker：

        if(typeof(Worker)!=="undefined")
        {
            // 是的! Web worker 支持!
        }
        else
        {
            //抱歉! Web Worker 不支持 
        }

    创建 web worker 文件：

        var i=0;

        function timedCount()
        {
            i=i+1;
            postMessage(i);
            setTimeout("timedCount()",500);
        }

        timedCount();

        重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。
        注意: web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。

    创建 Web Worker 对象：

        var w=new Worker("demo_workers.js");

        然后可以从 web worker 发生和接收消息了。
        向 web worker 添加一个 "onmessage" 事件监听器：

        w.onmessage=function(event){
            dconsole.log(event.data);
        };

    终止 Web Worker：

        创建 web worker 对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止。
        如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法：

        w.terminate();
        w = undefined; // 释放w变量内存

    Web Workers 和 DOM：

        由于 web worker 位于外部文件中，它们无法访问下列 JavaScript 对象：

        window 对象
        document 对象
        parent 对象


HTML5 服务器发送事件(Server-Sent Events)：

    HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。

    Server-Sent 事件 - 单向消息传递：

        Server-Sent 事件指的是网页自动获取来自服务器的更新。
        以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

    浏览器支持：

        所有主流浏览器均支持服务器发送事件，除了 IE。

    接收 Server-Sent 事件通知：

        var source=new EventSource("demo_sse.php");
        source.onmessage=function(event)
        {
            console.log(event.data);
        };

        创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo_sse.php"）
        每接收到一次更新，就会发生 onmessage 事件
        当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

    检测 Server-Sent 事件支持：

        if(typeof(EventSource)!=="undefined")
        {
            // 浏览器支持 Server-Sent
        }
        else
        {
            // 浏览器不支持 Server-Sent..
        }

    服务器端代码实例:

        * 为了让上面的例子可以运行，您还需要能够发送数据更新的服务器（比如 PHP 和 ASP）。
        * 服务器端事件流的语法是非常简单的。把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。

    EventSource 对象：

        onopen	    当通往服务器的连接被打开
        onmessage	当接收到消息
        onerror	    当发生错误


HTML5 WebSocket：

    * WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
    * WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。
    * 在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
    * 现在很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔，由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。
    * WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

    浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据：通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

    创建 WebSocket 对象：

        var Socket = new WebSocket(url, [protocol] );
        url, 指定连接的 URL。参数 protocol 是可选的，指定了可接受的子协议。

    WebSocket 属性：

        Socket.readyState	

            只读属性 readyState 表示连接状态，可以是以下值：

            0 - 表示连接尚未建立。

            1 - 表示连接已建立，可以进行通信。

            2 - 表示连接正在进行关闭。

            3 - 表示连接已经关闭或者连接不能打开。

        Socket.bufferedAmount

            只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。

    WebSocket 事件：

        
        事件	    事件处理程序	        描述
        open	    Socket.onopen	    连接建立时触发
        message	    Socket.onmessage	客户端接收服务端数据时触发
        error	    Socket.onerror	    通信发生错误时触发
        close	    Socket.onclose	    连接关闭时触发

    WebSocket 方法：

        Socket.send()	使用连接发送数据
        Socket.close()	关闭连接

    WebSocket 实例：

        WebSocket 协议本质上是一个基于 TCP 的协议。
        建立一个 WebSocket 连接：

            * 客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求
            * 服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

        客户端的 HTML 和 JavaScript： 

            目前大部分浏览器支持 WebSocket() 接口，你可以在以下浏览器中尝试实例： Chrome, Mozilla, Opera 和 Safari：

                function WebSocketTest()
                {
                    if ("WebSocket" in window)
                    {
                    alert("您的浏览器支持 WebSocket!");
                    
                    // 打开一个 web socket
                    var ws = new WebSocket("ws://localhost:9998/echo");
                        
                    ws.onopen = function()
                    {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        ws.send("发送数据");
                        alert("数据发送中...");
                    };
                        
                    ws.onmessage = function (evt) 
                    { 
                        var received_msg = evt.data;
                        alert("数据已接收...");
                    };
                        
                    ws.onclose = function()
                    { 
                        // 关闭 websocket
                        alert("连接已关闭..."); 
                    };
                    }
                    
                    else
                    {
                    // 浏览器不支持 WebSocket
                    alert("您的浏览器不支持 WebSocket!");
                    }
                }

    安装 pywebsocket：

        实现未必websocket连接需要创建一个支持 WebSocket 的服务。从 pywebsocket 下载 mod_pywebsocket：

            git clone https://github.com/google/pywebsocket.git

        mod_pywebsocket 需要 python 环境支持
        mod_pywebsocket 是一个 Apache HTTP 的 Web Socket扩展，安装步骤如下：

        解压下载的文件。
        进入 pywebsocket 目录。
        执行命令：

        $ python setup.py build
        $ sudo python setup.py install

        查看文档说明:

        $ pydoc mod_pywebsocket

    开启服务：

        在 pywebsocket/mod_pywebsocket 目录下执行以下命令：

            $ sudo python standalone.py -p 9998 -w ../example/
            
        会开启一个端口号为 9998 的服务，使用 -w 来设置处理程序 echo_wsh.py 所在的目录。

    
    一个典型的Websocket握手请求如下：

        客户端请求

        GET / HTTP/1.1
        Upgrade: websocket
        Connection: Upgrade
        Host: example.com
        Origin: http://example.com
        Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
        Sec-WebSocket-Version: 13
        服务器回应

        HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
        Sec-WebSocket-Location: ws://example.com/

        * Connection 必须设置 Upgrade，表示客户端希望连接升级。
        * Upgrade 字段必须设置 Websocket，表示希望升级到 Websocket 协议。
        * Sec-WebSocket-Key 是随机的字符串，服务器端会用这些数据来构造出一个 SHA-1 的信息摘要。把 “Sec-WebSocket-Key” 加上一个特殊字符串 “258EAFA5-E914-47DA-95CA-C5AB0DC85B11”，然后计算 SHA-1 摘要，之后进行 BASE-64 编码，将结果做为 “Sec-WebSocket-Accept” 头的值，返回给客户端。如此操作，可以尽量避免普通 HTTP 请求被误认为 Websocket 协议。
        * Sec-WebSocket-Version 表示支持的 Websocket 版本。RFC6455 要求使用的版本是 13，之前草案的版本均应当弃用。
        * Origin 字段是可选的，通常用来表示在浏览器中发起此 Websocket 连接所在的页面，类似于 Referer。但是，与 * Referer 不同的是，Origin 只包含了协议和主机名称。
        其他一些定义在 HTTP 协议中的字段，如 Cookie 等，也可以在 Websocket 中使用。
        在服务器方面，网上都有不同对websocket支持的服务器，不同的后台语言支持。

        Socket 是传输控制层协议，WebSocket 是应用层协议。