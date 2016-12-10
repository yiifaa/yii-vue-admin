var path = require('path'),
    yaml = require('js-yaml'),
    fs = require('fs'),
    root = path.resolve(__dirname, '../'),
    buildFile = path.resolve(__dirname, './build.yml'),
    configs;
//  载入配置信息
try {
    configs = yaml.safeLoad(fs.readFileSync(buildFile), 'utf-8');
} catch (e) {
    console.error('解析配置文件出错，请仔细检查build.yml');
}

var dist = path.resolve(root, configs.build.dist),
    src = path.resolve(root, configs.build.src);

//  输出结果
module.exports = {
    dist,
    src,
    root
};