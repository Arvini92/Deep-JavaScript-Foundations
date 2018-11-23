function foo() {
    var bar = "bar";

    function baz() {
        console.log(bar);
    }
    baz();
}
foo();