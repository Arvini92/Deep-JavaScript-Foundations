var a = b();
var c = d();
a;
console.log("a", a);
c;
console.log("c", a);

function b() {
    return c;
}

var d = function() {
    return b();
};