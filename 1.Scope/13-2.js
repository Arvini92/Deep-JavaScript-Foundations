//IIFE immediately invoked function expression
var foo = "foo";

 (function IIFE(bar) {
    //var foo = "foo2";
    console.log(foo);
} )(foo);

console.log(foo);