var foo = function bar() {
    var foo = "baz"
    console.error("foo", foo);
    function baz(foo) {
        foo = bar;
        console.error("foo", foo);
        foo; //function
    }
    baz();
};

foo();
//bar(); //Error!