// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: application/json;charset=utf-8
//     response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
//     response
//     // 发送响应数据 "  "
//     response.write("城南花已开~");
//     response.end();
// }).listen(8040);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8040/');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var http = require("http");
var url = require("url");

function getResultStr(result) {
    let str = ''
    result.forEach((item, index) => {
        str += `\n${index}:  ${JSON.stringify(item)}`
    });
    return str
}

function start(route) {
    async function onRequest(request, response) {
        request.setEncoding('utf-8')
        var pathname = url.parse(request.url).pathname;
        var query = decodeURIComponent(url.parse(request.url).query);
        response.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8'
        });
        let content = `\n内容：城南花已开~  40已不在 \n路由：${pathname}\n参数：${query}\n\n--------------------------------------- 分割线 ---------------------------------------\n\n`
        let result = await route(pathname, query);
        result = JSON.parse(JSON.stringify(result))
        content += `操作：${result.optionName}` + getResultStr(result.result)
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8040);
    console.log("Server has started.");
}
exports.start = start;