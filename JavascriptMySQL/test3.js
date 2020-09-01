// this javascript program gives demo of promise concept in javascript 

function myfunc() {
    var promise = new Promise(function (resolve, reject) {
        const x = "geksforgeeks";
        const y = "geeksforgeeks"
        if (x === y) {
            resolve();
        } else {
            reject();
        }
    });
    return promise;
}

console.log("before promise");

myfunc().then(function () {
    console.log('Success, You are a GEEK');
}).catch(function () {
    console.log('Some error has occured');
});


console.log("after promise");