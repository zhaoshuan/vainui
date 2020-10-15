
const entry =require('./entry');

module.exports = {
    css: {
        sourceMap: true,
        extract: {
            filename: '[name]/style.css'
        }
    },
    configureWebpack: {
        entry: {
            ...entry('packages'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
        }
    },
    outputDir: 'dist/lib',
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')

        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    },
    productionSourceMap: false,
}