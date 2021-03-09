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

function insertfunc(callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = "insert into girish values(1,'Girish')";
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

function display(flag,result) {
    console.log(result);
}

function closeConnection() {
    pool.end();
    console.log("connection closed");
}

function afterInsert(flag,result) {
    console.log("insertion done");
}

func(display);
insertfunc(afterInsert);
func(display);
func(closeConnection);