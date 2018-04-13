/**
 * 配置文件
 */
//发布配置
const production = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 80,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "root",
        password: "root",
        port: "3306",
        database: "test",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

//开发配置
const development = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 80,
        password: "root",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "root",
        password: "root",
        port: "3306",
        database: "test",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

const config = development

module.exports = config