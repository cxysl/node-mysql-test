var daoObj = require('./dao')
var daoObj = new daoObj()
async function route(pathname, query) {
    if (pathname == '/favicon.ico') {
        return
    }
    console.log("请求路径： " + pathname + "  ----router");
    console.log("请求参数为：", query + "  ----router")
    let option = {}

    function urlParamsToObj(str) {
        arr = str.split('&')
        let objResult = {}
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i].split('=')[0]
            let value = arr[i].split('=')[1]
            objResult[key] = value
        }
        return objResult
    }

    option.params = urlParamsToObj(query)
    if(!option.params.tableName){
        option.params.tableName = 'students'
    }
    switch (pathname) {
        case '/query':
            option.optionName = '查询所有'
            option.result = await daoObj.select(option.params)
            break;
        case '/add':
            option.optionName = '增加字段'
            option.result = await daoObj.add(option.params)
            break;
        case '/delete':
            option.optionName = '删除字段'
            option.result = await daoObj.del(option.params)
            break;
        case '/update':
            option.optionName = '更新字段'
            option.result = await daoObj.upd(option.params)
            break;
        default:
            option.optionName = 'other'
            break;
    }
    return option
}
exports.route = route;