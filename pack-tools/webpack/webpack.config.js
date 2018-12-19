var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 问题：extract-text-webpack-plugin还不能支持webpack4.0.0以上的版本
// 解决：npm install --save-dev extract-webpack-plugin@next
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// 通过 manifest，webpack 能够对「你的模块映射到输出 bundle 的过程」保持追踪
// 通过使用 WebpackManifestPlugin，可以直接将数据提取到一个 json 文件，以供使用
var ManifestPlugin = require('webpack-manifest-plugin');

var config = {
    // mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/home.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // 跟js打包成一个chunk
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // }

            // 分离css 会将所有入口引入的css文件分离打包到一个styles.css文件中
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            // 处理图片 url-loader类似与file-loader
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    // {
                    //     loader: 'image-webpack-loader', // 压缩图片
                    //     options: {
                    //         // bypassOnDebug: true, // webpack@1.x
                    //         disable: true, // webpack@2.x and newer
                    //     },
                    // },
                ]
            },
            // 处理字体file-loader和url-loader也可以处理字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。json是默认可处理数据无需处理
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
              test: /\.xml$/,
                  use: [
                    'xml-loader'
                  ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // 清理之前打包代码
        new CleanWebpackPlugin(['dist']),
        // 分离css
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        // HtmlWebpackPlugin 处理html资源链接
        new HtmlWebpackPlugin({
            title: 'Output Management',
            // filename: './'
        }),
        // 提取manifest数据到json文件
        new ManifestPlugin()
    ]
};

module.exports = config;


/*
* 如何搭建一个打包的开发环境
*
* 搭建开发环境原因：当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
* 当我们打包时形成一个或多个bundle文件，发生代码错误是指向的是包含错误代码的bundle而不是源文件位置。不利于定位错误。
*
* 解决：为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码
* */


/*
* webpack配置详解
*/

/*
* 1. entry入口配置：告诉webpack以何种方式导入依赖
*
*    两种方式：单入口和多入口
*
*       单入口存在三种配置方式：(用于打包一个bundle包文件)
*
*           1. 字符串入口文件路径
*
*               例：entry: './src/index.js'
*
*               单个入口导入依赖生成响应chunk时使用
*
*           2. 字符串入口文件路径-数组
*
*               例：entry: ['./src/index.js', './src/app.js']
*
*               多个入口导入依赖并最终生成一个chunk时使用此方法
*
*           3. 对象
*
*               例：entry: {
*                       main: './src/index.js'
*                  }
*
*               多入口生成多个对应chunk时使用，也可以单入口生成对应单个chunk
*
*       多入口只有一种配置方式：(可用于多页应用和单页应用中对公共库的分离打包)
*
*           1. 对象配置
*
*               例：entry: {
*                       app: './src/app.js',
*                       vendors: './src/vendor.js'
*                  }
*
*               1. 此设置允许你使用CommonsChunkPlugin「应用程序 bundle」中提取vendor引用(vendor reference)到vendor bundle，
*               并把引用 vendor 的部分替换为 __webpack_require__() 调用。如果应用程序 bundle 中没有 vendor 代码，
*               那么你可以在 webpack 中实现被称为长效缓存的通用模式。
*
*               2. 为了支持提供更佳 vendor 分离能力的 DllPlugin，考虑移除该场景。
* */


/*
* 2. output输出配置：控制webpack如何输出结果和存储位置，即使可以存在多个入口起点，但只指定一个输出配置
*
*    filename：输出文件文件名
*
*    path：所有输出文件的目标路径, 打包后文件在硬盘中的存储位置(必须是绝对路径)
*
*       {
*           filename: 'bundle.js',
*           path: __dirname + '/src/dist'
*       }
*
*       多入口起点的输出配置
*           {
*               filename: '[name].bundle.js',
*               path: __dirname + '/src/dist'
*           }
*
*    publicPath：输出解析文件的目录，指定资源文件引用的目录，打包后浏览器访问服务时的url路径中通用的一部分
*
*    path和publicPath区别：
*
*       path：webpack所有文件的输出的路径，必须是绝对路径，
*            比如：output输出的js,url-loader解析的图片，
*            HtmlWebpackPlugin生成的html文件，
*            都会存放在以path为基础的目录下。
*
*       publicPath：不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全，
*                  常见的就是css文件里面引入的图片.(设置的其实是一个基础的路径，它会为我们所有的资源
*                  都应用上publicPath设置的值，然后再接上资源对应转换出来的路径)
*
*       path仅仅告诉Webpack结果存储在哪里，然而publicPath项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值
*
*       {
*           filename: 'bundle.js',
*           path: __dirname + '/src/dist',
*           publicPath: 'http://hpe.cdn.cn/'
*           用于图片在生产模式可能不在项目文件夹而在cdn服务器，
*           可用webpack的插件在生产编译时去补全或者说更新这些图片的url，
*           或者是用于html文件中引入的css和js文件的url的更新
*       }
* */


/*
* 3. mode模式
*
*    module.exports = {
*       mode: 'production\development'
*    }
*
*    development: 会将process.env.NODE_ENV的值设为development。启用NamedChunksPlugin和NamedModulesPlugin
*
*    production: 会将process.env.NODE_ENV的值设为 production。启用FlagDependencyUsagePlugin,
*                FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin,
*                OccurrenceOrderPlugin, SideEffectsFlagPlugin和UglifyJsPlugin。
*
*    记住，只设置 NODE_ENV，则不会自动设置 mode。

     // webpack.development.config.js
        module.exports = {
        + mode: 'development'
        - plugins: [ // 设置了dev模式相当于添加了以下两个插件
        -   new webpack.NamedModulesPlugin(),
        -   new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        - ]
        }

    // webpack.production.config.js
        module.exports = {
        +  mode: 'production',
        -  plugins: [  // 设置了production模式相当于设置了以下插件
        -    new UglifyJsPlugin(),
        -    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
            -    new webpack.optimize.ModuleConcatenationPlugin(),
        -    new webpack.NoEmitOnErrorsPlugin()
        -  ]
        }
* */


/*
* 4. loader: 用于对模块的源代码进行转换，可以使你在import或"加载"模块时预处理文件
*            loader类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。
*            loader可以将文件从不同的语言（如 TypeScript）转换为JavaScript，或将内联图像转换为dataURL。
*            loader甚至允许你直接在JavaScript模块中importCSS文件
*
*    步骤：需要webpack加载并转换某种源码
*
*       1. 下载相应的loader，比如加载并转换css或把ts转换为js
*
*          npm install --save-dev css-loader ts-loader
*
*       2. 配置loader，对每个.css文件和.ts文件应用css-loader和ts-loader
*
*          module.exports = {
*               module: {
*                   rules: [
*                       {test: /\.css/, use: 'css-loader'},
*                       {test: /\.ts/, use: 'ts-loader'}
*                   ]
*               }
*          }
*
*   使用loader方式：应用程序中，有三种使用loader的方式
*
*       配置(推荐)：在webpack配置文件中指定loader
*
             module.rules中允许指定多个loader

             module: {
                rules: [
                  {
                    test: /\.css$/,
                    use: [
                      { loader: 'style-loader' },
                      {
                        loader: 'css-loader',
                        options: {
                          modules: true
                        }
                      }
                    ]
                  }
                ]
              }
*
*       内联：在每个import语句中显式的指定loader
*
*            可以在import语句或任何等效于"import"的方式中指定 loader。使用 ! 将资源中的loader分开。
*            分开的每个部分都相对于当前目录解析
*
*            通过前置所有规则及使用 !，可以对应覆盖到配置中的任意 loader。
*
*            选项可以传递查询参数，例如?key=value&foo=bar，或者一个JSON对象，例如?{"key":"value","foo":"bar"}。
*
*            尽可能使用module.rules，因为这样可以减少源码中的代码量，并且可以在出错时，更快地调试和定位loader中的问题。
*
*            例：import Styles from 'style-loader!css-loader?modules!./styles.css';
*
*       CLI：在shell命令中指定
*
*           webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
*
*           对 .jade 文件使用 jade-loader，对 .css 文件使用 style-loader 和 css-loader
*
*   loader特性：
*
*       loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的loader将按照相反的顺序执行。loader链
*              中的第一个loader返回值给下一个loader。在最后一个loader，返回webpack所预期的JavaScript。
*
*       loader 可以是同步的，也可以是异步的。
*
*       loader 运行在 Node.js 中，并且能够执行任何可能的操作。
*
*       loader 接收查询参数。用于对loader传递配置。
*
*       loader 也能够使用 options 对象进行配置。
*
*       除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。
*
*       插件(plugin)可以为 loader 带来更多特性。
*
*       loader 能够产生额外的任意文件。
*
*       loader 通过（loader）预处理函数，为JavaScript生态系统提供了更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如压缩、打包、语言翻译和其他更多
*
*   解析loader：
*
*       loader 遵循标准的模块解析。多数情况下，loader将从模块路径（通常将模块路径认为是 npm install, node_modules）解析
*
*       loader 模块需要导出为一个函数，并且使用 Node.js 兼容的 JavaScript 编写。通常使用 npm 进行管理，
*              但是也可以将自定义loader作为应用程序中的文件。按照约定，loader 通常被命名为 xxx-loader
* */


/*
* 5. 插件：目的在于解决 loader 无法实现的其他事
*
*    工作原理解析：
*
*       webpack 插件是一个具有apply属性的 JavaScript 对象。apply属性会被webpack compiler调用，
*               并且compiler 对象可在整个编译生命周期访问
*
*    用法：
*
*       由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。
*
*       根据你的 webpack 用法，这里有多种方式使用插件。
*
*    配置：
*
        const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
        const webpack = require('webpack'); //访问内置的插件
        const path = require('path');

        const config = {
          entry: './path/to/my/entry/file.js',
          output: {
            filename: 'my-first-webpack.bundle.js',
            path: path.resolve(__dirname, 'dist')
          },
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
              }
            ]
          },
          plugins: [
            new webpack.optimize.UglifyJsPlugin(), // 内置插件使用
            new HtmlWebpackPlugin({template: './src/index.html'}) // 第三方插件使用
          ]
        };

        module.exports = config;

*   Node API：
*
*       即便使用 Node API，用户也应该在配置中传入 plugins 属性。compiler.apply 并不是推荐的使用方式
*
        const webpack = require('webpack'); //访问 webpack 运行时(runtime)
        const configuration = require('./webpack.config.js');

        let compiler = webpack(configuration);
        compiler.apply(new webpack.ProgressPlugin());

        compiler.run(function(err, stats) {
          // ...
        });

        以上示例和 webpack 自身运行时(runtime) 极其类似。
        wepback 源码中隐藏有大量使用示例，你可以用在自己的配置和脚本中
* */


/*
* 6. 配置：
*
*    webpack 配置文件很少有完全相同的，是因为webpack的配置文件是导出一个对象的js文件，由webpack根据对象定义的属性进行解析。
*
*    webpack 配置是标准的nodejs CommomJS模块，可以做到以下事情：
*
*        通过require(...)导入文件
*        通过require(...)使用node工具函数
*        使用js流控制语句，如：?:
*        对常用值使用常量或变量
*        编写并执行函数生成部分配置
*
*    应该避免：
*
*       在使用webpack命令行接口(CLI)（应该编写自己的命令行接口(CLI)，或使用 --env）时，访问命令行接口(CLI)参数
*       导出不确定的值（调用 webpack 两次应该产生同样的输出文件）
*       编写很长的配置（应该将配置拆分为多个文件）
*
*    建议：你的webpack配置，可以有很多种的格式和风格。但为了你和你的团队能够易于理解和维护，你们要始终采取同一种用法、格式和风格
* */


/*
* 7. 模块：
*
*    在模块化编程中，开发者将程序分解为离散的功能块，称为模块。
*
*    每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。 精心编写的模块提供了可靠的抽象和封装界限，
*    使得应用程序中每个模块都具有条理清楚的设计和明确的目的
*
*    node从最开始就支持模块化编程。在web端，模块化的支持正缓慢到来。在web存在多种支持JavaScript模块化的工具，
*    这些工具各有优势和限制。webpack基于从这些系统获得的经验教训，并将模块的概念应用于项目中的任何文件。
*
*    webpack模块：
*
*       对比 Node.js 模块，webpack 模块能够以各种方式表达它们的依赖关系，几个例子如下：
*
*       ES2015 import 语句
*       CommonJS require() 语句
*       AMD define 和 require 语句
*       css/sass/less 文件中的 @import 语句。
*       样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)
*
*       webpack 1 需要特定的 loader 来转换 ES 2015 import，然而通过 webpack 2 可以开箱即用。
*
*    支持的模块类型：
*
*       webpack 通过loader可以支持各种语言和预处理器编写模块。loader 描述了webpack如何处理非 JavaScript(non-JavaScript) _模块_，
*       并且在bundle中引入这些依赖。 webpack 社区已经为各种流行语言和语言处理器构建了loader，包括：
*
*           CoffeeScript、TypeScript、ESNext (Babel)、Sass、Less、Stylus
*
*       webpack 提供了可定制的、强大和丰富的API，允许任何技术栈使用webpack，保持了在你的开发、测试和生成流程中无侵入性
* */


/*
* 8. 模块解析：
*
*    resolver 是一个库(library)，用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块，然后被后者引用。
*
*    所依赖的模块可以是来自应用程序代码或第三方的库(library)。resolver 帮助webpack找到bundle中需要引入的模块代码，
*    这些代码在包含在每个require/import语句中。当打包模块时，webpack 使用enhanced-resolve来解析文件路径
*
*    webpack 中的解析规则：使用 enhanced-resolve，webpack 能够解析三种文件路径
*
*       绝对路径：
*
*           import "/home/me/file";
*           import "C:\\Users\\me\\file";
*           已经取得文件的绝对路径，因此不需要进一步再做解析
*
*       相对路径：
*
*           import "./file2";
*           使用import或require的资源文件所在的目录被认为是上下文目录。在import/require中给定的相对路径，会添加此上下文路径，以产生模块的绝对路径
*
*       模块路径：
*
*           import "module";
*           import "module/lib/file";
*           模块将在 resolve.modules 中指定的所有目录内搜索。你可以替换初始模块路径，此替换路径通过使用resolve.alias配置选项来创建一个别名
*
*       根据上述规则解析路径后，解析器将检查路径指向的是文件还是文件夹，如果指向文件：
*
*           1. 如果路径具有文件扩展名，则被直接将文件打包。
*           2. 否则，将使用 [resolve.extensions] 选项作为文件扩展名来解析，
*              此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）
*
*       如果指向文件夹：
*
*           1. 如果文件夹中包含package.json文件，则按照顺序查找resolve.mainFields配置选项中指定的字段。
*              并且package.json中的第一个这样的字段确定文件路径。
*           2. 如果package.json文件不存在或者package.json文件中的main字段没有返回一个有效路径，则按照顺序查找
*              resolve.mainFiles配置选项中指定的文件名，看是否能在import/require目录下匹配到一个存在的文件名。
*           3. 文件扩展名通过resolve.extensions选项采用类似的方法进行解析
*
*    解析 Loader：
*
*       Loader 解析遵循与文件解析器指定的规则相同的规则。但是resolveLoader配置选项可以
*       用来为Loader提供独立的解析规则
*
*    缓存：
*
*       每个文件系统访问都被缓存，以便更快触发对同一文件的多个并行或串行请求。在观察模式下，只有修改过的文件会从缓存中取出。
*       如果关闭观察模式，在每次编译前清理缓存
*
* */

/*
* 9. 依赖图
*
*    任何时候，一个文件依赖于另一个文件，webpack就把此视为文件之间有依赖关系 。这使得webpack可以接收非代码资源(non-code asset)（例如图像或 web 字体），并且可以把它们作为 _依赖_ 提供给你的应用程序
*
*    1. webpack 从命令行或配置文件中定义的一个模块列表开始，处理你的应用程序。
*    2. 从这些 入口起点 开始，webpack 递归地构建一个依赖图 ，这个依赖图包含着应用程序所需的每个模块，
*       然后将所有这些模块打包为少量的 bundle - 通常只有一个 - 可由浏览器加载
*  */


/*
* 10. manifest
*
*    使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：
*
*       你或你的团队编写的源码。
*       你的源码会依赖的任何第三方的library或"vendor"代码。
*       webpack的runtime和manifest，管理所有模块的交互。
*
*       Runtime：
*
*           runtime以及伴随的manifest数据，主要是指：在浏览器运行时，webpack用来连接模块化的应用程序的所有代码。
*           runtime包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑
*
*       Manifest：
*
*           为什么会有Manifest数据：你的应用程序中，如 index.html 文件、一些 bundle 和各种资源加载到浏览器中，
*           那你精心安排的 /src 目录的文件结构现在已经不存在，所以 webpack 如何管理所有模块之间的交互，这就是 manifest 数据用途的由来
*
*           运行原理：当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。
*           这个数据集合称为"Manifest"，当完成打包并发送到浏览器时，会在运行时通过Manifest来解析
*           和加载模块。无论你选择哪种模块语法，那些import或require语句现在都已经转换为
 *          __webpack_require__ 方法，此方法指向模块标识符。通过使用 manifest
 *          中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块
*  */

/*
* 11. 构建目标(targets)：
*
*   因为服务器和浏览器代码都可以用JavaScript编写，所以 webpack 提供了多种构建目标(target)，
*   你可以在你的 webpack 配置中设置
*
*   用法：
*
*       module.exports = {
*           target: 'node'
*       }
*
*       使用 node webpack 会编译为用于「类 Node.js」环境（使用 Node.js 的 require ，
*       而不是使用任意内置模块（如 fs 或 path）来加载 chunk）
*
*   多个target：
*
*       尽管 webpack 不支持向 target 传入多个字符串，你可以通过打包两份分离的配置来创建同构的库：
*
        var path = require('path');
        var serverConfig = {
          target: 'node',
          output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'lib.node.js'
          }
          //…
        };

        var clientConfig = {
          target: 'web', // <=== 默认是 'web'，可省略
          output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'lib.js'
          }
          //…
        };

        module.exports = [ serverConfig, clientConfig ];
* */

/*
* 12. 模块热替换：
*
*   模块热替换(HMR - Hot Module Replacement)功能会在应用程序运行过程中替换、添加或删除模块，
*   而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度
*
*       保留在完全重新加载页面时丢失的应用程序状态。
*       只更新变更内容，以节省宝贵的开发时间。
*       调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。
* */


/*
    错误就是它

        npm ERR! code Z_BUF_ERRORnpm ERR!
        errno -5npm ERR!
        zlib: unexpected end of file

    查阅思考

        翻遍了国内国外各大网站都没有找到完美的解决方案。最后查到因为网络原因造成，
        看了下日志也确实是每次都有不同的模块安装不下来

    解决办法

        1.npm install -g cnpm --registry=https://registry.npm.taobao.orgcnpm
        安装好之后，如果看官你用的是私有npm库的话还需要重新设置一下镜像。
        2.cnpm config set registry=xxxxxxx（你的私有库地址）

* */