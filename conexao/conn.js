var mysql = require('mysql');

exports.open = (host, port, database, user, password) => {
    return mysql.createConnection({host:host,port:port,database:database,user:user,password:password});
}