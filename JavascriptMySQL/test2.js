function f1() {
    console.log("f1()");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function f2() {
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
    await p1;
    console.log("f2()");
}

function f3() {
    console.log("f3()");
}

f1();
f2();
f3();