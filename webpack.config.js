var path = require('path'),
    configs = require('./config'),
    root = configs.root;

module.exports = {
    
    entry: {
        main: "./index.js"
    },
    
    output: {
        path: configs.dist,
        publicPath: "/dist/",
        filename: "[name].js",
        //  umd包含了对amd、commonjs、var等多种规范的支持
        libraryTarget : 'amd'
    },
    
    module: {
        
    },
    
    //  用来配置应用层的模块解析，即要被打包的模块
    resolve: {
        fallback: path.join(root, "node_modules")
    },
    
    //  用来配置 loader 模块的解析
    resolveLoader: {
        fallback: path.join(root, "node_modules")
    }
};
