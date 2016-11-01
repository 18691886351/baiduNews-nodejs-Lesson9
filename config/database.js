/**
 * 数据库配置文件
 */
module.exports = {
    mysql: {
    	connectionLimit : 10,
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database:'baidunews', // 前面建的user表位于这个数据库中
        port: 3306
    }
}