
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "prati@001",
    database: "test"
});

function createTable() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });
}

function insertValues() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ?";
        var values = [
            ['John', 'Highway 71'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652'],
            ['Hannah', 'Mountain 21'],
            ['Michael', 'Valley 345'],
            ['Sandy', 'Ocean blvd 2'],
            ['Betty', 'Green Grass 1'],
            ['Richard', 'Sky st 331'],
            ['Susan', 'One way 98'],
            ['Vicky', 'Yellow Garden 2'],
            ['Ben', 'Park Lane 38'],
            ['William', 'Central st 954'],
            ['Chuck', 'Main Road 989'],
            ['Viola', 'Sideway 1633']
        ];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    });
}


function showTable(callback) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from customers", function (err, result) {
            if (err) throw err;
            console.log("Result: " + JSON.stringify(result));
            callback();
        });
    });
}


function readFile() {
    var fs = require("fs");

    fs.readFile("q1.txt", "utf8", function (err, data) {
        if (err) throw err;
        console.log(data);
    });
}

async function insertfunc(inputquery) {
    await con.connect();
    console.log("Connected!");
    var result = await con.query(inputquery, function (err, result) {
        console.log(result);
    });
    await con.end();
    console.log("Connection closed!")
}


async function displayfunc() {
    await con.connect();
    console.log("Connected!");
    var result = await con.query("select * from customers", [], function (err, result) {
        console.log(result);
    });
    await con.end();
    console.log("Connection closed!")
}

async function deletefunc() {
    await con.connect();
    console.log("Connected!");
    var result = await con.query("delete from customers", function (err, result) {
        console.log(result);
    });
    await con.end();
    console.log("Connection closed!")
}

async function func() {
    await displayfunc();
    await displayfunc();
}

function closeConnection() {
    console.log("closing connection");
    con.end();
}

async function insertValues() {
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    await insertfunc(sql);
}

console.log("Girish: done");
showTable(closeConnection);

