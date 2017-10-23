const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

module.exports = {
    // devtool: 'eval-source-map', 
    devtool: false,

    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/app.jsx'),
    ],

    output: {
    	path: path.join(__dirname, './dist'), // 打包后的输出目录
        filename: '[name].js'                 // 打包的文件名
    },

    resolve:{
        // 设置路径别名
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router')
        },
        // 处理的文件后缀(webpack 3.~ 不用再增加空字符串)
        extensions: ['.js', '.jsx'],
    },
	
    module: {
        // 原loaders
    	rules: [
            {
    	        test: /\.(js|jsx)$/,
	            use: [
                    'babel-loader?cacheDirectory=true'
                ],
    	        include: path.join(__dirname, 'src')
    	    },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
       ]
    },

    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, './dist'), // URL的根目录。如果不设定的话，默认指向项目根目录。
        historyApiFallback: true,   // 让所有的404定位到index.html。
        hot: true,                  // 热加载，代码修改完后自动刷新 
        port: 8099,                 // 端口，默认8080
        // host: "0.0.0.0",         // 指定一个host,默认是localhost。如果你希望服务器外部可以访问，指定如下：host: "0.0.0.0"。比如你用手机通过IP访问。
        // progress: true,          // 显示打包进度 
        // colors: true,            // 配置打包输出颜色显示 
        // inline: true,            // 是刷新后的代码自动注入到打包后的文件中(当源文件改变时会自动刷新页面) 
        // d: true,                 // 是debug模式，输入一个source-map，并且可以看到每一个打包的文件 
        // p: true,                 // 是对代码进行压缩
        disableHostCheck: true,
        // proxy: { "/api": "http://localhost:3000" }, // 代理。比如在 localhost:3000 上有后端服务的话，你可以这样启用代理
        proxy: {
            '/api': {
                "target": {
                    "host": "api.car.cm",
                    "protocol": 'http:',
                    "port": 80
                },
                ignorePath: false,
                changeOrigin: true,
                secure: true,
            },
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html', //html模板路径
            hash: false,
        })
    ]
}
