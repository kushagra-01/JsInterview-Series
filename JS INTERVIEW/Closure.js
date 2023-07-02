function outer() {
    var j = "j is outer function variable";

    function inner() {
        var k = "k is inner function variable";
        console.log(k); 
        console.log(j);
    }

inner()
}
outer()


var y = "10 is outer data value wch preserve in outside";
function closure() {
    var x = 23;
    console.log(x);
    console.log(y);
}
closure()