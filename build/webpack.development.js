
const path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    lintOnSave: false,
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
            }
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: (config) => {
        config.module
        .rule('js')
        .include
            .add(__dirname+'packages')
            .end()
        .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}