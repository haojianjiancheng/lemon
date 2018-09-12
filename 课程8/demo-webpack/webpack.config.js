const path =require('path')
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve('dist'),
        filename:'buid.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options:{
                    name='images/[name].[ext]',
                    limit=8192
                }
            },
            {
                test:/\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name:'audios/[name].[ext]',
                    limit:10
                }
            }

        ]
    },
    resolve:{
        extensions:['.vue','.js'],
        alias:{
            'vue':'vue/dist/vue.esm'
        }
    },
    devServer:{
        contentBase:path.resolve('dist'),
        compress:true,
        port:8080,
        index:'index.html',
        open:true
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve("index.html")
        })
    ],
    mode:'development'
}