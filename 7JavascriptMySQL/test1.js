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

function func1(callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        var sql = "insert into girish values(1,'ramesh')";
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

async function displayfunc() {
    func(function (err, results) {
        if (err) {
            console.log("error!");
            return;
        }
        console.log(results);
    });
}

async function insertfunc() {
    func1(function (err, results) {
        if (err) {
            console.log("error!");
            return;
        }
        console.log(results);
    });
}

async function dboperation() {
    await displayfunc();
    await insertfunc();
    await displayfunc();
}

dboperation();

console.log('Hello Girish');
