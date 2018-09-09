
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://localhost:8080/',
                // 重写路径
                pathRewrite: {
                    '^/api': '/mock'  //该mock文件夹在public文件夹中，打包后mock文件夹会在根目录中
                }
            }
        }
    }
}