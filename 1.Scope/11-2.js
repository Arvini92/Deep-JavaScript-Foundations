function foo() {
    //console.log(this.bar);
    console.log(bar);
}

function baz() {
   var bar = "bar";
   foo();
}

baz();