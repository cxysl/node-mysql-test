var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'csl'
});
connection.connect();

var daoObj = function () {
  this.select = function (params) {
    console.log('DAO:', params)
    return new Promise((resolve, reject) => {
      let {
        tableName,
        pageNo,
        pageSize,
        orderBy
      } = params
      var sql = `SELECT * FROM ${tableName ? tableName : 'students'}  ${orderBy ? `order by id ${orderBy}`:''}  ${pageNo && pageSize ? `limit ${(pageNo-1)*pageSize},${pageSize}` : ''}`;
      console.log('sql', sql)
      connection.query(sql, function (err, result) {
        if (err) {
          console.log('[SELECT ERROR] - ', err.message);
          reject('[SELECT ERROR] - ' + err.message);
        } else {
          console.log('--------------------------SELECT----------------------------');
          resolve(result)
          console.log('------------------------------------------------------------\n\n');
        }
      });
      // connection.release()
      // connection.end();
    })
  }

  this.add = async function (params) {
    return '暂未开发'
  }
  this.del = async function (params) {
    return '暂未开发'
  }
  this.upd = async function (params) {
    return '暂未开发'
  }
}

module.exports = daoObj;