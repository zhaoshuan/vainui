module.exports = {
    lintOnSave: false,
    outputDir: 'dist/demo',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
}