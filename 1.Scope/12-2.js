var foo = "foo";

function bob() {
    var foo = "foo2";
    console.log(foo);
}
bob();

console.log(foo);