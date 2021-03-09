var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'prati@001',
    database: 'test'
});

function func(callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = "SELECT * FROM girish";
        connection.query(sql, [], function (err, results) {
            connection.release(); // always put connection back in pool after last query
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};

function insertfunc(callback,sql) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        connection.query(sql, [], function (err, results) {
            connection.release(); // always put connection back in pool after last query
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};

function display(flag, result) {
    console.log(result);
}

function closeConnection() {
    pool.end();
    console.log("connection closed");
}

function afterInsert(flag, result) {
    console.log("insertion done");
}

function readFile() {
    var fs = require("fs");

    fs.readFile("q1.txt", "utf8", function (err, data) {
        if (err) throw err;
        var array = data.split(';');
        for (var i = 0; i < array.length-1; i++) {
            insertfunc(afterInsert, array[i]);
        }
        var promise = new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000);
        });
        promise.then(function(){
            closeConnection();
        });
    });
}

readFile();